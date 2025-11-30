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
  const [user] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+234 812 345 6789",
    avatar: DEFAULT_IMAGE_URI,
    memberSince: "Jan 2025",
    totalRides: 45,
    rating: 4.8,
  });

  const handleEditProfile = () => {
    console.log("Edit profile pressed");
    // Navigate to edit profile screen
  };

  const handleLogout = () => {
    console.log("Logout pressed");
    // Show logout confirmation modal
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

  const renderMenuItem = (item: MenuItem) => (
    <TouchableComponent
      key={item.id}
      bounce
      onPress={item.onPress}
      style={[
        globalStyles.flexRow,
        globalStyles.alignItemsCenter,
        globalStyles.justifyBetween,
        globalStyles.px2,
        globalStyles.py2,
        globalStyles.mb1,
        {
          backgroundColor: colors.white,
          borderRadius: getSize(12),
          borderWidth: 1,
          borderColor: colors.gray200,
        },
      ]}>
      <View style={[globalStyles.flexRow, globalStyles.alignItemsCenter]}>
        <View
          style={[
            globalStyles.flexCenter,
            {
              width: getSize(40),
              height: getSize(40),
              borderRadius: getSize(20),
              backgroundColor: colors.primary + "10",
            },
          ]}>
          <MainIcon
            type={item.iconType}
            name={item.icon}
            size={getSize(20)}
            color={colors.primary}
          />
        </View>
        <Text
          font={FONT_WEIGHTS.semiBold}
          size={FONTS_SIZES.S}
          style={[globalStyles.ml2]}>
          {item.title}
        </Text>
      </View>
      <View style={[globalStyles.flexRow, globalStyles.alignItemsCenter]}>
        {item.showBadge && item.badgeCount && (
          <View
            style={[
              globalStyles.flexCenter,
              {
                minWidth: getSize(20),
                height: getSize(20),
                borderRadius: getSize(10),
                backgroundColor: colors.error,
                marginRight: getSize(8),
                paddingHorizontal: getSize(6),
              },
            ]}>
            <Text
              font={FONT_WEIGHTS.bold}
              size={FONTS_SIZES.XXS}
              style={{color: colors.white}}>
              {item.badgeCount}
            </Text>
          </View>
        )}
        <MainIcon
          type="Ionicons"
          name="chevron-forward"
          size={getSize(20)}
          color={colors.gray400}
        />
      </View>
    </TouchableComponent>
  );

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
                  source={{uri: user.avatar}}
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
                  {user.name}
                </Text>
                <Text
                  font={FONT_WEIGHTS.regular}
                  size={FONTS_SIZES.S}
                  color="gray600">
                  {user.email}
                </Text>
                <Text
                  font={FONT_WEIGHTS.regular}
                  size={FONTS_SIZES.S}
                  color="gray600">
                  {user.phone}
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
                    Member since {user.memberSince}
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
                  {user.totalRides}
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
                    {user.rating}
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
          {menuItems.map(item => renderMenuItem(item))}
        </View>

        {/* Logout Button */}
        <View style={[globalStyles.px2, globalStyles.mb3]}>
          <TouchableComponent
            bounce
            onPress={handleLogout}
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
    </Layout>
  );
};

export default Profile;
