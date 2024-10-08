import { createContext, useState } from 'react';

export const CountryDetailsContext = createContext()

// eslint-disable-next-line react/prop-types
export const CountryDetailsProvider = ({children}) => {

    const [ details, setDetails ] = useState()

    const getDetails = (name) => {
        
        fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then(res => res.json())
        .then(data => {  
            const country = data[0]          
            setDetails({
                flag: country.flags.svg,
                name: country.name.common,
                nativeName: Object.values(country.name.nativeName)[0].common,
                population: country.population,
                region: country.region,
                subRegion: country.subregion,
                capital: country.capital[0],
                tld: typeof country.tld === "string" ? country.tld : country.tld[0],
                currencies: Object.values(country.currencies).map(currency => currency.name),
                languages: Object.values(country.languages),
                borderCountries: country.borders,
            })
        })

    }

    return <CountryDetailsContext.Provider value={{ details, getDetails }}>
        { children }
    </CountryDetailsContext.Provider>

}