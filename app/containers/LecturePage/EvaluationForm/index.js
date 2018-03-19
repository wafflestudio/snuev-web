// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Map } from 'immutable';

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
  makeSelectPage,
  makeSelectLecture,
  makeSelectMyEvaluation,
} from '../selectors';

type Props = {
  lecture: Map<string, any>,
  myEvaluation: Map<string, any>,
  getMyEvaluation: (number) => void,
  createEvaluation: (number, State) => void,
  updateEvaluation: (number, number, State) => void,
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

  componentDidMount() {
    if (this.props.lecture.get('evaluated')) {
      this.props.getMyEvaluation(this.props.lecture.get('id'));
    }
  }

  componentWillReceiveProps(props: Props) {
    const { myEvaluation } = props;
    this.setState({
      comment: myEvaluation.get('comment'),
      score: myEvaluation.get('score'),
      easiness: myEvaluation.get('easiness'),
      grading: myEvaluation.get('grading'),
    });
  }

  handleSubmit(event: SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (this.props.myEvaluation.get('id')) {
      this.props.updateEvaluation(this.props.lecture.get('id'), this.props.myEvaluation.get('id'), this.state);
    } else {
      this.props.createEvaluation(this.props.lecture.get('id'), this.state);
    }
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
            {messages.explanation}
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
            {this.props.lecture.get('evaluated') ? messages.edit : messages.submit}
          </SubmitText>
        </SubmitButton>
      </Wrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  page: makeSelectPage(),
  lecture: makeSelectLecture(),
  myEvaluation: makeSelectMyEvaluation(),
});

const mapDispatchToProps = (dispatch: Function) => ({
  getMyEvaluation: (lectureId: number) => dispatch(Actions.getMyEvaluationRequest(lectureId)),
  createEvaluation: (lectureId: number, data: State) => dispatch(Actions.createEvaluationRequest(lectureId, data)),
  updateEvaluation: (lectureId: number, evaluationId: number, data: State) => dispatch(Actions.updateEvaluationRequest(lectureId, evaluationId, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EvaluationForm);
