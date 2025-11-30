import React from "react";
import {View} from "react-native";
import Text from "components/shared/text/Text";
import TouchableComponent from "components/shared/touchable/Touchable";
import MainIcon from "components/shared/icons/icon";
import {FONT_WEIGHTS, FONTS_SIZES} from "constants/scaling";
import {globalStyles} from "styles/globalStyles";
import {colors} from "theme/themes";
import {getSize} from "utils/unitScaling";

interface MenuItem {
  id: string;
  title: string;
  icon: string;
  iconType: "MaterialIcons" | "MaterialCommunityIcons" | "Ionicons" | "Feather";
  onPress: () => void;
  showBadge?: boolean;
  badgeCount?: number;
}

interface ProfileMenuItemProps {
  item: MenuItem;
}

const ProfileMenuItem: React.FC<ProfileMenuItemProps> = ({item}) => {
  return (
    <TouchableComponent
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
};

export default ProfileMenuItem;
