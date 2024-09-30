import styled from "styled-components"
import Header from "./components/Header/Header"
import Map from "./components/Map/Map"
import "./css/styles.css"

const AppContainer = styled.div`
  background-color: #cfcfcf;
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
`

function App() {

  return (
    <AppContainer>
      <Header />
      <Map />
    </AppContainer>
  )
}

export default App
