import React, {useState} from "react";
import {View} from "react-native";
import Layout from "components/shared/view/Layout";
import {globalStyles} from "styles/globalStyles";
import Button from "components/shared/button/Button";
import TouchableComponent from "components/shared/touchable/Touchable";
import InputView from "components/shared/view/InputView";
import {
  LOGIN,
  DRIVER_DOCUMENT_UPLOAD,
  EMAIL_VERIFICATION,
} from "navigation/navigation.constants";
import {useAppNavigation} from "hooks/useAppNavigation";
import AuthHeader from "components/auth/AuthHeader";
import AuthFooter from "components/auth/AuthFooter";
import Input from "components/shared/input/Input";
import Text from "components/shared/text/Text";
import {FONT_WEIGHTS, FONTS_SIZES} from "constants/scaling";
import {colors} from "theme/themes";
import {getSize} from "utils/unitScaling";
import {useRegisterMutation} from "api/services/authService";
import {useCustomAlert} from "hooks/useCustomAlert";
import MainIcon from "components/shared/icons/icon";

const Register = () => {
  const {authNavigation} = useAppNavigation();
  const {success, error, warning} = useCustomAlert();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userType, setUserType] = useState<"rider" | "driver">("rider");
  const [referralCode, setReferralCode] = useState("");

  // Driver-specific fields
  const [vehicleType, setVehicleType] = useState<"car" | "keke" | "bus">("car");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");

  const [register, {isLoading}] = useRegisterMutation();

  const handleRegister = async () => {
    if (!firstName || !lastName || !email || !phone || !password) {
      error("Missing Fields", "Please fill in all required fields");
      return;
    }

    const nameParts = firstName.trim().split(" ");
    const fName = nameParts[0] || firstName;
    const lName = lastName || nameParts.slice(1).join(" ");

    if (!fName || !lName) {
      error("Invalid Name", "Please enter both first and last name");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      error("Invalid Email", "Please enter a valid email address");
      return;
    }

    if (phone.length < 10) {
      error("Invalid Phone", "Please enter a valid phone number");
      return;
    }

    // Add phone number validation for Nigerian format
    const phoneRegex = /^(\+234|0)[7-9][0-1]\d{8}$/;
    if (!phoneRegex.test(phone)) {
      error(
        "Invalid Phone Format",
        "Please enter a valid phone number (e.g., 08012345678 or +2348012345678)",
      );
      return;
    }

    if (password.length < 6) {
      warning("Weak Password", "Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      error("Password Mismatch", "Passwords do not match");
      return;
    }

    // Validate driver-specific fields
    if (userType === "driver") {
      if (!vehicleNumber || !licenseNumber) {
        error(
          "Missing Driver Info",
          "Please fill in vehicle number and license number",
        );
        return;
      }

      if (vehicleNumber.length < 5) {
        error("Invalid Vehicle Number", "Please enter a valid vehicle number");
        return;
      }

      if (licenseNumber.length < 5) {
        error("Invalid License Number", "Please enter a valid license number");
        return;
      }
    }

    try {
      const registrationData: any = {
        firstName: fName,
        lastName: lName,
        email: email.toLowerCase().trim(),
        phone: phone.trim(),
        password,
        userType,
        referralCode: referralCode || undefined,
      };

      // Add driver-specific fields
      if (userType === "driver") {
        registrationData.vehicleType = vehicleType;
        registrationData.vehicleNumber = vehicleNumber.toUpperCase().trim();
        registrationData.licenseNumber = licenseNumber.toUpperCase().trim();
      }

      const result = await register(registrationData).unwrap();

      // FIXED: Both riders and drivers go to email verification first
      success(
        "Account Created! 🎉",
        "A verification code has been sent to your email. Please verify to continue.",
        () => {
          authNavigation.navigate(EMAIL_VERIFICATION, {
            email: result.data.user.email,
            userType: userType,
            userId: result.data.user.id,
          });
        },
      );
    } catch (err: any) {
      console.error("Registration error:", err);

      // IMPROVED ERROR HANDLING - Show detailed error message
      let errorTitle = "Registration Failed";
      let errorMessage = "Failed to create account. Please try again.";

      if (err?.data) {
        // Check for detailed error message
        if (err.data.error) {
          errorMessage = err.data.error;

          // Extract specific validation errors
          if (err.data.error.includes("phone")) {
            errorTitle = "Invalid Phone Number";
            errorMessage =
              "Please provide a valid Nigerian phone number (e.g., 08012345678)";
          } else if (err.data.error.includes("email")) {
            errorTitle = "Invalid Email";
            errorMessage = "Please provide a valid email address";
          } else if (err.data.error.includes("already exists")) {
            errorTitle = "Account Exists";
            errorMessage = "An account with this email or phone already exists";
          }
        } else if (err.data.message) {
          errorMessage = err.data.message;
        }
      } else if (err?.message) {
        errorMessage = err.message;
      }

      error(errorTitle, errorMessage);
    }
  };

  return (
    <Layout style={[globalStyles.mb5]}>
      <InputView>
        <AuthHeader
          title="Create Account"
          subtitle="Sign up to get started with RideMate"
        />

        {/* User Type Selection */}
        <View style={[globalStyles.mb3]}>
          <Text
            font={FONT_WEIGHTS.semiBold}
            size={FONTS_SIZES.S}
            style={[globalStyles.mb1]}>
            I am a
          </Text>

          <View style={[globalStyles.flexRow, {gap: getSize(12)}]}>
            <TouchableComponent
              bounce
              onPress={() => setUserType("rider")}
              style={[
                globalStyles.py05,
                globalStyles.px2,
                {
                  backgroundColor:
                    userType === "rider" ? colors.primary : colors.white,
                  borderRadius: getSize(12),
                  borderWidth: 2,
                  borderColor:
                    userType === "rider" ? colors.primary : colors.gray200,
                },
              ]}>
              <Text
                font={FONT_WEIGHTS.semiBold}
                size={FONTS_SIZES.S}
                color={userType === "rider" ? "white" : "gray600"}>
                Rider
              </Text>
            </TouchableComponent>

            <TouchableComponent
              bounce
              onPress={() => setUserType("driver")}
              style={[
                globalStyles.py05,
                globalStyles.px2,
                {
                  backgroundColor:
                    userType === "driver" ? colors.primary : colors.white,
                  borderRadius: getSize(12),
                  borderWidth: 2,
                  borderColor:
                    userType === "driver" ? colors.primary : colors.gray200,
                },
              ]}>
              <Text
                font={FONT_WEIGHTS.semiBold}
                size={FONTS_SIZES.S}
                color={userType === "driver" ? "white" : "gray600"}>
                Driver
              </Text>
            </TouchableComponent>
          </View>
        </View>

        <Input
          label="First Name"
          iconType="Ionicons"
          iconName="person-outline"
          value={firstName}
          onChangeText={setFirstName}
          placeholder="Enter your first name"
          autoCapitalize="words"
        />

        <Input
          label="Last Name"
          iconType="Ionicons"
          iconName="person-outline"
          value={lastName}
          onChangeText={setLastName}
          placeholder="Enter your last name"
          autoCapitalize="words"
        />

        <Input
          label="Email"
          iconType="MaterialCommunityIcons"
          iconName="email-outline"
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Input
          label="Phone Number"
          iconType="Feather"
          iconName="phone"
          value={phone}
          onChangeText={setPhone}
          placeholder="08012345678"
          keyboardType="phone-pad"
        />

        <Input
          label="Password"
          iconType="MaterialCommunityIcons"
          iconName="lock-outline"
          value={password}
          onChangeText={setPassword}
          placeholder="Create a password (min. 6 characters)"
          secureTextEntry={!showPassword}
          rightIcon={{
            name: showPassword ? "eye-outline" : "eye-off-outline",
            onPress: () => setShowPassword(!showPassword),
          }}
        />

        <Input
          label="Confirm Password"
          iconType="MaterialCommunityIcons"
          iconName="lock-check-outline"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirm your password"
          secureTextEntry={!showConfirmPassword}
          rightIcon={{
            name: showConfirmPassword ? "eye-outline" : "eye-off-outline",
            onPress: () => setShowConfirmPassword(!showConfirmPassword),
          }}
        />

        {/* DRIVER-SPECIFIC FIELDS */}
        {userType === "driver" && (
          <>
            <View
              style={[
                globalStyles.mb3,
                globalStyles.py2,
                globalStyles.px2,
                {
                  backgroundColor: colors.primary + "08",
                  borderRadius: getSize(12),
                  borderWidth: 1,
                  borderColor: colors.primary + "30",
                },
              ]}>
              <View
                style={[
                  globalStyles.flexRow,
                  globalStyles.alignItemsCenter,
                  globalStyles.mb2,
                ]}>
                <MainIcon
                  type="MaterialCommunityIcons"
                  name="car"
                  size={getSize(20)}
                  color={colors.primary}
                />
                <Text
                  font={FONT_WEIGHTS.semiBold}
                  size={FONTS_SIZES.S}
                  color="primary"
                  style={[globalStyles.ml1]}>
                  Driver Information
                </Text>
              </View>

              {/* Vehicle Type Selection */}
              <Text
                font={FONT_WEIGHTS.medium}
                size={FONTS_SIZES.XS}
                color="gray600"
                style={[globalStyles.mb1]}>
                Vehicle Type
              </Text>
              <View
                style={[
                  globalStyles.flexRow,
                  globalStyles.mb2,
                  {gap: getSize(8)},
                ]}>
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
                          vehicleType === type.id
                            ? colors.primary
                            : colors.white,
                        borderRadius: getSize(8),
                        borderWidth: 1.5,
                        borderColor:
                          vehicleType === type.id
                            ? colors.primary
                            : colors.gray300,
                      },
                    ]}>
                    <MainIcon
                      type="MaterialCommunityIcons"
                      name={type.icon}
                      size={getSize(22)}
                      color={
                        vehicleType === type.id ? colors.white : colors.gray600
                      }
                    />
                    <Text
                      font={FONT_WEIGHTS.medium}
                      size={FONTS_SIZES.S}
                      color={vehicleType === type.id ? "white" : "gray600"}
                      style={[globalStyles.mt05]}>
                      {type.label}
                    </Text>
                  </TouchableComponent>
                ))}
              </View>

              <Input
                label="Vehicle Number"
                iconType="MaterialCommunityIcons"
                iconName="car-side"
                value={vehicleNumber}
                onChangeText={text => setVehicleNumber(text.toUpperCase())}
                placeholder="e.g., ABC 123 XY"
                autoCapitalize="characters"
              />

              <Input
                label="Driver's License Number"
                iconType="MaterialCommunityIcons"
                iconName="card-account-details"
                value={licenseNumber}
                onChangeText={text => setLicenseNumber(text.toUpperCase())}
                placeholder="e.g., ABC123456789"
                autoCapitalize="characters"
              />
            </View>
          </>
        )}

        <Input
          label="Referral Code (Optional)"
          iconType="MaterialCommunityIcons"
          iconName="gift-outline"
          value={referralCode}
          onChangeText={setReferralCode}
          placeholder="Enter referral code"
          autoCapitalize="characters"
        />

        <View
          style={[
            globalStyles.flexRow,
            globalStyles.alignItemsCenter,
            globalStyles.mb3,
          ]}>
          <Text
            font={FONT_WEIGHTS.regular}
            size={FONTS_SIZES.XS}
            color="gray600">
            By signing up, you agree to our{" "}
          </Text>
          <TouchableComponent bounce>
            <Text
              font={FONT_WEIGHTS.semiBold}
              size={FONTS_SIZES.XS}
              color="primary">
              Terms & Conditions
            </Text>
          </TouchableComponent>
        </View>

        <Button
          onPress={handleRegister}
          loading={isLoading}
          style={[globalStyles.mb2]}>
          Create Account
        </Button>

        <AuthFooter
          text="Already have an account?"
          linkText="Sign In"
          onPress={() => authNavigation.navigate(LOGIN)}
        />
      </InputView>
    </Layout>
  );
};

export default Register;
