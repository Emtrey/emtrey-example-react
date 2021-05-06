import * as React from 'react';
import styled from '@emotion/styled';
import { breakpoints } from '../../styles/variables';

import * as sabrina from '../../img/product/sabrina.png';
import * as jake from '../../img/product/jake.png';
import * as ryan from '../../img/product/ryan.png';

const StyledHomeHeroImages = styled.div`
  width: 40%;
  position: relative;
  @media (max-width: ${breakpoints.lg}) {
    display: none;
  }
`;

const ProductImage = styled.img`
  width: 400px;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0 20px 180px -10px rgba(0, 0, 0, 0.36);
  opacity: 0;
  transform: scale(0.92) translateY(20px);
  transition: transform 0.62s cubic-bezier(0.075, 0.82, 0.165, 1),
    opacity 0.2s linear;
  &:hover {
    z-index: 6 !important;
    transform: translateY(-10px) scale(1.04);
  }
  &.is-active {
    opacity: 1;
    transform: none;
  }
  &.sabrina {
    top: 60px;
    left: 80px;
    z-index: 3;
  }
  &.jake {
    left: -160px;
    top: -6px;
    z-index: 1;
  }
  &.ryan {
    top: -60px;
    left: -10px;
    z-index: 0;
  }
`;

class HomeHeroImages extends React.PureComponent {
  imagesRef = React.createRef<HTMLDivElement>();

  componentDidMount() {
    if (this.imagesRef.current) {
      const children = Array.from(
        this.imagesRef.current.children,
      ) as HTMLImageElement[];
      children.forEach((child, index) => {
        child.style.transitionDelay = `${(index * 4) / 10}s`;
        setTimeout(() => child.classList.add('is-active'));
      });
      window.addEventListener('scroll', this.onScroll);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = (e: Event) => {
    const children = Array.from(
      this.imagesRef.current!.children,
    ) as HTMLImageElement[];
    children.forEach((child, index) => {
      child.style.transitionDelay = '';
      child.style.transform = `translateY(-${(index * window.scrollY) /
        4}px)`;
    });
  };

  render() {
    return (
      <StyledHomeHeroImages ref={this.imagesRef}>
        <ProductImage className="ryan" src={ryan} />
        <ProductImage className="jake" src={jake} />
        <ProductImage className="sabrina" src={sabrina} />
      </StyledHomeHeroImages>
    );
  }
}

export default HomeHeroImages;
