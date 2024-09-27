import styled from "styled-components"

const UbicationDataDiv = styled.div`
    background-color: white;
    width: 15rem;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 1.25rem;
`

const DataDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
`

const DataName = styled.p`
    margin: 0;
    font-family: sans-serif;

    text-transform: uppercase;
    font-size: 10px;
    color: #787878;
`

const DataValue = styled.p`
    margin: 0;
    font-family: sans-serif;

    font-weight: 700;
`

const UbicationData = () => {
  return (
    <UbicationDataDiv>
        <DataDiv>
            <DataName>ip address</DataName>
            <DataValue>192.212.174.101</DataValue>
        </DataDiv>
        <DataDiv>
            <DataName>location</DataName>
            <DataValue>Brooklyng, NY 10001</DataValue>
        </DataDiv>
        <DataDiv>
            <DataName>timezone</DataName>
            <DataValue>UTC-05:00</DataValue>
        </DataDiv>
        <DataDiv>
            <DataName>isp</DataName>
            <DataValue>SpaceX Starlink</DataValue>
        </DataDiv>
    </UbicationDataDiv>
  )
}

export default UbicationData