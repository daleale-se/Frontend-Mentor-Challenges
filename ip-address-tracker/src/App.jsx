import Header from "./components/Header"
import Map from "./components/Map"
import "./css/styles.css"

function App() {

  return (
    <div style={{backgroundColor: "#cfcfcf", height:"100vh", width:"100vw", position: "absolute", left:"0", top:"0"}}>
      <Header />
      <Map />
    </div>
  )
}

export default App
