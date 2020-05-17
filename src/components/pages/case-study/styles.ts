import styled, { css } from 'styled-components';
import { media } from '../../../styles/breakpoints';
import RevealBlock from '../../global/reveal-block';
import { superCenter } from '../../../styles/utils/global';

interface TitleProps {
    isBig?: boolean;
}

interface ScrollLineWrapperProps {
    atTop?: boolean;
}

export const CaseStudyPage = styled.div`
    position: relative;
`;

export const InfoWrapper = styled.div`
    position: fixed;
    top: 5em;
    left: ${({ theme }) => `${theme.gridSizes.s}%`};
    width: ${({ theme }) => `${theme.gridSizes.m + theme.gridSizes.s}%`};
`;

export const Title = styled('h1')<TitleProps>`
    ${props =>
        props.isBig &&
        css`
            font-size: 6rem;
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
`;

export const Top = styled.div`
    position: relative;
    height: ${({ theme }) => `calc(100vh - ${theme.sizes.toolbarHeight})`};
`;

export const ScrollLineWrapper = styled('div')<ScrollLineWrapperProps>`
    ${superCenter('50%', 'auto', '-50%', '0')}
    bottom: 0;
    height: 20em;
    width: 5em;
    overflow: hidden;
`;

export const StyledRevealBlock = styled(RevealBlock)`
    transform: rotate(90deg);
    transform-origin: 7.7% 0%;
`;

export const ScrollLine = styled.div`
    height: 3px;
    background-color: ${({ theme }) => theme.palette.white};
`;
