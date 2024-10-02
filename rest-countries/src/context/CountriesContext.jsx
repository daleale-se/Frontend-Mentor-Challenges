import { createContext, useState } from 'react';

export const CountriesContext = createContext()

// eslint-disable-next-line react/prop-types
export const CountriesProvider = ({ children }) => {

    const [ allCountries, setAllCountries ] = useState([])
    const [ filteredCountries, setFilteredCountries] = useState([])
    const [ countryFoundMessage, setCountryFound ] = useState("")


    const filterByName = (name) => {
        
        fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Country not found: ${name}`);
            }
            return res.json(); 
            })
        .then(data => {
            if (data && data.length > 0){
                setFilteredCountries(data)
            } else {
                throw new Error(`Country not found: ${name}`);
            }})
        .catch((err) => {
            setCountryFound(err.message)
            setTimeout(() => {
                setCountryFound("")
            }, 2000)
        })

    }

    const getAllCountries = () => {

        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setAllCountries(data))
    
    }

    const clearFilter = () => {
        setFilteredCountries([])
    }

    return (
        <CountriesContext.Provider value={{ allCountries, setAllCountries, filterByName, filteredCountries, getAllCountries, clearFilter, countryFoundMessage}}>
            { children }
        </CountriesContext.Provider>
    )
}