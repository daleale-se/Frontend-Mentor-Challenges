import styled from "styled-components"

const UbicationDataDiv = styled.div`
    width: 17.5rem;
    padding: 1.5rem;
    background-color: white;
    border-radius: 15px;
    position: absolute;
    top: 10rem;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    gap: 1.5rem;

    @media screen and (min-width: 568px){
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(2, 1fr);
        gap: 3rem;
        padding: 2.5rem;
    }
`

const DataDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
`

const DataName = styled.p`
    margin: 0;
    font-family: "Rubik";

    letter-spacing: .08rem;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 9px;
    color: #787878;
`

const DataValue = styled.p`
    margin: 0;
    font-family: "Rubik";

    text-align: center;
    font-weight: 500;
    font-size: 18px;
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
            <DataValue>Brooklyn, NY 10001</DataValue>
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