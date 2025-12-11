import React from "react";
import {View, Modal} from "react-native";
import Text from "components/shared/text/Text";
import TouchableComponent from "components/shared/touchable/Touchable";
import MainIcon from "components/shared/icons/icon";
import {FONT_WEIGHTS, FONTS_SIZES} from "constants/scaling";
import {globalStyles} from "styles/globalStyles";
import {colors} from "theme/themes";
import {getSize} from "utils/unitScaling";

interface LogoutModalProps {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  loading?: boolean;
}

const LogoutModal: React.FC<LogoutModalProps> = ({
  visible,
  onConfirm,
  onCancel,
  loading,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onCancel}>
      <View
        style={[
          globalStyles.flex,
          globalStyles.justifyCenter,
          {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        ]}>
        <View
          style={[
            globalStyles.px3,
            globalStyles.py3,
            {
              backgroundColor: colors.white,
              borderRadius: getSize(20),
              marginHorizontal: getSize(20),
              width: "90%",
              maxWidth: getSize(400),
            },
          ]}>
          {/* Icon */}
          <View style={[globalStyles.flexCenter, globalStyles.mb2]}>
            <View
              style={[
                globalStyles.flexCenter,
                {
                  width: getSize(60),
                  height: getSize(60),
                  borderRadius: getSize(30),
                  backgroundColor: colors.error + "20",
                },
              ]}>
              <MainIcon
                type="Ionicons"
                name="log-out-outline"
                size={getSize(30)}
                color={colors.error}
              />
            </View>
          </View>

          {/* Title */}
          <Text
            font={FONT_WEIGHTS.bold}
            size={FONTS_SIZES.L}
            style={[globalStyles.textCenter, globalStyles.mb1]}>
            Logout
          </Text>

          {/* Message */}
          <Text
            font={FONT_WEIGHTS.regular}
            size={FONTS_SIZES.S}
            color="gray600"
            style={[globalStyles.textCenter, globalStyles.mb3]}>
            Are you sure you want to logout? You'll need to sign in again to
            access your account.
          </Text>

          {/* Buttons */}
          <View style={[{gap: getSize(12)}]}>
            {/* Cancel Button */}

            <TouchableComponent
              bounce
              onPress={onCancel}
              disabled={loading}
              style={[
                globalStyles.py2,

                {
                  backgroundColor: colors.gray100,
                  borderRadius: getSize(12),
                },
              ]}>
              <Text
                font={FONT_WEIGHTS.semiBold}
                size={FONTS_SIZES.S}
                color="gray600"
                style={{textAlign: "center"}}>
                Cancel
              </Text>
            </TouchableComponent>

            {/* Logout Button */}
            <TouchableComponent
              bounce
              onPress={onConfirm}
              disabled={loading}
              style={[
                globalStyles.py2,

                {
                  width: "100%",
                  backgroundColor: colors.error,
                  borderRadius: getSize(12),
                  opacity: loading ? 0.6 : 1,
                },
              ]}>
              <Text
                font={FONT_WEIGHTS.semiBold}
                size={FONTS_SIZES.S}
                style={{textAlign: "center", color: colors.white}}>
                {loading ? "Logging out..." : "Logout"}
              </Text>
            </TouchableComponent>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LogoutModal;
