
const regions = ["africa", "america", "asia", "europa", "oceania"]

const Filter = () => {
  return (
    <select>
        {regions.map(region => {
            return <option key={region}>{region}</option>
        })}
    </select>
  )
}

export default Filter