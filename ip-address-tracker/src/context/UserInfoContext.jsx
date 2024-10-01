import { createContext, useContext, useState } from 'react';

const UserInfoContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserInfoProvider = ({ children }) => {

  const [ipData, setIpData] = useState({
    "ip": "",
    "location": "",
    "timezone": "",
    "isp": ""
  });

  return (
    <UserInfoContext.Provider value={{ ipData, setIpData }}>
      {children}
    </UserInfoContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUserInfo = () => {
  return useContext(UserInfoContext);
};
