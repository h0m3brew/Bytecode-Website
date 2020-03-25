import styled from 'styled-components';
import theme from '../../styles/theme';

const { mediaQueryMin } = theme;

export const Icon = styled.img`
    margin-top: 2em;
    margin-bottom: 0;
    padding: 0 !important;
    @media (${mediaQueryMin.sm}) {
        max-height: 10rem;
        margin-top: 3em;
        margin-left: 0;
        padding: 0.1em;
    }
`;

export const ServiceWrapper = styled.div`
    min-height: 10em;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1em 0;
    @media (${mediaQueryMin.xs}) {
        flex-direction: row;
    }
    @media (${mediaQueryMin.md}) {
        padding: 0 6em 1em 0;
        flex-basis: ${props => (props.fullWidth ? '100%' : '50%')};
    }
`;

export const ServiceIcon = styled.div`
    margin: 0 3em 0 0;
    transform: translateY(0.1em);
    width: 120px;
    @media (${mediaQueryMin.sm}) {
        margin: 0 3em 0 0;
        min-height: 100%;
    }
`;

export const ServiceText = styled.div`
    flex: 1;
`;

export const ServiceBackgroundImage = styled.img`
    overflow: visible;
    margin-bottom: 20vh;
    position: relative;
    bottom: 30vh;
`;
export const ServiceBackgroundContainer = styled.section`
    width: 120vw;
    height: 15vh;
    margin-bottom: 35vh;
`;

export const StyledTitleLarge = styled.h1`
    height: 18vmin;
    width: 30vw;
    color: #ffffff;
    font-family: Lato;
    font-size: 10vmin;
    font-weight: 900;
    line-height: 9vmin;
    letter-spacing: 0.3vmin;

`;

export const StyledTitleMedium = styled.h3`
    height: 20%;
    width: ${props => (props.wide ? '90%' : '70%')};
    color: #ffffff;
    font-family: Lato;
    font-size: 7vmin;
    font-weight: bold;
    letter-spacing: 0.1vmin;
    line-height: 7vmin;
    margin-bottom: ${props => props.margin};


`;

export const StyledTitleSmall = styled.h3`
    height: 13vmin;
    width: 40vw;
    color: #ffffff;
    font-family: Lato;
    font-size: 7vmin;
    font-weight: bold;
    letter-spacing: 0.1vmin;
    line-height: 7vmin;
    text-align: center;
`;

export const StyledSubtitle = styled.p`
    height: 1.5vmin;
    width: ${props => props.width};
    color: #70c197;
    font-family: Lato;
    font-size: 2vmin;
    font-weight: bold;
    line-height: ${props => props.lineHeight};
    letter-spacing: 0.4vmin;
    opacity: ${props => props.opacity};
`;
