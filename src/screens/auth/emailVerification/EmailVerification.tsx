import React, {useState, useRef} from "react";
import {View, TextInput} from "react-native";
import Layout from "components/shared/view/Layout";
import Text from "components/shared/text/Text";
import Button from "components/shared/button/Button";
import TouchableComponent from "components/shared/touchable/Touchable";
import {FONT_WEIGHTS, FONTS_SIZES} from "constants/scaling";
import {globalStyles} from "styles/globalStyles";
import {LOGIN, DRIVER_DOCUMENT_UPLOAD} from "navigation/navigation.constants";
import {colors} from "theme/themes";
import {getSize} from "utils/unitScaling";
import {useRoute} from "@react-navigation/native";
import {useAppNavigation} from "hooks/useAppNavigation";
import {
  useVerifyEmailMutation,
  useResendVerificationCodeMutation,
} from "api/services/authService";
import {useCustomAlert} from "hooks/useCustomAlert";

const EmailVerification = () => {
  const {authNavigation} = useAppNavigation();
  const route = useRoute();
  const {email, userType, userId} = route.params as {
    email: string;
    userType?: "rider" | "driver";
    userId?: string;
  };
  const {success, error} = useCustomAlert();

  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(TextInput | null)[]>([]);

  const [verifyEmail, {isLoading}] = useVerifyEmailMutation();
  const [resendCode, {isLoading: resending}] =
    useResendVerificationCodeMutation();

  const handleCodeChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Auto-focus next input
    if (text && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    const verificationCode = code.join("");

    if (verificationCode.length !== 6) {
      error("Incomplete Code", "Please enter the complete verification code");
      return;
    }

    try {
      await verifyEmail({
        email,
        code: verificationCode,
      }).unwrap();

      // Check if user is a driver
      if (userType === "driver" && userId) {
        success(
          "Email Verified! 🎉",
          "Now let's complete your driver profile and upload documents.",
          () => {
            authNavigation.navigate(DRIVER_DOCUMENT_UPLOAD, {
              userId: userId,
              email: email,
            });
          },
        );
      } else {
        success(
          "Email Verified! 🎉",
          "You can now sign in to your account",
          () => {
            authNavigation.navigate(LOGIN);
          },
        );
      }
    } catch (err: any) {
      error(
        "Verification Failed",
        err?.data?.message || "Invalid verification code. Please try again.",
      );
    }
  };

  const handleResend = async () => {
    try {
      await resendCode({email}).unwrap();
      success("Code Sent!", "Verification code has been resent to your email");
      setCode(["", "", "", "", "", ""]);
      inputRefs.current[0]?.focus();
    } catch (err: any) {
      error(
        "Failed to Resend",
        err?.data?.message || "Failed to resend code. Please try again.",
      );
    }
  };

  return (
    <Layout>
      <View style={[globalStyles.flex, globalStyles.justifyCenter]}>
        <View style={[globalStyles.mb4]}>
          <Text
            font={FONT_WEIGHTS.bold}
            size={FONTS_SIZES.XXL}
            style={[globalStyles.mb2]}>
            Verify Your Email
          </Text>
          <Text
            font={FONT_WEIGHTS.regular}
            size={FONTS_SIZES.S}
            color="gray600">
            We've sent a 6-digit code to{"\n"}
            <Text font={FONT_WEIGHTS.semiBold} color="primary">
              {email}
            </Text>
          </Text>
        </View>

        {/* Code Input */}
        <View
          style={[
            globalStyles.flexRow,
            globalStyles.justifyBetween,
            globalStyles.mb4,
          ]}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={ref => (inputRefs.current[index] = ref)}
              value={digit}
              onChangeText={text => handleCodeChange(text, index)}
              onKeyPress={e => handleKeyPress(e, index)}
              keyboardType="number-pad"
              maxLength={1}
              style={[
                globalStyles.flexCenter,
                {
                  width: getSize(50),
                  height: getSize(60),
                  borderRadius: getSize(12),
                  borderWidth: 2,
                  borderColor: digit ? colors.primary : colors.gray200,
                  backgroundColor: digit ? colors.primary + "10" : colors.white,
                  fontSize: getSize(24),
                  fontWeight: "bold",
                  textAlign: "center",
                  color: colors.text,
                },
              ]}
            />
          ))}
        </View>

        <Button
          onPress={() => void handleVerify()}
          loading={isLoading}
          style={[globalStyles.mb3]}>
          Verify Email
        </Button>

        <View style={[globalStyles.flexRow, globalStyles.justifyCenter]}>
          <Text
            font={FONT_WEIGHTS.regular}
            size={FONTS_SIZES.S}
            color="gray600">
            Didn't receive code?{" "}
          </Text>
          <TouchableComponent
            bounce
            onPress={() => void handleResend()}
            disabled={resending}>
            <Text
              font={FONT_WEIGHTS.semiBold}
              size={FONTS_SIZES.S}
              color="primary">
              {resending ? "Sending..." : "Resend"}
            </Text>
          </TouchableComponent>
        </View>
      </View>
    </Layout>
  );
};

export default EmailVerification;
