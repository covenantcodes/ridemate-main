// src/navigation/HomeTabs.tsx
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as ROUTES from "navigation/navigation.constants";
import { TabNavigationParams } from "navigation/navigation.types";
import HomeScreen from "screens/home/Home";
import MarketplaceScreen from "screens/marketplace/MarketPlace";
import ProfileScreen from "screens/profile/Profile";
import HomeIcon from "components/shared/icons/bottomTabIcons/HomeIcon";
import MarketPlaceIcon from "components/shared/icons/bottomTabIcons/MarketPlaceIcon";
import ProfileIcon from "components/shared/icons/bottomTabIcons/HomeIcon";

const Tab = createBottomTabNavigator<TabNavigationParams>();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          // Custom styles
        },
      }}
    >
      <Tab.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => <HomeIcon focused={focused} />,
        }}
      />
      <Tab.Screen
        name={ROUTES.MARKETPLACE}
        component={MarketplaceScreen}
        options={{
          tabBarIcon: ({ focused }) => <MarketPlaceIcon focused={focused} />,
        }}
      />
      <Tab.Screen
        name={ROUTES.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => <ProfileIcon focused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;
