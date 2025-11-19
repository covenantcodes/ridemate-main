import React, {useState} from "react";
import {View} from "react-native";
import Layout from "components/shared/view/Layout";
import {globalStyles} from "styles/globalStyles";
import Button from "components/shared/button/Button";
import TouchableComponent from "components/shared/touchable/Touchable";
import InputView from "components/shared/view/InputView";
import {LOGIN} from "navigation/navigation.constants";
import {useAppNavigation} from "hooks/useAppNavigation";
import AuthHeader from "components/auth/AuthHeader";
import AuthFooter from "components/auth/AuthFooter";
import Input from "components/shared/input/Input";
import Text from "components/shared/text/Text";
import {FONT_WEIGHTS, FONTS_SIZES} from "constants/scaling";

const Register = () => {
  const {authNavigation} = useAppNavigation();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = () => {
    setLoading(true);
    console.log("Register:", {fullName, email, phone, password, confirmPassword});
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <Layout>
      <InputView style={[globalStyles.flex]}>
        <AuthHeader
          title="Create Account"
          subtitle="Sign up to get started with RideMate"
        />

        <Input
          label="Full Name"
          iconType="Ionicons"
          iconName="person-outline"
          value={fullName}
          onChangeText={setFullName}
          placeholder="Enter your full name"
          autoCapitalize="words"
        />

        <Input
          label="Email"
          iconType="MaterialCommunityIcons"
          iconName="email-outline"
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Input
          label="Phone Number"
          iconType="Feather"
          iconName="phone"
          value={phone}
          onChangeText={setPhone}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
        />

        <Input
          label="Password"
          iconType="MaterialCommunityIcons"
          iconName="lock-outline"
          value={password}
          onChangeText={setPassword}
          placeholder="Create a password"
          secureTextEntry={!showPassword}
          rightIcon={{
            name: showPassword ? "eye-outline" : "eye-off-outline",
            onPress: () => setShowPassword(!showPassword),
          }}
        />

        <Input
          label="Confirm Password"
          iconType="MaterialCommunityIcons"
          iconName="lock-check-outline"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirm your password"
          secureTextEntry={!showConfirmPassword}
          rightIcon={{
            name: showConfirmPassword ? "eye-outline" : "eye-off-outline",
            onPress: () => setShowConfirmPassword(!showConfirmPassword),
          }}
        />

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

        <Button
          onPress={handleRegister}
          loading={loading}
          style={[globalStyles.mb2]}>
          Create Account
        </Button>

        <AuthFooter
          text="Already have an account?"
          linkText="Sign In"
          onPress={() => authNavigation.navigate(LOGIN)}
        />
      </InputView>
    </Layout>
  );
};

export default Register;
