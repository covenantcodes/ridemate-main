import React from "react";
import {View} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {
  HOME,
  WALLET,
  RIDES,
  HISTORY,
  PROFILE,
} from "navigation/navigation.constants";
import {TabNavigationParams} from "navigation/navigation.types";
import Home from "screens/home/Home";
import DriverHome from "screens/home/driver/Home";
import Wallet from "screens/wallet/Wallet";
import Rides from "screens/rides/Ride";
import History from "screens/history/History";
import Profile from "screens/profile/Profile";
import HomeIcon from "components/shared/icons/bottomTabIcons/HomeIcon";
import WalletIcon from "components/shared/icons/bottomTabIcons/WalletIcon";
import CarsIcon from "components/shared/icons/appIcons/CarsIcon";
import HistoryIcon from "components/shared/icons/bottomTabIcons/HistoryIcon";
import {bottomTabStyles} from "./bottomTabStyles";
import BottomTabText from "./BottomTabText";
import BottomTabProfileImage from "./BottomTabProfileImage";
import {useBottomNavigate} from "hooks/useBottomNavigate";
import {useAppSelector} from "store/hooks";

const Tab = createBottomTabNavigator<TabNavigationParams>();

const BottomTab = () => {
  const {user} = useAppSelector(state => state.login);
  const {
    navigateToHome,
    navigateToWallet,
    navigateToRides,
    navigateToHistory,
    navigateToProfile,
  } = useBottomNavigate();

  const isDriver = user?.userType === "driver";

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
          component={isDriver ? DriverHome : Home}
          options={{
            tabBarLabel: ({color, focused}) => (
              <BottomTabText color={color} focused={focused} title="Home" />
            ),
            tabBarIcon: ({color, focused}) => (
              <HomeIcon color={color} focused={focused} size={24} />
            ),
          }}
          listeners={{
            tabPress: e => {
              e.preventDefault();
              navigateToHome();
            },
          }}
        />

        <Tab.Screen
          name={WALLET}
          component={Wallet}
          options={{
            tabBarLabel: ({color, focused}) => (
              <BottomTabText color={color} focused={focused} title="Wallet" />
            ),
            tabBarIcon: ({color, focused}) => (
              <WalletIcon color={color} focused={focused} size={24} />
            ),
          }}
          listeners={{
            tabPress: e => {
              e.preventDefault();
              navigateToWallet();
            },
          }}
        />

        {/* Conditional Tab - Rides for Drivers, History for Riders */}
        {isDriver ? (
          <Tab.Screen
            name={RIDES}
            component={Rides}
            options={{
              tabBarLabel: ({color, focused}) => (
                <BottomTabText color={color} focused={focused} title="Rides" />
              ),
              tabBarIcon: ({color, focused}) => (
                <CarsIcon
                  color={focused ? color : color}
                  width={24}
                  height={24}
                />
              ),
            }}
            listeners={{
              tabPress: e => {
                e.preventDefault();
                navigateToRides();
              },
            }}
          />
        ) : (
          <Tab.Screen
            name={HISTORY}
            component={History}
            options={{
              tabBarLabel: ({color, focused}) => (
                <BottomTabText
                  color={color}
                  focused={focused}
                  title="History"
                />
              ),
              tabBarIcon: ({color, focused}) => (
                <HistoryIcon focused={focused} />
              ),
            }}
            listeners={{
              tabPress: e => {
                e.preventDefault();
                navigateToHistory();
              },
            }}
          />
        )}

        <Tab.Screen
          name={PROFILE}
          component={Profile}
          options={{
            tabBarLabel: ({color, focused}) => (
              <BottomTabText color={color} focused={focused} title="Profile" />
            ),
            tabBarIcon: () => <BottomTabProfileImage />,
          }}
          listeners={{
            tabPress: e => {
              e.preventDefault();
              navigateToProfile();
            },
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default BottomTab;
