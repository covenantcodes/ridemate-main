import React, {useState} from "react";
import {View, ScrollView, Image} from "react-native";
import Layout from "components/shared/view/Layout";
import Text from "components/shared/text/Text";
import TouchableComponent from "components/shared/touchable/Touchable";
import MainIcon from "components/shared/icons/icon";
import {FONT_WEIGHTS, FONTS_SIZES} from "constants/scaling";
import {globalStyles} from "styles/globalStyles";
import {colors} from "theme/themes";
import {getSize} from "utils/unitScaling";
import {appStyles} from "styles/appStyles";
import {DEFAULT_IMAGE_URI} from "constants/constants";
import {useAppNavigation} from "hooks/useAppNavigation";
import {useAppDispatch, useAppSelector} from "store/hooks";
import {logout} from "screens/auth/login/login.slice";
import LogoutModal from "./components/LogoutModal";
import ProfileMenuItem from "./components/ProfileMenuItem";

interface MenuItem {
  id: string;
  title: string;
  icon: string;
  iconType: "MaterialIcons" | "MaterialCommunityIcons" | "Ionicons" | "Feather";
  onPress: () => void;
  showBadge?: boolean;
  badgeCount?: number;
}

const Profile = () => {
  const {navigation} = useAppNavigation();
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(state => state.login);

  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [logoutLoading, setLogoutLoading] = useState(false);

  const handleEditProfile = () => {
    console.log("Edit profile pressed");
    // Navigate to edit profile screen
  };

  const handleLogoutPress = () => {
    setShowLogoutModal(true);
  };

  const handleLogoutConfirm = async () => {
    setLogoutLoading(true);

    try {
      // Simulate API call to logout (clear server-side session, invalidate token, etc.)
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Clear Redux state
      dispatch(logout());

      // Close modal
      setShowLogoutModal(false);
      setLogoutLoading(false);

      // Navigation to login will happen automatically via RootNavigation
      // because accessToken will be null after logout
    } catch (error) {
      console.error("Logout error:", error);
      setLogoutLoading(false);
      setShowLogoutModal(false);
    }
  };

  const handleLogoutCancel = () => {
    setShowLogoutModal(false);
  };

  const menuItems: MenuItem[] = [
    {
      id: "1",
      title: "Personal Information",
      icon: "person-outline",
      iconType: "Ionicons",
      onPress: () => console.log("Personal Information"),
    },
    {
      id: "2",
      title: "Payment Methods",
      icon: "credit-card",
      iconType: "MaterialIcons",
      onPress: () => console.log("Payment Methods"),
    },
    {
      id: "3",
      title: "Saved Places",
      icon: "location-on",
      iconType: "MaterialIcons",
      onPress: () => console.log("Saved Places"),
    },
    {
      id: "4",
      title: "Notifications",
      icon: "notifications-outline",
      iconType: "Ionicons",
      onPress: () => console.log("Notifications"),
      showBadge: true,
      badgeCount: 3,
    },
    {
      id: "5",
      title: "Security & Privacy",
      icon: "shield-checkmark-outline",
      iconType: "Ionicons",
      onPress: () => console.log("Security & Privacy"),
    },
    {
      id: "6",
      title: "Help & Support",
      icon: "help-circle-outline",
      iconType: "Ionicons",
      onPress: () => console.log("Help & Support"),
    },
    {
      id: "7",
      title: "About RideMate",
      icon: "information-circle-outline",
      iconType: "Ionicons",
      onPress: () => console.log("About RideMate"),
    },
  ];

  return (
    <Layout noPadding>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={[globalStyles.px2, globalStyles.py2]}>
          <Text font={FONT_WEIGHTS.bold} size={FONTS_SIZES.XXL}>
            Profile
          </Text>
          <Text
            font={FONT_WEIGHTS.regular}
            size={FONTS_SIZES.S}
            color="gray600">
            Manage your account
          </Text>
        </View>

        {/* Profile Card */}
        <View style={[globalStyles.px2, globalStyles.mb3]}>
          <View
            style={[
              globalStyles.px2,
              globalStyles.py2,
              appStyles.shadow,
              {
                backgroundColor: colors.white,
                borderRadius: getSize(20),
                borderWidth: 1,
                borderColor: colors.gray200,
              },
            ]}>
            {/* Avatar and Basic Info */}
            <View
              style={[
                globalStyles.flexRow,
                globalStyles.alignItemsCenter,
                globalStyles.mb2,
              ]}>
              <View style={{position: "relative"}}>
                <Image
                  source={{uri: user?.avatar || DEFAULT_IMAGE_URI}}
                  style={{
                    width: getSize(80),
                    height: getSize(80),
                    borderRadius: getSize(40),
                    borderWidth: 3,
                    borderColor: colors.primary,
                  }}
                />
                <TouchableComponent
                  bounce
                  onPress={() => console.log("Change photo")}
                  style={[
                    globalStyles.flexCenter,
                    {
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      width: getSize(28),
                      height: getSize(28),
                      borderRadius: getSize(14),
                      backgroundColor: colors.primary,
                      borderWidth: 2,
                      borderColor: colors.white,
                    },
                  ]}>
                  <MainIcon
                    type="Ionicons"
                    name="camera"
                    size={getSize(14)}
                    color={colors.white}
                  />
                </TouchableComponent>
              </View>

              <View style={[globalStyles.ml2, globalStyles.flex]}>
                <Text font={FONT_WEIGHTS.bold} size={FONTS_SIZES.L}>
                  {user?.fullname || "User"}
                </Text>
                <Text
                  font={FONT_WEIGHTS.regular}
                  size={FONTS_SIZES.S}
                  color="gray600">
                  {user?.email || "email@example.com"}
                </Text>
                <Text
                  font={FONT_WEIGHTS.regular}
                  size={FONTS_SIZES.S}
                  color="gray600">
                  {user?.phone || "+234 XXX XXX XXXX"}
                </Text>
                <View
                  style={[
                    globalStyles.flexRow,
                    globalStyles.alignItemsCenter,
                    globalStyles.mt1,
                  ]}>
                  <MainIcon
                    type="Ionicons"
                    name="calendar-outline"
                    size={getSize(14)}
                    color={colors.gray600}
                  />
                  <Text
                    font={FONT_WEIGHTS.medium}
                    size={FONTS_SIZES.XS}
                    color="gray600"
                    style={[globalStyles.ml05]}>
                    Member since{" "}
                    {user?.dateJoined
                      ? new Date(user.dateJoined).toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })
                      : "Jan 2025"}
                  </Text>
                </View>
              </View>
            </View>

            {/* Stats */}
            <View
              style={[
                globalStyles.flexRow,
                globalStyles.justifyBetween,
                globalStyles.mb2,
                {
                  paddingTop: getSize(16),
                  borderTopWidth: 1,
                  borderTopColor: colors.gray200,
                },
              ]}>
              <View style={[globalStyles.alignItemsCenter]}>
                <Text font={FONT_WEIGHTS.bold} size={FONTS_SIZES.XL}>
                  {user?.totalTrips || 45}
                </Text>
                <Text
                  font={FONT_WEIGHTS.medium}
                  size={FONTS_SIZES.XS}
                  color="gray600">
                  Total Rides
                </Text>
              </View>

              <View
                style={{
                  width: 1,
                  backgroundColor: colors.gray200,
                }}
              />

              <View style={[globalStyles.alignItemsCenter]}>
                <View
                  style={[globalStyles.flexRow, globalStyles.alignItemsCenter]}>
                  <MainIcon
                    type="Ionicons"
                    name="star"
                    size={getSize(20)}
                    color={colors.warning}
                  />
                  <Text
                    font={FONT_WEIGHTS.bold}
                    size={FONTS_SIZES.XL}
                    style={[globalStyles.ml05]}>
                    {user?.rating || 4.8}
                  </Text>
                </View>
                <Text
                  font={FONT_WEIGHTS.medium}
                  size={FONTS_SIZES.XS}
                  color="gray600">
                  Rating
                </Text>
              </View>

              <View
                style={{
                  width: 1,
                  backgroundColor: colors.gray200,
                }}
              />

              <View style={[globalStyles.alignItemsCenter]}>
                <MainIcon
                  type="MaterialCommunityIcons"
                  name="shield-check"
                  size={getSize(24)}
                  color={colors.success}
                />
                <Text
                  font={FONT_WEIGHTS.medium}
                  size={FONTS_SIZES.XS}
                  color="gray600">
                  Verified
                </Text>
              </View>
            </View>

            {/* Edit Profile Button */}
            <TouchableComponent
              bounce
              onPress={handleEditProfile}
              style={[
                globalStyles.flexRow,
                globalStyles.alignItemsCenter,
                globalStyles.justifyCenter,
                globalStyles.py2,
                {
                  backgroundColor: colors.primary,
                  borderRadius: getSize(12),
                  gap: getSize(8),
                },
              ]}>
              <MainIcon
                type="Ionicons"
                name="create-outline"
                size={getSize(20)}
                color={colors.white}
              />
              <Text
                font={FONT_WEIGHTS.semiBold}
                size={FONTS_SIZES.S}
                style={{color: colors.white}}>
                Edit Profile
              </Text>
            </TouchableComponent>
          </View>
        </View>

        {/* Menu Items */}
        <View style={[globalStyles.px2, globalStyles.mb2]}>
          <Text
            font={FONT_WEIGHTS.bold}
            size={FONTS_SIZES.S}
            style={[globalStyles.mb2]}>
            Account Settings
          </Text>
          {menuItems.map(item => (
            <ProfileMenuItem key={item.id} item={item} />
          ))}
        </View>

        {/* Logout Button */}
        <View style={[globalStyles.px2, globalStyles.mb3]}>
          <TouchableComponent
            bounce
            onPress={handleLogoutPress}
            style={[
              globalStyles.flexRow,
              globalStyles.alignItemsCenter,
              globalStyles.justifyCenter,
              globalStyles.py2,
              {
                backgroundColor: colors.white,
                borderRadius: getSize(12),
                borderWidth: 2,
                borderColor: colors.error,
                gap: getSize(8),
              },
            ]}>
            <MainIcon
              type="Ionicons"
              name="log-out-outline"
              size={getSize(20)}
              color={colors.error}
            />
            <Text
              font={FONT_WEIGHTS.semiBold}
              size={FONTS_SIZES.S}
              style={{color: colors.error}}>
              Logout
            </Text>
          </TouchableComponent>
        </View>

        {/* App Version */}
        <View style={[globalStyles.alignItemsCenter, globalStyles.mb3]}>
          <Text
            font={FONT_WEIGHTS.regular}
            size={FONTS_SIZES.XS}
            color="gray600">
            RideMate Version 1.0.0
          </Text>
        </View>
      </ScrollView>

      {/* Logout Confirmation Modal */}
      <LogoutModal
        visible={showLogoutModal}
        onConfirm={handleLogoutConfirm}
        onCancel={handleLogoutCancel}
        loading={logoutLoading}
      />
    </Layout>
  );
};

export default Profile;
