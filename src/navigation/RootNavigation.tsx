import React, {useEffect, useState} from "react";
import NetInfo from "@react-native-community/netinfo";
import {useAppSelector} from "store/hooks";
import AuthStack from "./stacks/AuthStack";
import MainStack from "./stacks/MainStack";
import NetworkModal from "components/shared/view/NetworkModal";
import ScreenLoader from "components/shared/loader/ScreenLoader";

const RootNavigation = () => {
  const accessToken = useAppSelector(state => state.login.accessToken);
  const {isLoading} = useAppSelector(state => state.app);
  const [networkStatus, setNetworkStatus] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(networkState => {
      setNetworkStatus(!networkState.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      {isLoading && <ScreenLoader />}
      {networkStatus && <NetworkModal />}
      {accessToken ? <MainStack /> : <AuthStack />}
    </>
  );
};

export default RootNavigation;
