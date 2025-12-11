import React, {useEffect, useRef} from "react";
import {
  Modal,
  View,
  Animated,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import Text from "components/shared/text/Text";
import Button from "components/shared/button/Button";
import MainIcon from "components/shared/icons/icon";
import {FONT_WEIGHTS, FONTS_SIZES} from "constants/scaling";
import {colors} from "theme/themes";
import {getSize} from "utils/unitScaling";
import {globalStyles} from "styles/globalStyles";
import {AlertOptions, AlertButton} from "types/alertTypes";
import TouchableComponent from "../touchable/Touchable";

interface CustomAlertProps extends AlertOptions {
  onClose: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({
  type = "info",
  title,
  message,
  buttons = [{text: "OK"}],
  cancelable = true,
  icon,
  iconType,
  onClose,
}) => {
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleClose = () => {
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => onClose());
  };

  const handleButtonPress = (button: AlertButton) => {
    if (button.onPress) {
      button.onPress();
    }
    handleClose();
  };

  const getAlertConfig = () => {
    switch (type) {
      case "success":
        return {
          bgColor: colors.success + "15",
          iconColor: colors.success,
          iconName: icon || "check-circle",
          iconType: iconType || "MaterialCommunityIcons",
        };
      case "error":
        return {
          bgColor: colors.danger + "15",
          iconColor: colors.danger,
          iconName: icon || "close-circle",
          iconType: iconType || "MaterialCommunityIcons",
        };
      case "warning":
        return {
          bgColor: colors.warning + "15",
          iconColor: colors.warning,
          iconName: icon || "alert-circle",
          iconType: iconType || "MaterialCommunityIcons",
        };
      case "confirm":
        return {
          bgColor: colors.primary + "15",
          iconColor: colors.primary,
          iconName: icon || "help-circle",
          iconType: iconType || "MaterialCommunityIcons",
        };
      default:
        return {
          bgColor: colors.gray200,
          iconColor: colors.gray600,
          iconName: icon || "information",
          iconType: iconType || "MaterialCommunityIcons",
        };
    }
  };

  const config = getAlertConfig();

  return (
    <Modal
      transparent
      visible
      animationType="none"
      onRequestClose={cancelable ? handleClose : undefined}>
      <TouchableWithoutFeedback
        onPress={cancelable ? handleClose : undefined}
        disabled={!cancelable}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <Animated.View
              style={[
                styles.alertContainer,
                {
                  opacity: fadeAnim,
                  transform: [{scale: scaleAnim}],
                },
              ]}>
              {/* Icon */}
              <View
                style={[
                  styles.iconContainer,
                  {backgroundColor: config.bgColor},
                ]}>
                <MainIcon
                  type={config.iconType}
                  name={config.iconName}
                  size={getSize(50)}
                  color={config.iconColor}
                />
              </View>

              {/* Title */}
              <Text
                font={FONT_WEIGHTS.bold}
                size={FONTS_SIZES.XL}
                style={[globalStyles.textCenter, globalStyles.mb1]}>
                {title}
              </Text>

              {/* Message */}
              {message && (
                <Text
                  font={FONT_WEIGHTS.regular}
                  size={FONTS_SIZES.S}
                  color="gray600"
                  style={[globalStyles.textCenter, globalStyles.mb3]}>
                  {message}
                </Text>
              )}

              {/* Buttons */}
              <View style={styles.buttonsContainer}>
                {buttons.map((button, index) => {
                  const isDestructive = button.style === "destructive";
                  const isCancel = button.style === "cancel";
                  const isDefault = !isDestructive && !isCancel;

                  return (
                    <TouchableComponent
                      key={index}
                      bounce
                      onPress={() => handleButtonPress(button)}
                      style={[
                        styles.button,
                        buttons.length > 1 && globalStyles.flexCenter,
                        index > 0 && {marginLeft: getSize(12)},
                        isDestructive && styles.destructiveButton,
                        isCancel && styles.cancelButton,
                      ]}>
                      <Text
                        font={FONT_WEIGHTS.semiBold}
                        size={FONTS_SIZES.S}
                        color={
                          isDestructive
                            ? "white"
                            : isCancel
                              ? "gray600"
                              : "primary"
                        }
                        style={globalStyles.textCenter}>
                        {button.text}
                      </Text>
                    </TouchableComponent>
                  );
                })}
              </View>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: getSize(20),
  },
  alertContainer: {
    backgroundColor: colors.white,
    borderRadius: getSize(20),
    padding: getSize(24),
    width: "100%",
    maxWidth: getSize(340),
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  iconContainer: {
    width: getSize(80),
    height: getSize(80),
    borderRadius: getSize(40),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: getSize(16),
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: getSize(12),
  },
  button: {
    paddingVertical: getSize(12),
    paddingHorizontal: getSize(20),
    borderRadius: getSize(12),
    backgroundColor: colors.primary + "15",
    justifyContent: "center",
    alignItems: "center",
  },
  destructiveButton: {
    backgroundColor: colors.danger,
  },
  cancelButton: {
    backgroundColor: colors.gray100,
  },
});

export default CustomAlert;
