import { createContext, useState } from 'react';

export const CountriesContext = createContext()

// eslint-disable-next-line react/prop-types
export const CountriesProvider = ({ children }) => {

    const [ allCountries, setAllCountries ] = useState([])
    const [ filteredCountries, setFilteredCountries] = useState([])
    const [ countryFoundMessage, setCountryFound ] = useState("")
    const [ countryLimit, setCountryLimit ] = useState(12)

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

    const filterByRegion = (region) => {

        fetch(`https://restcountries.com/v3.1/region/${region}`)
        .then(res => res.json())
        .then(data => setFilteredCountries(data))
        
    }

    const getAllCountries = () => {

        const storedCountries = localStorage.getItem('countries');
        if (storedCountries) {
            const countries = JSON.parse(storedCountries)
            setAllCountries(countries.slice(0, countryLimit))
        } else {
            fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                setAllCountries(data.slice(0, countryLimit))
                localStorage.setItem('countries', JSON.stringify(data));
            });
        }

    }

    const loadMoreCountries = () => {

        const storedCountries = localStorage.getItem('countries');
        if (storedCountries) {
            const newLimit = countryLimit + 12
            setCountryLimit(newLimit)

            console.log(newLimit, countryLimit);

            const countries = JSON.parse(storedCountries);
            const limitedCountries = countries.slice(0, newLimit)
            setAllCountries(limitedCountries)
        }
    
    }

    const clearFilter = () => {
        setFilteredCountries([])
    }

    return (
        <CountriesContext.Provider value={{ allCountries, setAllCountries, filterByName, filteredCountries, getAllCountries, clearFilter, countryFoundMessage, filterByRegion, loadMoreCountries}}>
            { children }
        </CountriesContext.Provider>
    )
}