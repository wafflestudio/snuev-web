// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { List, Map } from 'immutable';

import Rating from '../../../components/Rating';
import { Creators as Actions } from '../reducer';

import messages from './messages';
import {
  Wrapper,
  Header,
  LectureName,
  ExplanationText,
  SubmitButton,
  SubmitText,
  StarRatingWrapper,
  CriteriaWrapper,
  CriteriaText,
  CommentInput,
} from './index.style';
import {
  makeSelectLecture,
  makeSelectEvaluationFormIsFetching,
  makeSelectEvaluationFormError,
} from '../selectors';

type Props = {
  createEvaluation: (number, State) => void,
  lecture: Map<string, any>,
  isFetching: boolean,
  error: List<Map<string, any>>,
};

type State = {
  comment: string,
  score: number,
  easiness: number,
  grading: number,
};

class EvaluationForm extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      comment: '',
      score: 0,
      easiness: 0,
      grading: 0,
    };
    (this: any).handleSubmit = this.handleSubmit.bind(this);
    (this: any).makeHandleRate = this.makeHandleRate.bind(this);
  }

  handleSubmit(event: SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault();
    this.props.createEvaluation(this.props.lecture.get('id'), this.state);
  }

  makeHandleRate(criteria: string) {
    return (value: number) => this.setState({ [criteria]: value });
  }

  render() {
    const { lecture } = this.props;
    if (!lecture) {
      return (
        <div>
          No Lecture
        </div>
      );
    }
    return (
      <Wrapper onSubmit={this.handleSubmit}>
        <Header>
          <LectureName>
            {lecture.get('name')}</LectureName>
          <ExplanationText>
            에 대한 강의평을 작성합니다.
          </ExplanationText>
        </Header>
        <StarRatingWrapper>
          <CriteriaWrapper>
            <CriteriaText>
              {messages.criteria.score}</CriteriaText>
            <Rating initialRating={this.state.score} onChange={this.makeHandleRate('score')} />
          </CriteriaWrapper>
          <CriteriaWrapper>
            <CriteriaText>
              {messages.criteria.easiness}</CriteriaText>
            <Rating initialRating={this.state.easiness} onChange={this.makeHandleRate('easiness')} />
          </CriteriaWrapper>
          <CriteriaWrapper>
            <CriteriaText>
              {messages.criteria.grading}</CriteriaText>
            <Rating initialRating={this.state.grading} onChange={this.makeHandleRate('grading')} />
          </CriteriaWrapper>
        </StarRatingWrapper>
        <CommentInput
          value={this.state.comment}
          onChange={({ target }) => this.setState({ comment: target.value })} // eslint-disable-line
        />
        <SubmitButton type="submit">
          <SubmitText>
            등록
          </SubmitText>
        </SubmitButton>
      </Wrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  lecture: makeSelectLecture(),
  isFetching: makeSelectEvaluationFormIsFetching(),
  error: makeSelectEvaluationFormError(),
});

const mapDispatchToProps = (dispatch: Function) => ({
  createEvaluation: (lectureId: number, data: State) => dispatch(Actions.createEvaluationRequest(lectureId, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EvaluationForm);
