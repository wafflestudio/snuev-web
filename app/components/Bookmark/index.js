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
  initialMark: boolean,
  onPressWhenMarked: (id: string) => void,
  onPressWhenNotMarked: (id: string) => void,
};

type State = {
  marked: boolean,
};

export class Bookmark extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      marked: this.props.initialMark,
    };
    (this: any).onPress = this.onPress.bind(this);
  }

  onPress(event: SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (this.state.marked) this.props.onPressWhenMarked(this.props.lecture.get('id'));
    else this.props.onPressWhenNotMarked(this.props.lecture.get('id'));
    this.setState({ marked: !this.state.marked });
  }

  render() {
    const marked = this.state.marked;

    if (marked) {
      return (
        <ClickedButton onClick={this.onPress}>
          {messages.bookmark}
        </ClickedButton>
      );
    }
    return (
      <UnclickedButton onClick={this.onPress}>
        {messages.bookmark}
      </UnclickedButton>
    );
  }
}

export default Bookmark;
