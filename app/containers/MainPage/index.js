// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectLatestEvaluations,
  makeSelectMostEvaluatedLectures,
  makeSelectTopRatedLectures,
  makeSelectMostLikedEvaluations,
  makeSelectLatestEvaluationsIsFetching,
} from './selectors';
import { Creators as Actions } from './reducer';
import withBars from '../../services/withBars';
import Evaluation from './Evaluation';
import {
  MainSearchBg,
  MainSearchBgAbsoluteWrapper,
  MainSearchBgRelativeWrapper,
  MainPageContent,
  SearchInput,
  RecentEvaluations,
  RecentEvaluationsTitle,
  RecentEvaluationsContent,
  FlexContainer,
  FlexItem,
  SecondBackground,
  RelativeSecondBackgroundWrapper,
} from './index.style';


type Props = {
  latestEvaluations: [Map<string, any>],
  mostEvaluatedLectures: [Map<string, any>],
  topRatedLectures: [Map<string, any>],
  mostLikedEvaluations: [Map<string, any>],
  latestEvaluationsIsFetching: boolean,
  getLatestEvaluations: () => void,
  getMostEvaluatedLectures: () => void,
  getTopRatedLectures: () => void,
  getMostLikedEvaluations: () => void,
};

export class MainPage extends React.PureComponent<Props> { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getLatestEvaluations();
    this.props.getMostEvaluatedLectures();
    this.props.getTopRatedLectures();
    this.props.getMostLikedEvaluations();
  }

  render() {
    return (
      <div>
        <Helmet
          title="MainPage"
          meta={[
            { name: 'description', content: 'Description of MainPage' },
          ]}
        />
        <MainSearchBgAbsoluteWrapper>
          <MainSearchBgRelativeWrapper>
            <MainSearchBg />
            <SearchInput placeholder="강의명, 교수명, 학과명으로 검색해보세요" />
          </MainSearchBgRelativeWrapper>
        </MainSearchBgAbsoluteWrapper>
        <MainPageContent>
          <RecentEvaluations>
            <RecentEvaluationsTitle>최근 강의평</RecentEvaluationsTitle>
            <RecentEvaluationsContent>
              <FlexContainer>
                {
                  this.props.latestEvaluationsIsFetching || !this.props.latestEvaluations ? null : this.props.latestEvaluations.slice(0, 3).map((evaluation: Map<string, any>) => <FlexItem>
                    <Evaluation evaluation={evaluation} />
                  </FlexItem>)
                }
              </FlexContainer>
            </RecentEvaluationsContent>
          </RecentEvaluations>
        </MainPageContent>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  latestEvaluations: makeSelectLatestEvaluations(),
  mostEvaluatedLectures: makeSelectMostEvaluatedLectures(),
  topRatedLectures: makeSelectTopRatedLectures(),
  mostLikedEvaluations: makeSelectMostLikedEvaluations(),
  latestEvaluationsIsFetching: makeSelectLatestEvaluationsIsFetching(),
});

const mapDispatchToProps = (dispatch: Function) => ({
  getLatestEvaluations: () => dispatch(Actions.getLatestEvaluationsRequest()),
  getMostEvaluatedLectures: () => dispatch(Actions.getMostEvaluatedLecturesRequest()),
  getTopRatedLectures: () => dispatch(Actions.getTopRatedLecturesRequest()),
  getMostLikedEvaluations: () => dispatch(Actions.getMostLikedEvaluationsRequest()),
});

export default withBars(connect(mapStateToProps, mapDispatchToProps)(MainPage));
