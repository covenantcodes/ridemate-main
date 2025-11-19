import React, {useState} from "react";
import Layout from "components/shared/view/Layout";
import {globalStyles} from "styles/globalStyles";
import Button from "components/shared/button/Button";
import TouchableComponent from "components/shared/touchable/Touchable";
import InputView from "components/shared/view/InputView";
import {HOME_TAB, REGISTER} from "navigation/navigation.constants";
import {useAppNavigation} from "hooks/useAppNavigation";
import AuthHeader from "components/auth/AuthHeader";
import AuthFooter from "components/auth/AuthFooter";
import Input from "components/shared/input/Input";
import Text from "components/shared/text/Text";
import {FONT_WEIGHTS, FONTS_SIZES} from "constants/scaling";
import {useAppDispatch} from "store/hooks";
import {setAuth} from "./login.slice";

const Login = () => {
  const {authNavigation, navigation} = useAppNavigation();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    console.log("Login:", {email, password});

    setTimeout(() => {
      dispatch(
        setAuth({
          token: "dummy-access-token",
          user: {email},
        }),
      );
      setLoading(false);
    }, 2000);
  };

  return (
    <Layout>
      <InputView style={[globalStyles.flex]}>
        <AuthHeader
          title="Welcome Back"
          subtitle="Sign in to continue to RideMate"
        />
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
          loading={loading}
          disabled={loading || !email || !password}
          style={[globalStyles.mb2]}>
          Sign In
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
