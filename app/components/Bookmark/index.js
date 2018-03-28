// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Map } from 'immutable';
import messages from './messages';
import { Creators as Actions } from '../../global/reducer';
import {
  UnclickedButton,
  ClickedButton,
} from './index.style';
import { makeSelectLecture } from '../../containers/LecturePage/selectors';

type Props = {
  lecture: Map<string, any>,
  bookmark: (lectureId: string) => void,
  deleteBookmark: (lectureId: string) => void,
};

type State = {
  dirtyFlag: boolean,
};

export class Bookmark extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      dirtyFlag: false,
    };
    (this: any).handleBookmark = this.handleBookmark.bind(this);
    (this: any).handleDeleteBookmark = this.handleDeleteBookmark.bind(this);
  }

  componentWillReceiveProps() {
    this.setState({ dirtyFlag: this.props.lecture.get('bookmarked') });
  }

  handleBookmark(event: SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault();
    this.props.bookmark(this.props.lecture.get('id'));
    this.setState({ dirtyFlag: true });
  }

  handleDeleteBookmark(event: SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault();
    this.props.deleteBookmark(this.props.lecture.get('id'));
    this.setState({ dirtyFlag: false });
  }

  render() {
    const dirtyFlag = this.state.dirtyFlag;

    if (dirtyFlag) {
      return (
        <ClickedButton onClick={this.handleDeleteBookmark}>
          {messages.bookmark}
        </ClickedButton>
      );
    }
    return (
      <UnclickedButton onClick={this.handleBookmark}>
        {messages.bookmark}
      </UnclickedButton>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  lecture: makeSelectLecture(),
});

const mapDispatchToProps = (dispatch: Function) => ({
  bookmark: (lectureId: string) => dispatch(Actions.bookmarkRequest(lectureId)),
  deleteBookmark: (lectureId: string) => dispatch(Actions.deleteBookmarkRequest(lectureId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bookmark);
