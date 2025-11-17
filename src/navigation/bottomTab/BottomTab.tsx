import React from "react";
import {View} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {
  HOME,
  EXPLORE,
  FAVORITES,
  PROFILE,
} from "navigation/navigation.constants";
import {TabNavigationParams} from "navigation/navigation.types";
import Home from "screens/home/Home";
import Explore from "screens/explore/Explore";
import Favorites from "screens/favorites/Favorites";
import Profile from "screens/profile/Profile";
import HomeIcon from "components/shared/icons/bottomTabIcons/HomeIcon";
import ExploreIcon from "components/shared/icons/bottomTabIcons/HomeIcon";
import FavoritesIcon from "components/shared/icons/bottomTabIcons/HomeIcon";
import ProfileIcon from "components/shared/icons/bottomTabIcons/HomeIcon";
import {bottomTabStyles} from "./bottomTabStyles";
import BottomTabText from "./BottomTabText";

const Tab = createBottomTabNavigator<TabNavigationParams>();

const BottomTab = () => {
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: bottomTabStyles.tabStyle,
          tabBarIconStyle: bottomTabStyles.tabBarIconStyle,
        }}>
        <Tab.Screen
          name={HOME}
          component={Home}
          options={{
            tabBarLabel: ({color, focused}) => (
              <BottomTabText color={color} focused={focused} title="Home" />
            ),
            tabBarIcon: ({color, focused}) => (
              <HomeIcon color={color} focused={focused} size={24} />
            ),
          }}
        />

        <Tab.Screen
          name={EXPLORE}
          component={Explore}
          options={{
            tabBarLabel: ({color, focused}) => (
              <BottomTabText color={color} focused={focused} title="Explore" />
            ),
            tabBarIcon: ({color, focused}) => (
              <ExploreIcon color={color} focused={focused} size={24} />
            ),
          }}
        />

        <Tab.Screen
          name={FAVORITES}
          component={Favorites}
          options={{
            tabBarLabel: ({color, focused}) => (
              <BottomTabText
                color={color}
                focused={focused}
                title="Favorites"
              />
            ),
            tabBarIcon: ({color, focused}) => (
              <FavoritesIcon color={color} focused={focused} size={24} />
            ),
          }}
        />

        <Tab.Screen
          name={PROFILE}
          component={Profile}
          options={{
            tabBarLabel: ({color, focused}) => (
              <BottomTabText color={color} focused={focused} title="Profile" />
            ),
            tabBarIcon: ({color, focused}) => (
              <ProfileIcon color={color} focused={focused} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default BottomTab;
