
// eslint-disable-next-line react/prop-types
const Card = ({data}) => {

    // eslint-disable-next-line react/prop-types
    const {flag, name, population, region, capital} = data

  return (
    <div>
        <img src={flag} width="60px" alt="flag" />
        <h2>{name}</h2>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
    </div>
  )
}

export default Card