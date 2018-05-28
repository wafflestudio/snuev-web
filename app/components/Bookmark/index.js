// @flow
import * as React from 'react';
import { Map } from 'immutable';
import messages from './messages';
import {
  UnclickedButton,
  ClickedButton,
} from './index.style';

type Props = {
  lecture: Map<string, any>,
  isFetching: any,
  error: any,
  onPressWhenMarked: (id: string) => void,
  onPressWhenNotMarked: (id: string) => void,
};

type State = {
  marked: boolean,
};

export default class Bookmark extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      marked: props.lecture.get('bookmarked'),
    };
    (this: any).onPress = this.onPress.bind(this);
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.error) {
      this.setState({ marked: this.props.lecture.get('bookmarked') });
    }
  }

  onPress(event: SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (this.state.marked) {
      this.props.onPressWhenMarked(this.props.lecture.get('id'));
    } else {
      this.props.onPressWhenNotMarked(this.props.lecture.get('id'));
    }
    this.setState({ marked: !this.state.marked });
  }

  render() {
    const marked = this.state.marked;
    if (marked) {
      return (
        <ClickedButton
          onClick={this.onPress}
          disable={this.props.isFetching}
        >
          {messages.bookmark}
        </ClickedButton>
      );
    }
    return (
      <UnclickedButton
        onClick={this.onPress}
        disable={this.props.isFetching}
      >
        {messages.bookmark}
      </UnclickedButton>
    );
  }
}
