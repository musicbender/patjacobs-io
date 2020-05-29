import styled, { css, keyframes } from 'styled-components';
// import { media } from '../../../styles/breakpoints';
import RevealBlock from '../../global/reveal-block';
import { superCenter, gridPosition } from '../../../styles/utils/global';
import Heading from '../../global/heading';
import UpNext from '../../global/up-next';

// types
interface TitleProps {
    isBig?: boolean;
}

interface ScrollLineWrapperProps {
    atTop?: boolean;
}

interface UpNextProps {
    gridLines: number[];
}

// keyframes
const scrollLineLoop = keyframes`
    0%, 80% { transform: translate(-50%, 0); }
    90% { transform: translate(-50%, 2em); }
    100% { transform: translate(-50%, 0); }
`;

// styled components
export const CaseStudyPage = styled.div`
    position: relative;
    min-height: 150vh;
`;

export const InfoWrapper = styled.div`
    position: fixed;
    top: 5em;
    left: ${({ theme }) => `${theme.gridSizes.s}%`};
    width: ${({ theme }) => `${theme.gridSizes.m + theme.gridSizes.s}%`};
    z-index: 2;
`;

export const Title = styled('h1')<TitleProps>`
    ${props =>
        props.isBig &&
        css`
            font-size: 5rem;
        `};
    ${props =>
        !props.isBig &&
        css`
            font-size: 1.75rem;
        `};
    margin: 0;
    white-space: nowrap;
    color: ${({ theme }) => theme.palette.white};
    font-family: ${({ theme }) => theme.fonts.futura};
    will-change: font-size;
    transition: ${({ theme }) => `font-size ${theme.animate.slow}`};
`;

export const MetaOutterWrapper = styled.div`
    width: ${({ theme }) => `${theme.gridSizes.m}vw`};
`;

export const Main = styled.main`
    position: relative;
    padding-bottom: 10em;
    overflow: hidden;
`;

export const Top = styled.div`
    position: relative;
    padding-top: 10em;
    height: ${({ theme }) => `calc(100vh - ${theme.sizes.toolbarHeight})`};
`;

export const Middle = styled.div``;

export const ScrollLineWrapper = styled('div')<ScrollLineWrapperProps>`
    ${superCenter('50%', 'auto', '-50%', '0')}
    bottom: 2em;
    height: 20em;
    width: 5em;
    overflow: hidden;
    animation: none;
    ${props =>
        props.atTop &&
        css`
            animation: ${css`
                ${scrollLineLoop} 3000ms infinite
            `};
        `};
`;

export const ScrollLineRevealBlock = styled(RevealBlock)`
    transform: rotate(90deg);
    transform-origin: 2.5% 1.8em;
`;

export const ScrollLine = styled.div`
    height: 3px;
    background-color: ${({ theme }) => theme.palette.white};
`;

export const Section = styled.div`
    margin: 10em auto;
`;

export const StyledHeading = styled(Heading)`
    margin: 0 0 4em 0;
    font-weight: bold;
`;

export const Paragraph = styled.p`
    font-size: 1em;
    margin: 0 auto 8em !important;
`;

export const StyledUpNext = styled(UpNext)<UpNextProps>`
    ${props =>
        gridPosition({
            gridLines: props.gridLines,
            index: 2,
        })};
`;
