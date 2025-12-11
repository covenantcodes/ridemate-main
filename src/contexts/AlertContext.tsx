import React, {createContext, useState, useContext, ReactNode} from "react";
import {AlertOptions, AlertContextType} from "types/alertTypes";
import CustomAlertComponent from "components/shared/alert/CustomAlert";

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const AlertProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [alertOptions, setAlertOptions] = useState<AlertOptions | null>(null);

  const showAlert = (options: AlertOptions) => {
    setAlertOptions(options);
  };

  const hideAlert = () => {
    setAlertOptions(null);
  };

  return (
    <AlertContext.Provider value={{showAlert, hideAlert}}>
      {children}
      {alertOptions && (
        <CustomAlertComponent {...alertOptions} onClose={hideAlert} />
      )}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within AlertProvider");
  }
  return context;
};
