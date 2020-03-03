@import '../../style/helpers/variables';
@import '../../style/helpers/mixins';

.recent-work {
  position: relative;
  width: 100%;
  height: auto;
  margin: 0;
  padding-bottom: 10em;
  overflow: hidden;
  @media (min-width: $tablet-width) {
    height: 193em;
    margin: 0;
    padding-bottom: 30em;
    overflow: visible;
  }
  > .parent-wrapper {
    display: block;
    @media (min-width: $tablet-width) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    > .work-items-wrapper {
      padding: 0;
      @media (min-width: $tablet-width) {
        padding-left: calc($grid-s * 2);
      }
    }
  }
  > .dot-grid-a {
    position: absolute;
    left: 1vw;
    top: 8em;
  }
}

//particles
@import '../../style/helpers/variables';
@import '../../style/helpers/mixins';


.particle {
  position: absolute;
  &[class*="dot-grid-"] {
    display: none;
    @media (min-width: $tablet-width) {
      display: block;
    }
  }
  &.triangle-a {
    @mixin grid-position 0, left, %, right;
    top: 6%;
  }
  &.triangle-b {
    @mixin grid-position 4, left, %, right;
    top: 62%;
    @media (min-width: $tablet-width) {
      @mixin grid-position 1, left, %, right;
      top: 37%;
    }
  }
  &.triangle-c {
    @mixin grid-position 3, left, %, right;
    display: none;
    top: 55%;
    @media (min-width: $tablet-width) {
      display: blok
    }
  }
  &.triangle-d {
    @mixin grid-position 6, left, %, right;
    top: 87%;
    @media (min-width: $tablet-width) {
      top: 64%;
    }
  }
  &.triangle-e {
    @mixin grid-position 0, left, %, right;
    display: none;
    top: 80%;
    @media (min-width: $tablet-width) {
      display: block;
    }
  }
  &.triangle-f {
    @mixin grid-position 6, left, %, right;
    top: -12%;
  }
  &.triangle-g {
    @mixin grid-position 1, left, %, right;
    display: none;
    top: 92%;
    @media (min-width: $tablet-width) {
      display: block;
    }
  }
  &.triangle-h {
    @mixin grid-position 3, left, %, right;
    display: none;
    top: 99%;
    @media (min-width: $tablet-width) {
      display: block;
    }
  }
  &.dot-grid-a {
    top: -1%;
    left: 71%;
  }
  &.dot-grid-b {
    top: 78%;
    left: 75.3%;
  }
  &.dot-grid-c {
    top: 50%;
    left: 4%;
  }
}

