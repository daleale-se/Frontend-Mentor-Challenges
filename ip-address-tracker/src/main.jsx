import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App/App.jsx'
import { LocationProvider } from './context/LocationContext.jsx'
import { UserInfoProvider } from './context/UserInfoContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserInfoProvider>
      <LocationProvider>
      <App />
      </LocationProvider>
    </UserInfoProvider>
  </StrictMode>,
)
