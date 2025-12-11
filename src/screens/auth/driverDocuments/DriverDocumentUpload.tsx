import React, {useState} from "react";
import {View, ScrollView, Image} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Layout from "components/shared/view/Layout";
import Text from "components/shared/text/Text";
import Button from "components/shared/button/Button";
import TouchableComponent from "components/shared/touchable/Touchable";
import MainIcon from "components/shared/icons/icon";
import {FONT_WEIGHTS, FONTS_SIZES} from "constants/scaling";
import {globalStyles} from "styles/globalStyles";
import {colors} from "theme/themes";
import {getSize} from "utils/unitScaling";
import {useRoute} from "@react-navigation/native";
import {useAppNavigation} from "hooks/useAppNavigation";
import Input from "components/shared/input/Input";
import {LOGIN} from "navigation/navigation.constants";
import {useCustomAlert} from "hooks/useCustomAlert";
import {useUploadRegistrationDocumentsMutation} from "api/services/authService";
import {fileToBase64} from "utils/fileUtils";

interface DocumentType {
  id: string;
  name: string;
  description: string;
  required: boolean;
  icon: string;
  uri?: string;
  fileName?: string;
  type?: string;
}

const DriverDocumentUpload = () => {
  const {authNavigation} = useAppNavigation();
  const route = useRoute();
  const {userId, email} = route.params as {userId: string; email: string};
  const {success, error, warning} = useCustomAlert();

  const [profileImage, setProfileImage] = useState<{
    uri: string;
    fileName: string;
    type: string;
  } | null>(null);

  // Vehicle Information
  const [vehicleType, setVehicleType] = useState<"car" | "keke" | "bus">("car");
  const [vehicleMake, setVehicleMake] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehicleYear, setVehicleYear] = useState("");

  const [documents, setDocuments] = useState<DocumentType[]>([
    {
      id: "driver_license",
      name: "Driver's License",
      description: "Valid Nigerian driver's license",
      required: true,
      icon: "card-account-details",
    },
    {
      id: "vehicle_registration",
      name: "Vehicle Registration",
      description: "Vehicle registration certificate",
      required: true,
      icon: "file-document",
    },
    {
      id: "proof_ownership",
      name: "Proof of Ownership",
      description: "Vehicle ownership documents",
      required: true,
      icon: "certificate",
    },
    {
      id: "insurance",
      name: "Insurance Certificate",
      description: "Valid vehicle insurance",
      required: true,
      icon: "shield-check",
    },
    {
      id: "roadworthiness",
      name: "Road Worthiness",
      description: "Road worthiness certificate",
      required: true,
      icon: "road-variant",
    },
  ]);

  const [uploadDocuments, {isLoading: uploading}] =
    useUploadRegistrationDocumentsMutation();

  const pickImage = async (documentId?: string) => {
    try {
      const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== "granted") {
        warning(
          "Permission Required",
          "Please grant camera roll permissions to upload documents",
        );
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsEditing: false,
        aspect: documentId ? [4, 3] : [1, 1],
        quality: 0.8,
      });

      if (!result.canceled && result.assets[0]) {
        const asset = result.assets[0];

        // Extract file info
        const uri = asset.uri;
        const fileName = uri.split("/").pop() || "document.jpg";
        const fileType = asset.type || "image/jpeg";

        if (documentId) {
          // Update document
          setDocuments(prev =>
            prev.map(doc =>
              doc.id === documentId
                ? {
                    ...doc,
                    uri: uri,
                    fileName: fileName,
                    type: fileType,
                  }
                : doc,
            ),
          );
        } else {
          // Update profile image
          setProfileImage({
            uri: uri,
            fileName: fileName,
            type: fileType,
          });
        }
      }
    } catch (err) {
      console.error("Image picker error:", err);
      error("Upload Failed", "Failed to pick image. Please try again.");
    }
  };

  const handleSubmit = async () => {
    // Validate vehicle info
    if (!vehicleMake || !vehicleModel || !vehicleNumber || !vehicleColor) {
      error("Missing Information", "Please fill in all vehicle information");
      return;
    }

    // Validate documents
    const missingDocs = documents
      .filter(doc => doc.required && !doc.uri)
      .map(doc => doc.name);

    if (missingDocs.length > 0) {
      warning(
        "Missing Documents",
        `Please upload the following:\n\n• ${missingDocs.join("\n• ")}`,
      );
      return;
    }

    if (!profileImage) {
      error("Missing Profile Photo", "Please upload a profile picture");
      return;
    }

    try {
      console.log("📤 Converting images to base64...");

      // Convert profile photo to base64
      const profilePhotoBase64 = await fileToBase64(profileImage.uri);

      // Get driver's license
      const driverLicense = documents.find(doc => doc.id === "driver_license");
      if (!driverLicense?.uri) {
        error("Missing License", "Please upload your driver's license");
        return;
      }
      const driverLicenseBase64 = await fileToBase64(driverLicense.uri);

      // Get vehicle documents
      const vehicleDocs = documents.filter(
        doc => doc.id !== "driver_license" && doc.uri,
      );

      const vehicleDocumentsBase64 = await Promise.all(
        vehicleDocs.map(async doc => {
          if (!doc.uri) return "";
          return await fileToBase64(doc.uri);
        }),
      );

      console.log("✅ Images converted successfully");
      console.log("📧 Email:", email);
      console.log("🚗 Vehicle Type:", vehicleType);
      console.log("📄 Documents count:", vehicleDocumentsBase64.length + 2); // profile + license + vehicle docs

      // Upload documents
      const response = await uploadDocuments({
        email: email,
        driverLicense: driverLicenseBase64,
        vehicleDocuments: vehicleDocumentsBase64,
        profilePhoto: profilePhotoBase64,
        vehicleType: vehicleType,
        vehicleMake: vehicleMake,
        vehicleModel: vehicleModel,
        vehicleNumber: vehicleNumber.toUpperCase(),
        vehicleColor: vehicleColor,
        vehicleYear: vehicleYear || undefined,
      }).unwrap();

      success(
        "Documents Submitted! 🎉",
        "Your documents have been submitted for verification. We'll notify you once approved.",
        () => {
          authNavigation.navigate(LOGIN);
        },
      );
    } catch (err: any) {
      console.error("❌ Upload error:", err);
      console.error("Error data:", err?.data);

      let errorMessage = "Failed to upload documents. Please try again.";

      if (err?.data?.message) {
        errorMessage = err.data.message;
      } else if (err?.data?.error) {
        errorMessage = err.data.error;
      }

      error("Upload Failed", errorMessage);
    }
  };

  return (
    <Layout>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={[globalStyles.mb3]}>
          <Text font={FONT_WEIGHTS.bold} size={FONTS_SIZES.XXL}>
            Complete Your Profile
          </Text>
          <Text
            font={FONT_WEIGHTS.regular}
            size={FONTS_SIZES.S}
            color="gray600"
            style={[globalStyles.mt1]}>
            Upload your documents to start driving with RideMate
          </Text>
        </View>

        {/* Profile Picture */}
        <View
          style={[
            globalStyles.mb3,
            globalStyles.flex,
            globalStyles.alignItemsCenter,
          ]}>
          <TouchableComponent bounce onPress={() => void pickImage()}>
            <View
              style={[
                globalStyles.flexCenter,
                {
                  width: getSize(120),
                  height: getSize(120),
                  borderRadius: getSize(60),
                  backgroundColor: colors.gray100,
                  borderWidth: 2,
                  borderColor: colors.gray200,
                  borderStyle: "dashed",
                  overflow: "hidden",
                },
              ]}>
              {profileImage ? (
                <Image
                  source={{uri: profileImage.uri}}
                  style={{width: "100%", height: "100%"}}
                />
              ) : (
                <View style={[globalStyles.flexCenter]}>
                  <MainIcon
                    type="MaterialCommunityIcons"
                    name="camera-plus"
                    size={getSize(40)}
                    color={colors.gray400}
                  />
                  <Text
                    font={FONT_WEIGHTS.medium}
                    size={FONTS_SIZES.XS}
                    color="gray500"
                    style={[globalStyles.mt1]}>
                    Upload Photo
                  </Text>
                </View>
              )}
            </View>
          </TouchableComponent>
        </View>

        {/* Vehicle Type Selection */}
        <View style={[globalStyles.mb3]}>
          <Text
            font={FONT_WEIGHTS.semiBold}
            size={FONTS_SIZES.S}
            style={[globalStyles.mb2]}>
            Vehicle Type
          </Text>

          <View style={[globalStyles.flexRow, {gap: getSize(12)}]}>
            {[
              {id: "car", label: "Car", icon: "car"},
              {id: "keke", label: "Keke", icon: "bike"},
              {id: "bus", label: "Bus", icon: "bus"},
            ].map(type => (
              <TouchableComponent
                key={type.id}
                bounce
                onPress={() => setVehicleType(type.id as any)}
                style={[
                  globalStyles.py1,

                  {
                    alignItems: "center",
                    width: getSize(80),
                    backgroundColor:
                      vehicleType === type.id ? colors.primary : colors.white,
                    borderRadius: getSize(12),
                    borderWidth: 2,
                    borderColor:
                      vehicleType === type.id ? colors.primary : colors.gray200,
                  },
                ]}>
                <MainIcon
                  type="MaterialCommunityIcons"
                  name={type.icon}
                  size={getSize(24)}
                  color={
                    vehicleType === type.id ? colors.white : colors.gray600
                  }
                />
                <Text
                  font={FONT_WEIGHTS.semiBold}
                  size={FONTS_SIZES.XS}
                  color={vehicleType === type.id ? "white" : "gray600"}
                  style={[globalStyles.mt1]}>
                  {type.label}
                </Text>
              </TouchableComponent>
            ))}
          </View>
        </View>

        {/* Vehicle Information */}
        <View style={[globalStyles.mb3]}>
          <Text
            font={FONT_WEIGHTS.semiBold}
            size={FONTS_SIZES.S}
            style={[globalStyles.mb2]}>
            Vehicle Information
          </Text>

          <Input
            label="Vehicle Make"
            iconType="MaterialCommunityIcons"
            iconName="car"
            value={vehicleMake}
            onChangeText={setVehicleMake}
            placeholder="e.g., Toyota, Honda, Bajaj"
            autoCapitalize="words"
          />

          <Input
            label="Vehicle Model"
            iconType="MaterialCommunityIcons"
            iconName="car-settings"
            value={vehicleModel}
            onChangeText={setVehicleModel}
            placeholder="e.g., Camry, Accord, RE"
            autoCapitalize="words"
          />

          <Input
            label="Vehicle Number"
            iconType="MaterialCommunityIcons"
            iconName="numeric"
            value={vehicleNumber}
            onChangeText={text => setVehicleNumber(text.toUpperCase())}
            placeholder="e.g., ABC 123 XY"
            autoCapitalize="characters"
          />

          <Input
            label="Vehicle Color"
            iconType="MaterialCommunityIcons"
            iconName="palette"
            value={vehicleColor}
            onChangeText={setVehicleColor}
            placeholder="e.g., Black, White, Red"
            autoCapitalize="words"
          />

          <Input
            label="Year of Manufacture"
            iconType="MaterialCommunityIcons"
            iconName="calendar"
            value={vehicleYear}
            onChangeText={setVehicleYear}
            placeholder="e.g., 2020"
            keyboardType="numeric"
            maxLength={4}
          />
        </View>

        {/* Documents */}
        <View style={[globalStyles.mb3]}>
          <Text
            font={FONT_WEIGHTS.semiBold}
            size={FONTS_SIZES.S}
            style={[globalStyles.mb2]}>
            Required Documents
          </Text>

          {documents.map(doc => (
            <TouchableComponent
              key={doc.id}
              bounce
              onPress={() => void pickImage(doc.id)}
              style={[
                globalStyles.flexRow,
                globalStyles.alignItemsCenter,
                globalStyles.px2,
                globalStyles.py2,
                globalStyles.mb2,
                {
                  backgroundColor: doc.uri
                    ? colors.success + "10"
                    : colors.gray500 + "10",
                  borderRadius: getSize(12),
                  borderWidth: 1,
                  borderColor: doc.uri ? colors.success : colors.gray200,
                },
              ]}>
              <View
                style={[
                  globalStyles.flexCenter,
                  {
                    width: getSize(50),
                    height: getSize(50),
                    borderRadius: getSize(8),
                    backgroundColor: doc.uri
                      ? colors.success + "20"
                      : colors.gray100,
                  },
                ]}>
                {doc.uri ? (
                  <MainIcon
                    type="MaterialCommunityIcons"
                    name="check-circle"
                    size={getSize(24)}
                    color={colors.success}
                  />
                ) : (
                  <MainIcon
                    type="MaterialCommunityIcons"
                    name={doc.icon}
                    size={getSize(24)}
                    color={colors.gray500}
                  />
                )}
              </View>

              <View style={[globalStyles.ml2, globalStyles.flex]}>
                <Text font={FONT_WEIGHTS.semiBold} size={FONTS_SIZES.S}>
                  {doc.name}
                  {doc.required && (
                    <Text
                      font={FONT_WEIGHTS.regular}
                      color="error500"
                      size={FONTS_SIZES.S}>
                      *
                    </Text>
                  )}
                </Text>
                <Text
                  font={FONT_WEIGHTS.regular}
                  size={FONTS_SIZES.XS}
                  color="gray600">
                  {doc.uri ? "Uploaded ✓" : doc.description}
                </Text>
              </View>

              <MainIcon
                type="MaterialCommunityIcons"
                name={doc.uri ? "file-check" : "upload"}
                size={getSize(20)}
                color={doc.uri ? colors.success : colors.primary}
              />
            </TouchableComponent>
          ))}
        </View>

        {/* Submit Button */}
        <View style={[globalStyles.mb3]}>
          <Button onPress={handleSubmit} loading={uploading}>
            Submit Documents
          </Button>

          <TouchableComponent
            bounce
            onPress={() => authNavigation.goBack()}
            style={[globalStyles.mt2, globalStyles.flexCenter]}>
            <Text
              font={FONT_WEIGHTS.medium}
              size={FONTS_SIZES.S}
              color="gray600">
              Skip for now
            </Text>
          </TouchableComponent>
        </View>
      </ScrollView>
    </Layout>
  );
};

export default DriverDocumentUpload;
