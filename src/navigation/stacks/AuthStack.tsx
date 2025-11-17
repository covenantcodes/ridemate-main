import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {
  //   ONBOARDING,
  LOGIN,
  REGISTER,
  //   FORGOT_PASSWORD,
  //   RESET_PASSWORD,
} from "navigation/navigation.constants";
import {AuthStackParams} from "navigation/navigation.types";
// import Onboarding from "screens/auth/onboarding/Onboarding";
import Login from "screens/auth/login/Login";
import Register from "screens/auth/register/Register";
// import ForgotPassword from "screens/auth/forgotPassword/ForgotPassword";
// import ResetPassword from "screens/auth/resetPassword/ResetPassword";

const Stack = createNativeStackNavigator<AuthStackParams>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={LOGIN}
      screenOptions={{
        headerShown: false,
        animationTypeForReplace: "push",
      }}>
      {/* <Stack.Screen name={ONBOARDING} component={Onboarding} /> */}
      <Stack.Screen name={LOGIN} component={Login} />
      <Stack.Screen name={REGISTER} component={Register} />
      {/* <Stack.Screen name={FORGOT_PASSWORD} component={ForgotPassword} /> */}
      {/* <Stack.Screen name={RESET_PASSWORD} component={ResetPassword} /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;
