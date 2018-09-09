// @flow

import * as React from 'react';
import messages from './messages';
import {
  Background,
  CurrentPasswordWrapper,
  NewPasswordWrapper,
  TitleWrapper,
  Input,
  ConfirmButtonWrapper,
  ConfirmButton,
  ErrorMessage,
} from './index.style';

type Props = {
  editPassword: (password: string) => void,
};

type State = {
  currentPassword: string,
  newPassword: string,
  confirmationPassword: string,
  passwordCountError: boolean,
  passwordConfirmError: boolean,
};

export class EditPasswordContainer extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentPassword: '',
      newPassword: '',
      confirmationPassword: '',
      passwordCountError: false,
      passwordConfirmError: false,
    };
    (this: any).handleEditPassword = this.handleEditPassword.bind(this);
    (this: any).handleOnChangeNewPassword = this.handleOnChangeNewPassword.bind(this);
    (this: any).handleOnChangeConfirmationPassword = this.handleOnChangeConfirmationPassword.bind(this);
  }

  handleEditPassword(event: Event) {
    event.preventDefault();
    if (this.state.newPassword.length < 8) {
      this.setState({ passwordCountError: true });
    } else {
      this.setState({ passwordCountError: false });
    }
    if (this.state.newPassword !== this.state.confirmationPassword) {
      this.setState({ passwordConfirmError: true });
    } else {
      this.setState({ passwordConfirmError: false });
    }
    if (!this.state.passwordCountError && !this.state.passwordConfirmError) {
      this.props.editPassword(this.state.newPassword);
    }
  }

  handleOnChangeNewPassword(event: Event) {
    event.preventDefault();
    this.setState({
      newPassword: event.target.value,
      passwordCountError: false,
    });
  }

  handleOnChangeConfirmationPassword(event: Event) {
    event.preventDefault();
    this.setState({
      confirmationPassword: event.target.value,
      passwordConfirmError: false,
    });
  }

  render() {
    return (
      <Background onSubmit={this.handleEditPassword}>
        <CurrentPasswordWrapper>
          <TitleWrapper>
            {messages.password.current}
          </TitleWrapper>
          <Input
            type="password"
            value={this.state.currentPassword}
            onChange={({ target }) => this.setState({ currentPassword: target.value })} // eslint-disable-line
          />
        </CurrentPasswordWrapper>
        <NewPasswordWrapper>
          <TitleWrapper>
            {messages.password.new}
          </TitleWrapper>
          <Input
            type="password"
            value={this.state.newPassword}
            onChange={this.handleOnChangeNewPassword}
          />
        </NewPasswordWrapper>
        <ErrorMessage error={this.state.passwordCountError}>
          {messages.error.count}
        </ErrorMessage>
        <NewPasswordWrapper>
          <TitleWrapper>
            {messages.password.confirmation}
          </TitleWrapper>
          <Input
            type="password"
            value={this.state.confirmationPassword}
            onChange={this.handleOnChangeConfirmationPassword}
          />
        </NewPasswordWrapper>
        <ErrorMessage error={this.state.passwordConfirmError}>
          {messages.error.confirmation}
        </ErrorMessage>
        <ConfirmButtonWrapper>
          <ConfirmButton type="submit">
            {messages.button.confirmation}
          </ConfirmButton>
        </ConfirmButtonWrapper>
      </Background>
    );
  }
}

export default EditPasswordContainer;
