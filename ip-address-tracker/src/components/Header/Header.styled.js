import styled from "styled-components"
import mobileBg from "../../assets/images/pattern-bg-mobile.png"
import desktopBg from "../../assets/images/pattern-bg-desktop.png"
import { mainFontFamily, headerHeightFirst, headerHeightSecond } from "../../variables.styled.js"

const HeaderContainer = styled.header`
    background: url(${mobileBg});
    background-size: cover;
    background-repeat: no-repeat;
    height: ${headerHeightFirst};
    width: 100%;
    padding-top: 1.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    @media screen and (min-width: 768px) {
      background: url(${desktopBg});
      height: ${headerHeightSecond};
    }
`

const AppTitle = styled.h1`
    color: #fff;
    font-family: ${mainFontFamily};
    font-size: 1.5rem;
    font-weight: 500;
`

export { HeaderContainer, AppTitle }