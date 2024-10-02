import Countries from "../components/Countries"
import Filter from "../components/Filter"
import SearchBar from "../components/SearchBar"

const Home = () => {

  return (
    <div>
      <div>
        <SearchBar/>
        <Filter/>
      </div>
      <div>
        <Countries/>
      </div>
    </div>
  )
}

export default Home