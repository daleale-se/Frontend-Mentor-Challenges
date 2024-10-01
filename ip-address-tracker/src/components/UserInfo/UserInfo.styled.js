import styled, {css} from "styled-components"

const UserInfoDiv = styled.div`
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
    z-index: 2;

    @media screen and (min-width: 568px){
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(2, 1fr);
        gap: 3rem;
        padding: 1.5rem;
        align-items: center;
    }

    @media screen and (min-width: 768px){
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1fr;
        gap: 2rem;
        padding: 2.5rem;
        align-items: start;
    }
`

const DataDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
    position: relative;

    @media screen and (min-width: 768px) {
        align-items: start;
        padding-right: 2rem;

        &::before {
        content: "";
        position: absolute;
        left: -25px; 
        width: 1px;
        height: 50px;
        background-color: #c9c9c9;

        ${ props => props.$hideDivider && css`
            display: none;
        `}
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

export { UserInfoDiv, DataDiv, DataName, DataValue }