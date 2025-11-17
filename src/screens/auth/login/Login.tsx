import React, {useState} from "react";
import {View, TextInput} from "react-native";
import Text from "components/shared/text/Text";
import {FONT_WEIGHTS, FONTS_SIZES} from "constants/scaling";
import Layout from "components/shared/view/Layout";
import {globalStyles} from "styles/globalStyles";
import {colors} from "theme/themes";
import Button from "components/shared/button/Button";
import TouchableComponent from "components/shared/touchable/Touchable";
import {appStyles} from "styles/appStyles";
import InputView from "components/shared/view/InputView";
import MainIcon from "components/shared/icons/icon";
import {getSize} from "utils/unitScaling";
import {REGISTER} from "navigation/navigation.constants";
import {useAppNavigation} from "hooks/useAppNavigation";

const Login = () => {
  const {authNavigation} = useAppNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);

    console.log("Login:", {email, password});
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <Layout>
      <InputView style={[globalStyles.flex]}>
        <View style={[globalStyles.mt5, globalStyles.mb3]}>
          <Text
            font={FONT_WEIGHTS.bold}
            size={FONTS_SIZES.XXXL}
            lineHeight={32}>
            Welcome Back
          </Text>
          <Text
            font={FONT_WEIGHTS.regular}
            size={FONTS_SIZES.S}
            lineHeight={20}
            color="black60"
            style={[globalStyles.mt1]}>
            Sign in to continue to RideMate
          </Text>
        </View>

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
              type="MaterialIcons"
              name="email"
              size={20}
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
                {color: colors.text},
              ]}
            />
          </View>
        </View>

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
              size={20}
              color={colors.gray500}
            />
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password"
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
                size={20}
                color={colors.gray500}
              />
            </TouchableComponent>
          </View>
        </View>

        <TouchableComponent
          bounce
          style={[globalStyles.alignItemsFlexEnd, globalStyles.mb3]}
          onPress={() => {
            authNavigation.navigate(REGISTER);
          }}>
          <Text
            font={FONT_WEIGHTS.semiBold}
            size={FONTS_SIZES.S}
            color="primary">
            Forgot Password?
          </Text>
        </TouchableComponent>

        <Button
          onPress={handleLogin}
          loading={loading}
          style={[globalStyles.mb2]}>
          Sign In
        </Button>

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
            Don't have an account?{" "}
          </Text>
          <TouchableComponent
            bounce
            onPress={() => {
              authNavigation.navigate(REGISTER);
            }}>
            <Text
              font={FONT_WEIGHTS.semiBold}
              size={FONTS_SIZES.S}
              color="primary">
              Sign Up
            </Text>
          </TouchableComponent>
        </View>
      </InputView>
    </Layout>
  );
};

export default Login;
