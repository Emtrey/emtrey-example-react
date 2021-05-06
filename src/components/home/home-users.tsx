import styled from '@emotion/styled';
import { opacify, lighten } from 'polished';
import Container from '../shared/container';
import { dimensions, colors, breakpoints } from '../../styles/variables';
import { flexCenter } from '../../styles/mixins';
import { RightArrowIcon } from '../shared/icons';
import fyf from '../../img/users/fyf.jpg';
import nmw from '../../img/users/nmw.jpg';

const StyledHomeUsers = styled(Container)`
  background-color: ${lighten(0.1)(colors.gray.light)};
  h2 {
    margin-bottom: ${dimensions.spacers[3]};
    color: inherit;
    @media (max-width: ${breakpoints.lg}) {
      width: 80%;
      margin: ${dimensions.spacer} auto;
    }
  }
  @media (max-width: ${breakpoints.lg}) {
    padding: 0;
    > div {
      padding-top: 0;
    }
  }
`;

const UserList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  list-style-type: none;
  justify-content: center;
  @media (max-width: ${breakpoints.lg}) {
    width: 100%;
  }
`;

const UserImage = styled.div`
  height: 100%;
  opacity: 0.2;
  position: relative;
  z-index: 0;
  transition: opacity 0.2s ease-in 0.12s;
  > img {
    height: 100%;
    transition: transform 0.4s ease-out;
    transform: none;
    @media (max-width: ${breakpoints.lg}) {
      max-width: none;
      height: inherit;
      transition: none;
    }
  }
`;

const UserButton = styled.a`
  background-color: ${colors.success};
  width: 60px;
  height: 60px;
  padding: 20px;
  position: absolute;
  top: 50%;
  right: -20px;
  z-index: 2;
  margin: -40px;
  border-radius: 100px;
  transition: all 0.2s ease-out 0.2s;
  svg {
    fill: #fff;
    position: relative;
    top: -1px;
    pointer-events: none;
  }
`;

const User = styled.li`
  background-color: #fff;
  height: 300px;
  display: flex;
  margin: 0 ${dimensions.spacer};
  overflow: hidden;
  cursor: default;
  @media (max-width: ${breakpoints.lg}) {
    margin-left: 0;
    margin-right: 0;
  }
  &:not(:last-child) {
    margin-bottom: ${dimensions.spacer};
  }
  &:hover {
    ${UserImage} {
      opacity: 0.52;
      > img {
        transform: scale(1.02);
      }
    }
    ${UserButton} {
      box-shadow: 0 0 40px ${opacify(-0.4)(colors.success)};
      &:hover {
        background-color: ${colors.brand1};
        cursor: pointer;
        transition-delay: 0s;
        box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.08);
      }
    }
  }
`;

const UserBrand = styled.div`
  flex: 1;
  padding: ${dimensions.spacerLarge};
  position: relative;
  @media (max-width: ${breakpoints.lg}) {
    ${flexCenter};
    min-width: 60%;
    padding: ${dimensions.spacerHalf};
    flex-direction: column;
    align-items: flex-start;
  }
  > h6 {
    font-size: ${dimensions.headingSizes.h3}rem;
    margin: 0 0 -6px 0;
    position: relative;
    @media (max-width: ${breakpoints.lg}) {
      font-size: 1.4rem;
      text-align: left;
    }
    &:after {
      content: '';
      background-color: ${colors.brand1};
      width: 40%;
      height: 2px;
      position: absolute;
      left: 0;
      bottom: calc(-${dimensions.spacer} - 8px);
      @media (max-width: ${breakpoints.lg}) {
        display: none;
      }
    }
  }
  > small {
    color: ${colors.gray.lightCopy};
    font-size: ${dimensions.fontSize.small}px;
    text-transform: uppercase;
    letter-spacing: 1px;
    @media (max-width: ${breakpoints.lg}) {
      display: none;
    }
  }
  > p {
    width: 88%;
    margin: ${dimensions.spacer} 0 0;
    font-size: ${dimensions.fontSize.medium + 1}px;
    color: ${colors.gray.copy};
    @media (max-width: ${breakpoints.lg}) {
      font-size: ${dimensions.fontSize.medium}px;
      width: 100%;
      text-align: left;
    }
  }
`;

const HomeUsers: React.FunctionComponent = () => (
  <StyledHomeUsers className="center">
    <Container className="center medium">
      <h2>Who's using StoreKick</h2>
      <UserList>
        <User>
          <UserBrand>
            <UserButton
              href="https://feedyoufit.com"
              title="Visit website"
              target="_blank"
            >
              <RightArrowIcon />
            </UserButton>
            <h6>Feed You Fit</h6>
            <small>Food Delivery Service</small>
            <p>
              Feed You Fit uses StoreKick to engage their online users to
              order more details here I know I suck at copywriting.
            </p>
          </UserBrand>
          <UserImage>
            <img src={fyf} />
          </UserImage>
        </User>
        <User>
          <UserBrand>
            <UserButton
              href="https://nomatterwhatapparel.com"
              title="Visit website"
              target="_blank"
            >
              <RightArrowIcon />
            </UserButton>
            <h6>No Matter What Apparel</h6>
            <small>Clothing Store</small>
            <p>
              No Matter What Apparel uses StoreKick to do some awesome stuff,
              placeholder copy here.
            </p>
          </UserBrand>
          <UserImage>
            <img src={nmw} />
          </UserImage>
        </User>
      </UserList>
    </Container>
  </StyledHomeUsers>
);

export default HomeUsers;
