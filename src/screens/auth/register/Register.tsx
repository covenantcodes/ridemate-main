import React, {useState} from "react";
import {View, TextInput} from "react-native";
import Text from "components/shared/text/Text";
import {DM_SANS, FONT_WEIGHTS, FONTS_SIZES} from "constants/scaling";
import Layout from "components/shared/view/Layout";
import {globalStyles} from "styles/globalStyles";
import {colors} from "theme/themes";
import Button from "components/shared/button/Button";
import TouchableComponent from "components/shared/touchable/Touchable";
import {appStyles} from "styles/appStyles";
import InputView from "components/shared/view/InputView";
import MainIcon from "components/shared/icons/icon";
import {getSize} from "utils/unitScaling";
import {LOGIN} from "navigation/navigation.constants";
import {useAppNavigation} from "hooks/useAppNavigation";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const {authNavigation} = useAppNavigation();

  const handleRegister = () => {
    setLoading(true);

    console.log("Register:", {
      fullName,
      email,
      phone,
      password,
      confirmPassword,
    });
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <Layout>
      <InputView style={[globalStyles.flex]}>
        {/* Header */}
        <View style={[globalStyles.mt5, globalStyles.mb3]}>
          <Text
            font={FONT_WEIGHTS.bold}
            fontType={DM_SANS}
            size={FONTS_SIZES.XXXL}
            lineHeight={32}
            color="text">
            Create Account
          </Text>
          <Text
            font={FONT_WEIGHTS.regular}
            size={FONTS_SIZES.S}
            lineHeight={20}
            color="gray600"
            style={[globalStyles.mt1]}>
            Sign up to get started with RideMate
          </Text>
        </View>

        {/* Full Name Input */}
        <View style={[globalStyles.mb2]}>
          <Text
            font={FONT_WEIGHTS.medium}
            size={FONTS_SIZES.S}
            lineHeight={20}
            color="text"
            style={[globalStyles.mb05]}>
            Full Name
          </Text>
          <View
            style={[
              appStyles.inputContainer,
              globalStyles.flexRow,
              globalStyles.alignItemsCenter,
              globalStyles.px2,
            ]}>
            <MainIcon
              type="Ionicons"
              name="person-outline"
              size={getSize(20)}
              color={colors.gray500}
            />
            <TextInput
              value={fullName}
              onChangeText={setFullName}
              placeholder="Enter your full name"
              placeholderTextColor={colors.gray500}
              autoCapitalize="words"
              style={[
                globalStyles.flex,
                globalStyles.ml1,
                appStyles.input,
                {fontSize: getSize(14), color: colors.text},
              ]}
            />
          </View>
        </View>

        {/* Email Input */}
        <View style={[globalStyles.mb2]}>
          <Text
            font={FONT_WEIGHTS.medium}
            size={FONTS_SIZES.S}
            lineHeight={20}
            color="text"
            style={[globalStyles.mb05]}>
            Email
          </Text>
          <View
            style={[
              appStyles.inputContainer,
              globalStyles.flexRow,
              globalStyles.alignItemsCenter,
              globalStyles.px2,
            ]}>
            <MainIcon
              type="MaterialCommunityIcons"
              name="email-outline"
              size={getSize(20)}
              color={colors.gray500}
            />
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              placeholderTextColor={colors.gray500}
              keyboardType="email-address"
              autoCapitalize="none"
              style={[
                globalStyles.flex,
                globalStyles.ml1,
                appStyles.input,
                {fontSize: getSize(14), color: colors.text},
              ]}
            />
          </View>
        </View>

        {/* Phone Input */}
        <View style={[globalStyles.mb2]}>
          <Text
            font={FONT_WEIGHTS.medium}
            size={FONTS_SIZES.S}
            lineHeight={20}
            color="text"
            style={[globalStyles.mb05]}>
            Phone Number
          </Text>
          <View
            style={[
              appStyles.inputContainer,
              globalStyles.flexRow,
              globalStyles.alignItemsCenter,
              globalStyles.px2,
            ]}>
            <MainIcon
              type="Feather"
              name="phone"
              size={getSize(20)}
              color={colors.gray500}
            />
            <TextInput
              value={phone}
              onChangeText={setPhone}
              placeholder="Enter your phone number"
              placeholderTextColor={colors.gray500}
              keyboardType="phone-pad"
              style={[
                globalStyles.flex,
                globalStyles.ml1,
                appStyles.input,
                {fontSize: getSize(14), color: colors.text},
              ]}
            />
          </View>
        </View>

        {/* Password Input */}
        <View style={[globalStyles.mb2]}>
          <Text
            font={FONT_WEIGHTS.medium}
            size={FONTS_SIZES.S}
            lineHeight={20}
            color="text"
            style={[globalStyles.mb05]}>
            Password
          </Text>
          <View
            style={[
              appStyles.inputContainer,
              globalStyles.flexRow,
              globalStyles.alignItemsCenter,
              globalStyles.px2,
            ]}>
            <MainIcon
              type="MaterialCommunityIcons"
              name="lock-outline"
              size={getSize(20)}
              color={colors.gray500}
            />
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Create a password"
              placeholderTextColor={colors.gray500}
              secureTextEntry={!showPassword}
              style={[
                globalStyles.flex,
                globalStyles.ml1,
                appStyles.input,
                {fontSize: getSize(14), color: colors.text},
              ]}
            />
            <TouchableComponent
              onPress={() => setShowPassword(!showPassword)}
              bounce>
              <MainIcon
                type="Ionicons"
                name={showPassword ? "eye-outline" : "eye-off-outline"}
                size={getSize(20)}
                color={colors.gray500}
              />
            </TouchableComponent>
          </View>
        </View>

        {/* Confirm Password Input */}
        <View style={[globalStyles.mb2]}>
          <Text
            font={FONT_WEIGHTS.medium}
            size={FONTS_SIZES.S}
            lineHeight={20}
            color="text"
            style={[globalStyles.mb05]}>
            Confirm Password
          </Text>
          <View
            style={[
              appStyles.inputContainer,
              globalStyles.flexRow,
              globalStyles.alignItemsCenter,
              globalStyles.px2,
            ]}>
            <MainIcon
              type="MaterialCommunityIcons"
              name="lock-check-outline"
              size={getSize(20)}
              color={colors.gray500}
            />
            <TextInput
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirm your password"
              placeholderTextColor={colors.gray500}
              secureTextEntry={!showConfirmPassword}
              style={[
                globalStyles.flex,
                globalStyles.ml1,
                appStyles.input,
                {fontSize: getSize(14), color: colors.text},
              ]}
            />
            <TouchableComponent
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              bounce>
              <MainIcon
                type="Ionicons"
                name={showConfirmPassword ? "eye-outline" : "eye-off-outline"}
                size={getSize(20)}
                color={colors.gray500}
              />
            </TouchableComponent>
          </View>
        </View>

        {/* Terms and Conditions */}
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

        {/* Register Button */}
        <Button
          onPress={handleRegister}
          loading={loading}
          style={[globalStyles.mb2]}>
          Create Account
        </Button>

        {/* Sign In Link */}
        <View
          style={[
            globalStyles.flexRow,
            globalStyles.alignItemsCenter,
            globalStyles.justifyCenter,
          ]}>
          <Text
            font={FONT_WEIGHTS.regular}
            size={FONTS_SIZES.S}
            color="gray600">
            Already have an account?{" "}
          </Text>
          <TouchableComponent
            bounce
            onPress={() => authNavigation.navigate(LOGIN)}>
            <Text
              font={FONT_WEIGHTS.semiBold}
              size={FONTS_SIZES.S}
              color="primary">
              Sign In
            </Text>
          </TouchableComponent>
        </View>
      </InputView>
    </Layout>
  );
};

export default Register;
