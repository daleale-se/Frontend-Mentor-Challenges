import styled from "styled-components"

const UbicationDataDiv = styled.div`
    width: 86%;
    max-width: 66rem;
    padding: 1.5rem 0;
    background-color: white;
    border-radius: 15px;
    position: absolute;
    top: 9.25rem;

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

    @media screen and (min-width: 768px){
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1fr;
        gap: 2rem;
        padding: 2.5rem;
    }
`

const DataDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
    position: relative; /* Set this to relative to position ::before relative to this div */

    @media screen and (min-width: 768px) {
        align-items: start;
        padding-right: 2rem;


        &::before {
        content: "";
        position: absolute;
        left: -25px; /* Adjust based on spacing */
        width: 1px;
        height: 50px;
        background-color: #c9c9c9;

        /* Only show the line for the elements that are not the first one */
        display: ${(props) => (props.showDivider ? "block" : "none")};
        }
    }
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
    @media screen and (min-width: 768px){
        text-align: left;
    }

`

const UbicationData = () => {
  return (
    <UbicationDataDiv>
        <DataDiv>
            <DataName>ip address</DataName>
            <DataValue>192.212.174.101</DataValue>
        </DataDiv>
        <DataDiv showDivider>
            <DataName>location</DataName>
            <DataValue>Brooklyn, NY 10001</DataValue>
        </DataDiv>
        <DataDiv showDivider>
            <DataName>timezone</DataName>
            <DataValue>UTC-05:00</DataValue>
        </DataDiv>
        <DataDiv showDivider>
            <DataName>isp</DataName>
            <DataValue>SpaceX Starlink</DataValue>
        </DataDiv>
    </UbicationDataDiv>
  )
}

export default UbicationData