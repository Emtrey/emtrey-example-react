import styled from '@emotion/styled';
import Container from '../shared/container';
import { dimensions, colors, breakpoints } from '../../styles/variables';
import { Edges, Faq } from '../../models';
import { flexCenter } from '../../styles/mixins';

const StyledFaqs = styled(Container)`
  ${flexCenter};
  display: flex;
  flex-direction: column;
  @media (max-width: ${breakpoints.lg}) {
    text-align: center;
  }
  h2 {
    margin-bottom: ${dimensions.spacers[3]};
  }
  .QuestionAnswer {
    width: 33%;
    margin-bottom: ${dimensions.spacers[2]};
    @media (max-width: ${breakpoints.lg}) {
      width: 100%;
    }
  }
  .Question {
    cursor: default;
    span {
      margin-bottom: 0.2rem;
      display: inline-block;
      position: relative;
    }
  }
  .Answer {
    font-size: ${dimensions.fontSize.medium}px;
    line-height: 2;
    color: ${colors.gray.copy};
    margin-bottom: ${dimensions.spacerHalf};
  }
`;

const Faqs: React.FunctionComponent<{ faqs: Edges<Faq> }> = ({ faqs }) => (
  <StyledFaqs>
    <h2>Frequently Asked Questions</h2>
    {faqs.edges.map((faq, index) => (
      <div className="QuestionAnswer" key={index}>
        <div className="Question">
          <span>{faq.node.question}</span>
        </div>
        <div className="Answer">{faq.node.answer}</div>
      </div>
    ))}
  </StyledFaqs>
);

export default Faqs;
