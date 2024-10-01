import { useEffect, useState } from "react"
import arrowIcon from "../../assets/images/icon-arrow.svg"
import { SearchDiv, SearchInput, SearchButton } from "./Search.styled"
import { firstRequest, getData, identifyType } from "./searchLogic"
import { useLocation } from "../../context/LocationContext"
import { useUserInfo } from "../../context/UserInfoContext"

const Search = () => {

  const { setCoordinates } = useLocation()
  const { setIpData } = useUserInfo()
  
  const [ search, setSearch ] = useState("")
  const [ shaking, setShaking ] = useState(false)

  const updateLocationAndUserInfo = (ip, location, isp) => {
    const newCoordinates = [location.lat, location.lng]
    const newIpData = {
      ip,
      location: `${location.region}, ${location.city}`,
      timezone: `UTC${location.timezone}`,
      isp: isp || "Unknow Provider"
    }
    setCoordinates(newCoordinates);
    setIpData(newIpData);
  }

  const shakeEffect = () => {
      setShaking(true)
      setTimeout(() => {
        setShaking(false)
      }, 500)
    }

  const handleSearch = async (e) => {
    e.preventDefault()
    const inputType = identifyType(search)
    if (inputType === "Invalid") {
      shakeEffect(inputType)
    } else {
      const { ip, location, isp } = await getData(inputType, search)
      updateLocationAndUserInfo(ip, location, isp)
    }
  }

  useEffect(() => {
    (async function () {
      const { ip, location, isp } = await firstRequest()
      updateLocationAndUserInfo(ip, location, isp)
    })()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <SearchDiv $shaking={shaking}>
        <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} type="search" name="search" placeholder="Search for any IP address or domain"/>
        <SearchButton onClick={handleSearch}><img src={arrowIcon} alt="Logo" /></SearchButton>
    </SearchDiv>
  )

}

export default Search