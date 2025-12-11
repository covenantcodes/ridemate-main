import React, {useState} from "react";
import {View, Alert} from "react-native";
import {useDispatch} from "react-redux";
import Layout from "components/shared/view/Layout";
import {globalStyles} from "styles/globalStyles";
import Button from "components/shared/button/Button";
import TouchableComponent from "components/shared/touchable/Touchable";
import InputView from "components/shared/view/InputView";
import {REGISTER} from "navigation/navigation.constants";
import {useAppNavigation} from "hooks/useAppNavigation";
import AuthHeader from "components/auth/AuthHeader";
import AuthFooter from "components/auth/AuthFooter";
import Input from "components/shared/input/Input";
import Text from "components/shared/text/Text";
import {FONT_WEIGHTS, FONTS_SIZES} from "constants/scaling";
import {setAuth} from "./login.slice";
import {useLoginMutation} from "api/services/authService";
import {colors} from "theme/themes";
import {getSize} from "utils/unitScaling";

const Login = () => {
  const {authNavigation, navigation} = useAppNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<"rider" | "driver">("rider");

  // RTK Query mutation
  const [login, {isLoading}] = useLoginMutation();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    try {
      const result = await login({
        email: email.toLowerCase().trim(),
        password,
        userType,
      }).unwrap();

      // Store auth data in Redux
      dispatch(
        setAuth({
          accessToken: result.data.tokens.accessToken,
          refreshToken: result.data.tokens.refreshToken,
          user: result.data.user,
        }),
      );
    } catch (error: any) {
      console.error("Login error:", error);
      Alert.alert(
        "Login Failed",
        error?.data?.message || "Invalid credentials. Please try again.",
      );
    }
  };

  return (
    <Layout>
      <InputView style={[globalStyles.flex]}>
        <AuthHeader
          title="Welcome Back"
          subtitle="Sign in to continue to RideMate"
        />

        {/* User Type Selection */}
        {/* <View style={[globalStyles.mb3]}>
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
                style={{
                  color: userType === "driver" ? colors.white : colors.gray600,
                }}>
                Driver
              </Text>
            </TouchableComponent>
          </View>
        </View> */}

        <Input
          label="Email"
          iconType="MaterialIcons"
          iconName="email"
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input
          label="Password"
          iconType="MaterialCommunityIcons"
          iconName="lock-outline"
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry={!showPassword}
          rightIcon={{
            name: showPassword ? "eye-outline" : "eye-off-outline",
            onPress: () => setShowPassword(!showPassword),
          }}
        />
        <TouchableComponent
          bounce
          style={[globalStyles.alignItemsFlexEnd, globalStyles.mb3]}
          onPress={() => {
            console.log("Navigate to forgot password");
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
          loading={isLoading} // Use RTK Query loading state
          disabled={isLoading || !email || !password}
          style={[globalStyles.mb2]}>
          Sign In 
          {/* as {userType === "rider" ? "Rider" : "Driver"} */}
        </Button>
        <AuthFooter
          text="Don't have an account?"
          linkText="Sign Up"
          onPress={() => authNavigation.navigate(REGISTER)}
        />
      </InputView>
    </Layout>
  );
};

export default Login;
