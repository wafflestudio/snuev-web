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
} from './index.style';

type Props = {
  departments: Map<string, any>,
  user: Map<string, any>,
  resendConfirmationEmail: () => void,
};

type State = {
  nickname: string,
  departmentId: string,
  query: string,
};

export class MyInfoContainer extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      nickname: props.user.get('nickname'),
      departmentId: props.user.getIn(['department', 'id']),
      query: props.user.getIn(['department', 'name']),
    };
  }

  render() {
    return (
      <Background>
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
              onSelect={(value: string) => this.setState({ query: value })}
              wrapperStyle={{ width: '100%', height: '100%' }}
            />
          </DepartmentWrapper>
        </AttributeWrapper>
      </Background>
    );
  }
}

export default MyInfoContainer;
