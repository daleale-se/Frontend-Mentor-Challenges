import { createContext, useContext, useState } from 'react';

const LocationContext = createContext();

// eslint-disable-next-line react/prop-types
export const LocationProvider = ({ children }) => {

  const [coordinates, setCoordinates] = useState([-34.52536460681346, -58.53701212465322]);

  return (
    <LocationContext.Provider value={{ coordinates, setCoordinates }}>
      {children}
    </LocationContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLocation = () => {
  return useContext(LocationContext);
};
