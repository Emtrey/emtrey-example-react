import { breakpoints, colors } from './variables';

export default `

  @import url('https://fonts.googleapis.com/css?family=Nunito:400,700');

  textarea {
    min-height: 120px;
    resize: vertical;
  }

  .row {
    display: flex;
    flex-direction: row;
    @media (max-width: ${breakpoints.md}) {
      flex-direction: column;
    }
  }

  .tr {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid ${colors.gray.light};
    @media (max-width: ${breakpoints.md}) {
      flex-direction: column;
      align-items: flex-start;
    }
    &:last-child {
      border-bottom-color: transparent;
    }
  }
  
  .td {
    flex-basis: 26%;
    display: flex;
    padding: 1rem;
    align-items: center;
    justify-content: center;
  }

  @keyframes circular-glow {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    20% {
      opacity: .26;
      transform: scale(4);
    }
    100% {
      opacity: 0;
      transform: scale(6);
    }
  }

  @keyframes load {
    0% {
      opacity: 0;
      transform: scale(.8);
    }
    50% {
      opacity: .4;
    }
    100% {
      opacity: 0;
      transform: scale(1.2);
    }
  }

`;
