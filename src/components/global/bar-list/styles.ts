import styled from 'styled-components';
import RevealBlock from '../reveal-block';
import { shade } from 'polished';
import { CoreColors } from '../../../../types';

interface ListItemProps {
    color?: CoreColors;
}

interface StyledRevealBlockProps {
    index?: number;
}

export const BarListWrapper = styled.ul`
    position: relative;
    width: 100%;
    min-width: 100vw;
`;

export const StyledRevealBlock = styled(RevealBlock)<StyledRevealBlockProps>`
    top: ${props => `${props.index * 3.25}em`};
`;

export const ListItem = styled('li')<ListItemProps>`
    padding: 0.35em 1em;
    margin: 0.75em 0;
    background-color: ${props => shade(0.5, props.theme.corePalette[props.color])};
    color: ${({ theme }) => theme.palette.white};
    font-size: 0.85rem;
`;