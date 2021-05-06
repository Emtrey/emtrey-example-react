import * as React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { dimensions, colors, breakpoints } from '../../styles/variables';
import { Edges, NavLink } from '../../models';

const BaseHeaderLink = `
  color: ${colors.gray.copy};
  margin-left: ${dimensions.spacerHalf};
  margin-right: ${dimensions.spacerHalf};
  position: relative;
  padding-top: 4px;
  padding-bottom: 4px;
  display: inline-block;
  transition: transform .12s ease-in;
  &:hover {
    /*
    background: linear-gradient(to right, ${colors.brand2}, ${colors.brand1});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    */
    color: #000;
    text-decoration: none;
  }
  &:active {
    transform: translateY(2px);
  }
  &:focus {
    text-decoration: none;
  }
  @media (max-width: ${breakpoints.lg}) {
    font-size: ${dimensions.fontSize.large + 1}px;
    padding: ${dimensions.spacers[0]};
    color: #fff;
  }
`;

const HeaderNavLink = styled(Link)`
  ${BaseHeaderLink};
  &.is-active {
    opacity: 0.8;
    color: ${colors.brand};
    pointer-events: none;
  }
`;

const HeaderExternalLink = styled.a`
  ${BaseHeaderLink};
`;

const Nav = styled.nav`
  margin-left: ${dimensions.spacers[0]};
  position: relative;
  @media (max-width: ${breakpoints.lg}) {
    background-color: rgba(0, 0, 0, 0.94);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    visibility: hidden;
    opacity: 0;
    &.is-active {
      visibility: visible;
      opacity: 1;
      a {
        opacity: 1;
        transform: none;
        transition: all 0.2s ease-out;
        &.is-active {
          color: ${colors.brand1};
        }
      }
    }
    a {
      opacity: 0;
      transform: translateX(-10px);
      color: #fff;
    }
  }
`;

const LinkHighlighter = styled.div`
  background-color: ${colors.brand};
  height: 2px;
  position: absolute;
  left: 0;
  bottom: -1px;
  opacity: 0;
  transition: all .2s ease-in-out;
`;

class HeaderNav extends React.PureComponent<{
  className?: string;
  active: boolean;
  onClick: () => void;
  links: Edges<NavLink>;
}> {
  onNavLeave(event: React.SyntheticEvent) {
    const highlighterEl = this.getHighlighterElement(event);
    if (highlighterEl === null) {
      return;
    }
    highlighterEl.style.width = '0';
    highlighterEl.style.opacity = '0';
  }

  onLinkEnter(event: React.SyntheticEvent) {
    const targetEl = event.target as HTMLElement;
    const highlighterEl = this.getHighlighterElement(event);
    if (highlighterEl === null) {
      return;
    }
    highlighterEl.style.opacity = '1';
    highlighterEl.style.width = `${targetEl.offsetWidth}px`;
    highlighterEl.style.transform = `translateX(${targetEl.offsetLeft}px)`;
  }

  getHighlighterElement(event: React.SyntheticEvent): HTMLElement | null {
    const targetEl = event.target as HTMLElement;
    const parent = targetEl.offsetParent;
    const highlighterEl =
      parent && (parent.querySelector('.LinkHighlighter') as HTMLElement);
    return highlighterEl;
  }

  render() {
    return (
      <Nav
        onClick={this.props.onClick}
        onMouseLeave={e => this.onNavLeave(e)}
        className={this.props.active ? 'is-active' : undefined}
      >
        {this.props.links.edges.map((link, i) =>
          link.node.href.indexOf('://') === -1 ? (
            <HeaderNavLink
              to={link.node.href}
              key={i}
              activeClassName="is-active"
              onMouseEnter={e => this.onLinkEnter(e)}
              style={{ transitionDelay: `.${i}s` }}
            >
              {link.node.title}
            </HeaderNavLink>
          ) : (
            <HeaderExternalLink
              href={link.node.href}
              key={i}
              onMouseEnter={e => this.onLinkEnter(e)}
              style={{ transitionDelay: `.${i}s` }}
            >
              {link.node.title}
            </HeaderExternalLink>
          ),
        )}
        <LinkHighlighter className="LinkHighlighter" />
      </Nav>
    );
  }
}

export default HeaderNav;
