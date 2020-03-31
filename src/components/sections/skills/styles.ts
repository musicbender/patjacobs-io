import styled, { css } from 'styled-components';
import { media } from '../../../styles/breakpoints';

export const SkillsWrapper = styled.div`

`;

.skills {
  position: relative;
  height: auto;
  width: 100%;
  padding-bottom: 238%;
  overflow: hidden;
  @media (min-width: $tablet-width) {
    height: 73em;
    margin-top: 15em;
    padding: 0;
  }
  > .dot-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    &:hover,
    &:focus {
      cursor: pointer;
    }
    > div[class*="dot-formation"] {
      position: absolute;
      transition: filter $slow linear;
      width: calc($(grid-m) + $(grid-s) + $(grid-m) + $(grid-l) + $(grid-s));
      left: 92%;
      transform: translateX(-100%);
      &[class*="desktop"] {
        display: none;
        padding-bottom: 41.5%;
        @media (min-width: $tablet-width) {
          display: block;
        }
      }
      &[class*="mobile"] {
        padding-bottom: 225%;
        @media (min-width: $tablet-width) {
          display: none;
        }
      }
    }
    > .skills-cta {
      display: none;
      position: absolute;
      top: 45%;
      left: 50%;
      text-align: center;
      transition: opacity $slow $easeInOut,
        transform $slow $easeInOut;
      &.hide {
        opacity: 0;
        transform: translate3d(-50%, calc(-50% + 2em), 0) skew(10deg, 10deg) scale(1);
      }
      &.show {
        opacity: 1;
        transform: translate3d(-50%, -50%, 0) skew(0deg, 0deg) scale(1);
      }
      > p {
        margin: 0;
        font-size: 7rem;
        font-family: $futura;
        text-transform: uppercase;
        filter: contrast(66%);
        white-space: nowrap;
        transition: color 150ms linear;
        @media (min-width: $small-desktop-width) {
          font-size: 9rem;
        }
        @media (min-width: $site-max-width) {
          font-size: 14rem;
        }
      }
    }
  }
}
