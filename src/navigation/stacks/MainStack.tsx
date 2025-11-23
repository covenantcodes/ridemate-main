import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {
  HOME_TAB,
  PROFILE,
  VEHICLE_TYPE_SELECTION,
  FINDING_ROUTE,
  //   SETTINGS,
  //   NOTIFICATIONS,
} from "navigation/navigation.constants";
import BottomTab from "navigation/bottomTab/BottomTab";
import {MainStackParams} from "navigation/navigation.types";

// import BottomTab from "navigation/bottomTab/BottomTab";
import Profile from "screens/profile/Profile";
import FindingRoute from "screens/home/screens/FindingRoute";
import VehicleTypeSelection from "screens/home/screens/VehicleTypeSelection";
// import Settings from "screens/settings/Settings";
// import Notifications from "screens/notifications/Notifications";

const Stack = createNativeStackNavigator<MainStackParams>();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={HOME_TAB} component={BottomTab} />
      <Stack.Screen
        name={VEHICLE_TYPE_SELECTION}
        component={VehicleTypeSelection}
      />
      <Stack.Screen name={FINDING_ROUTE} component={FindingRoute} />
      {/* <Stack.Screen name={PROFILE} component={Profile} /> */}
      {/* <Stack.Screen name={SETTINGS} component={Settings} /> */}
      {/* <Stack.Screen name={NOTIFICATIONS} component={Notifications} /> */}
    </Stack.Navigator>
  );
};

export default MainStack;
