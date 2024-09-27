import Search from "./components/Search"
import UbicationData from "./components/UbicationData"

function App() {

  return (
    <div style={{backgroundColor: "#cfcfcf", height:"100vh", width:"100vw", position: "absolute", left:"0", top:"0"}}>
      <h1 style={{fontFamily: "sans-serif"}}>IP Address Tracker</h1>
      <Search />
      <UbicationData />
    </div>
  )
}

export default App
