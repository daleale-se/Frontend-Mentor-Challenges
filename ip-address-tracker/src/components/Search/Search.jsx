import { useState } from "react"
import arrowIcon from "../../assets/images/icon-arrow.svg"
import { SearchDiv, SearchInput, SearchButton } from "./Search.styled"
import { identifyType } from "./searchValidation"

const Search = () => {
  
  const [ search, setSearch ] = useState("")
  // const [ type, setType ] = useState(null)
  const [ shaking, setShaking ] = useState(false)

  const shakeEffect = () => {
      setShaking(true)
      setTimeout(() => {
        setShaking(false)
      }, 500)
  }

  // useEffect(() => {
  //   if (shakeRef.current && type === "Invalid") {
  //     setShaking(true)
  //     setTimeout(() => {
  //       setShaking(false)
  //       shakeRef.current = false
  //     }, 500)
  //   }
  // }, [type])

  const handleSearch = (e) => {
    e.preventDefault()
    const inputType = identifyType(search)
    if (inputType === "Invalid") {
      shakeEffect(inputType)
    } else {
      // fetch
    }
  }

  return (
    <SearchDiv $shaking={shaking}>
        <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} type="search" name="search" placeholder="Search for any IP address or domain"/>
        <SearchButton onClick={handleSearch}><img src={arrowIcon} alt="Logo" /></SearchButton>
    </SearchDiv>
  )

}

export default Search