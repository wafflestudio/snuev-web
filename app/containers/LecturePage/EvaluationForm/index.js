// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Map } from 'immutable';

import { Creators as Actions } from '../reducer';
import CustomSlider from '../../../components/CustomSlider';

import {
  Wrapper,
  Header,
  LectureName,
  RatingWrapper,
  CommentInput,
  SubHeader,
  RatingMargin,
  CreateIcon,
  Buttons,
  FlatButton,
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
  closeEvaluationForm: () => void,
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
      score: 5,
      easiness: 5,
      grading: 5,
    };
    (this: any).handleSubmit = this.handleSubmit.bind(this);
    (this: any).makeHandleRate = this.makeHandleRate.bind(this);
    (this: any).makeHandleChange = this.makeHandleChange.bind(this);
  }

  componentDidMount() {
    if (this.props.lecture.get('evaluated')) {
      this.props.getMyEvaluation(this.props.lecture.get('id'));
    }
  }

  componentWillReceiveProps(props: Props) {
    const { myEvaluation } = props;
    if (myEvaluation) {
      this.setState({
        comment: myEvaluation.get('comment'),
        score: myEvaluation.get('score'),
        easiness: myEvaluation.get('easiness'),
        grading: myEvaluation.get('grading'),
      });
    }
  }

  handleSubmit(event: SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (this.props.myEvaluation) {
      this.props.updateEvaluation(this.props.lecture.get('id'), this.props.myEvaluation.get('id'), this.state);
    } else {
      this.props.createEvaluation(this.props.lecture.get('id'), this.state);
    }
  }

  makeHandleRate(criteria: string) {
    return (value: number) => {
      if (value >= 1) {
        this.setState({ [criteria]: value });
      }
    };
  }

  makeHandleChange(key: string) {
    return (event: { target: { value: number } }) => {
      this.setState({
        [key]: event.target.value,
      });
    };
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
        <CreateIcon alt="create_icon" />
        <SubHeader>강의평 작성</SubHeader>
        <Header>
          <LectureName>
            {lecture.get('name')}
          </LectureName>
        </Header>
        <RatingWrapper>
          <RatingMargin>
            <CustomSlider
              name="총점"
              value={this.state.score}
              onChange={this.makeHandleRate('score')}
            />
          </RatingMargin>
          <RatingMargin>
            <CustomSlider
              name="난이도 쉬움"
              value={this.state.easiness}
              onChange={this.makeHandleRate('easiness')}
            />
          </RatingMargin>
          <RatingMargin>
            <CustomSlider
              name="학점 잘 줌"
              value={this.state.grading}
              onChange={this.makeHandleRate('grading')}
            />
          </RatingMargin>
        </RatingWrapper>
        <CommentInput
          placeholder="강의평을 입력해주세요..."
          value={this.state.comment}
          onChange={this.makeHandleChange('comment')}
        />
        <Buttons>
          <div>
            <FlatButton cancel onClick={this.props.closeEvaluationForm}>
              취소
            </FlatButton>
            <FlatButton type="submit">
              {this.props.lecture.get('evaluated') ? '수정' : '완료'}
            </FlatButton>
          </div>
        </Buttons>
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
  closeEvaluationForm: () => dispatch(Actions.closeEvaluationForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EvaluationForm);
