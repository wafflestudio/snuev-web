// @flow

import * as React from 'react';
import { Map } from 'immutable';
import ReactAutoComplete from 'react-autocomplete';
import {
  Background,
  AttributeWrapper,
  TitleWrapper,
  EmailWrapper,
  NicknameWrapper,
  ResendEmailButton,
  DepartmentWrapper,
  AutoCompleteMenu,
  AutoCompleteItem,
  SearchInput,
  EmailAndResendEmailWrapper,
  ConfirmButtonWrapper,
  ConfirmButton,
} from './index.style';

type Props = {
  departments: Map<string, any>,
  user: Map<string, any>,
  resendConfirmationEmail: () => void,
  updateProfile: ({ nickname: string, department_id: number }) => void,
};

type State = {
  nickname: string,
  department_id: number,
  query: string,
};

export class MyInfoContainer extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      nickname: props.user.get('nickname'),
      department_id: props.user.getIn(['department', 'id']),
      query: props.user.getIn(['department', 'name']),
    };
    this.handleUpdateProfile = this.handleUpdateProfile.bind(this);
  }

  handleUpdateProfile(event: Event) {
    event.preventDefault();
    this.props.updateProfile(this.state);
  }

  render() {
    return (
      <Background onSubmit={this.handleUpdateProfile}>
        <AttributeWrapper>
          <TitleWrapper>이메일</TitleWrapper>
          <EmailAndResendEmailWrapper>
            <EmailWrapper>{this.props.user.get('email')}</EmailWrapper>
            <ResendEmailButton onClick={this.props.resendConfirmationEmail}>
              인증 메일 재전송
            </ResendEmailButton>
          </EmailAndResendEmailWrapper>
        </AttributeWrapper>
        <AttributeWrapper>
          <TitleWrapper>별명</TitleWrapper>
          <NicknameWrapper
            type="text"
            value={this.state.nickname}
            onChange={({ target }) => this.setState({ nickname: target.value })} // eslint-disable-line
          />
        </AttributeWrapper>
        <AttributeWrapper>
          <TitleWrapper>학과명</TitleWrapper>
          <DepartmentWrapper>
            <ReactAutoComplete
              items={this.props.departments.toJS()}
              renderInput={(({ ref, ...props }: { ref: any }) => <SearchInput innerRef={ref} {...props} />)} // eslint-disable-line react/no-unused-prop-types
              shouldItemRender={(item: Object, value: string) => item.name.indexOf(value) > -1}
              getItemValue={(item: Object) => item.name}
              renderItem={(item: Object, highlighted: boolean) =>
                <AutoCompleteItem key={item.id} highlighted={highlighted}>
                  {item.name}
                </AutoCompleteItem>
              }
              renderMenu={((items: Array<Object>) => <AutoCompleteMenu>{items}</AutoCompleteMenu>)}
              value={this.state.query}
              onChange={(event: Event) => this.setState({ query: event.target.value })}
              onSelect={(value: string, item: Object) => this.setState({
                query: value,
                department_id: item.id,
              })}
              wrapperStyle={{ width: '100%', height: '100%' }}
            />
          </DepartmentWrapper>
        </AttributeWrapper>
        <ConfirmButtonWrapper>
          <ConfirmButton type="submit">
            수정 완료
          </ConfirmButton>
        </ConfirmButtonWrapper>
      </Background>
    );
  }
}

export default MyInfoContainer;
