import * as React from 'react';
import styled from '@emotion/styled';
import { opacify } from 'polished';

import { dimensions, colors, breakpoints } from '../../styles/variables';
import Container from './container';
import HeaderNav from './header-nav';
import Logo from './logo';
import CtaButton from './cta-button';
import MobileNavToggle from './mobile-nav-toggle';
import { Edges, NavLink } from '../../models';

const StyledHeader = styled.header`
  background-color: rgba(240, 240, 240, 0.92);
  width: 100%;
  height: ${dimensions.headerHeight}px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  padding: 0 ${dimensions.spacer};
  transition: background-color 0.12s ease-in;
  @media (max-width: ${breakpoints.lg}) {
    height: ${dimensions.headerHeightSmall}px;
    padding: 0;
  }
  &.Header--transparent {
    background-color: transparent;
    &.is-active {
      background-color: rgba(240, 240, 240, 0.92);
      .LinkHighlighter {
        background-color: ${colors.brand};
      }
      .HeaderCta {
        border-color: ${colors.brand1};
        color: ${colors.brand1};
        &:hover {
          border-color: ${colors.brand1};
        }
      }
      svg {
        fill: ${colors.gray.dark};
      }
      .is-active svg {
        fill: #fff;
      }
      a {
        color: ${colors.gray.copy};
        @media (max-width: ${breakpoints.lg}) {
          color: #fff;
        }
      }
    }
    + main {
      margin-top: 0;
      section:nth-of-type(1) > div {
        padding-top: 10rem;
        @media (max-width: ${breakpoints.lg}) {
          padding-top: 6rem;
        }
      }
    }
    a {
      color: #fff;
    }
    svg {
      fill: #fff;
    }
    .HeaderCta {
      border-color: rgba(255, 255, 255, 0.2);
      &:hover {
        border-color: rgba(255, 255, 255, 0.8);
      }
    }
    .LinkHighlighter {
      background-color: ${opacify(-0.6)(colors.brand2)};
    }
  }
`;

const HeaderContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  padding: 0;
  position: relative;
  @media (max-width: ${breakpoints.lg}) {
    padding-left: 0.8rem;
    padding-right: 0.8rem;
  }
  .LogoMark {
    min-width: 34px;
  }
  .Logo img {
    display: block;
    transition: transform 0.4s cubic-bezier(0, 0.2, 0, 1);
  }
  .Logo:hover {
    img {
      transform: scale(0.8);
    }
    + .Logo-highlight {
      animation: circular-glow 0.8s ease-in 1;
    }
  }
  .Logo-highlight {
    background-color: ${colors.brand2};
    width: 100px;
    height: 100px;
    border-radius: 100px;
    position: absolute;
    top: -25px;
    left: -25px;
    z-index: -1;
    opacity: 0;
  }
`;

const HeaderCta = styled(CtaButton)`
  margin-left: auto;
  padding-left: 3rem;
  padding-right: 3rem;
  position: relative;
  border-color: ${colors.brand1};
  color: ${colors.brand1};
  @media (max-width: ${breakpoints.lg}) {
    display: none;
  }
`;

class Header extends React.PureComponent<{
  transparent: boolean;
  links: Edges<NavLink>;
}> {
  state = {
    active: false,
    mobileActive: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    this.unblockScroll();
  }

  handleScroll = () => {
    this.setState(() => ({ active: scrollY >= 60 }));
  };

  onMobileNavClick = () => {
    this.setState((prev: any) => ({ mobileActive: !prev.mobileActive }));
    this.state.mobileActive ? this.unblockScroll() : this.blockScroll();
  };

  touchStartNoop = (e: Event) => e.preventDefault();

  blockScroll() {
    document.body.addEventListener('touchmove', this.touchStartNoop, {
      passive: false,
    });
  }

  unblockScroll() {
    document.body.removeEventListener('touchmove', this.touchStartNoop);
  }

  onNavClick = () => {
    this.setState(() => ({ mobileActive: false }));
    this.unblockScroll();
  };

  render() {
    let headerCls: string[] = [];
    if (this.props.transparent) {
      headerCls = [...headerCls, 'Header--transparent'];
    } else {
      headerCls = [...headerCls, 'Header--notTransparent'];
    }
    if (this.state.active) {
      headerCls = [...headerCls, 'is-active'];
    }
    return (
      <StyledHeader className={headerCls.join(' ')}>
        <HeaderContainer>
          <Logo className="Logo" showText={false} />
          <div className="Logo-highlight" />
          <HeaderNav
            className="HeaderNav"
            active={this.state.mobileActive}
            onClick={this.onNavClick}
            links={this.props.links}
          />
          <HeaderCta
            className="HeaderCta"
            link="/signup"
            label="Start Trial"
          />
          <MobileNavToggle
            active={this.state.mobileActive}
            onClick={this.onMobileNavClick}
          />
        </HeaderContainer>
      </StyledHeader>
    );
  }
}

export default Header;
