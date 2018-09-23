// @flow

import styled from 'styled-components';

import { typo, media } from '../../style-utils';
import SearchButtonImage from '../../images/ic-search-small-normal.png';
import DeleteButtonImage from '../../images/btn-delete-normal.png';
import ResetButtonImage from '../../images/ic-reset-disabled.png';
import ResetButtonHoverImage from '../../images/ic-reset-hover.png';
import CheckedButtonImage from '../../images/ic-detailsearch-checked.png';

type Props = {
  theme: Map<string, any>,
  highlighted: boolean,
};

export const Wrapper = styled.div`
  height: calc(100vh - ${(props: Props) => props.theme.navBarHeight}px);
  background-color: ${(props: { theme: Theme }) => props.theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  overflow: auto;

  ${media.phone`
    height: calc(100vh - ${(props: Props) => props.theme.mobileNavBarHeight}px);
  `}
`;

export const Header = styled.div`
  width: 1220px;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;

  ${media.desktop`
    width: 90%;
  `}

  ${media.tablet`
    width: 700px;
  `}

  ${media.phone`
    width: 90%;
    margin-top: 20px;
  `}
`;

export const HeaderText = styled.div`
  font-family: ${(props: Props) => props.theme.fontFamily.sansSerif};
  font-size: ${(props: Props) => props.theme.fontSize.header2}px;
  height: 100%;
  margin-right: 10px;
  line-height: 28px;
`;

export const ResetButton = styled.button`
  width: 30px;
  height: 30px;
  background: url(${ResetButtonImage}) no-repeat 50% 50%;
  background-size: 30px;
  cursor: pointer;
  &:hover {
    background: url(${ResetButtonHoverImage}) no-repeat 50% 50%;
  }
  &:focus {
    outline: none;
  }
`;

export const FiltersWrapper = styled.div`
  height: 300px;
  display: flex;
  justify-content: space-between;

  ${media.desktop`
    width: 90%;
    flex-direction: column;
  `}

  ${media.tablet`
    width: 700px;
    height: 100%;
    flex-direction: row;
  `}

  ${media.phone`
    width: 90%;
    justify-content: flex-start;
    flex-direction: column;
  `}
`;

export const NondepartmentsWrapper = styled.div`
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  margin-left: 40px;

  ${media.desktop`
    width: 100%;
    margin-left: 0;
  `}

  ${media.tablet`
    width: 550px;
  `}

  ${media.phone`
    width: 100%;
  `}
`;

export const DepartmentWrapper = styled.div`
  width: 140px;
  align-items: center;
  display: block;

  ${media.desktop`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 50px;
  `}

  ${media.tablet`
    width: 140px;
    display: block;
    margin-bottom: 0;
  `}

  ${media.phone`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
  `}
`;

export const FilterWrapper = styled.div`
  width: 140px;
  align-items: center;

  & + & {
    margin-left: 40px;
    ${media.desktop`
      margin-left: 2%;
    `}
    ${media.tablet`
      margin-left: 40px;
    `}
    ${media.phone`
      margin-left: 0;
    `}
  }

  ${media.desktop`
    width: 15%;
  `}

  ${media.tablet`
    width: 140px;
    margin-left: 40px;
    margin-bottom: 20px;
  `}

  ${media.phone`
    width: 100%;
    margin-left: 0;
  `}
`;

export const FilterHeader = styled.div`
  ${typo.body1}
  width: 100%;
  height: 40px;
  border-bottom: solid 1px #d5dbe0;
  margin-bottom: 10px;
`;

export const FilterElement = styled.button`
  ${typo.body2}
  width: 100%;
  height: 32px;
  text-align: left;
  padding-left: 12px;
  cursor: pointer;
  opacity: 0.7;
  margin-bottom: 2px;
  &:hover {
    background-color: #f7f8fa;
    color: ${(props: Props) => props.theme.color.black};
    opacity: 1;
  }
  &:focus {
    outline: none;
  }

  ${media.phone`
    width: 49%;
    height: 40px;
    margin-right: 1%;
    color: ${(props: Props) => props.theme.color.black};
  `}
`;

export const FilterElementSelected = styled.button`
  ${typo.body2}
  width: 100%;
  height: 32px;
  text-align: left;
  padding-left: 12px;
  cursor: pointer;
  background: rgba(79, 72, 196, 0.098) url(${CheckedButtonImage}) no-repeat 97% 50%;
  margin-bottom: 2px;
  color: ${(props: Props) => props.theme.color.primary};

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: none;
  }

  ${media.phone`
    width: 49%;
    height: 40px;
    margin-right: 1%;
    font-size: 16px;
  `}
`;

export const DepartmentSearchWrapper = styled.form`
  width: 140px;
  height: 40px;
  border-radius: 2px;
  border: solid 1px #d5dbe0;
  text-align: left;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;

  ${media.desktop`
    margin-right: 30px;
  `}

  ${media.tablet`
    margin-right: 0;
  `}

  ${media.phone`
    width: 100%;
  `}
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  margin: 0;

  &:focus {
    outline: none;
  }

  ${media.phone`
    margin-right: 30px;
  `}
`;

export const AutoCompleteStyle = {
  width: '100%',
  height: '100%',
  paddingLeft: '12px',
  paddingRight: '9px',
  fontFamily: 'NotoSansCJKkr',
  fontSize: '12px',
  fontWeight: 'normal',
  opacity: '0.7',
  color: '#000000',
};

export const AutoCompleteMenu = styled.div`
  background-color: ${(props: Props) => props.theme.color.white};
  border: solid 1px #ccc;
  position: relative;
  margin-left: -1px;
  margin-right: -26px;
  max-height: 200px;
  overflow-y: auto;
  z-index: ${(props: Props) => props.theme.zIndex.searchFilter + 1};

  ${media.phone`
    margin-right: -30px;
  `}
`;

export const AutoCompleteItem = styled.div`
  ${typo.body2}
  width: 100%;
  padding: 5px 0 5px 12px;
  color: ${(props: Props) => props.theme.color.black};
  background-color: ${(props: Props) => props.highlighted ? '#eee' : props.theme.color.white};

  ${media.phone`
    width: 100%;
  `}
`;

export const DepartmentSearchIcon = styled.div`
  width: 30px;
  height: 100%;
  background: url(${SearchButtonImage}) no-repeat 50% 50%;
  cursor: pointer;
`;

export const SelectedDepartmentWrapper = styled.div`
  min-height: 18px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;

  ${media.desktop`
    margin-right: 20px;
  `}

  ${media.tablet`
    margin-right: 0;
  `}

  ${media.phone`
    margin-right: 20px;
  `}
`;

export const SelectedDepartmentText = styled.div`
  ${typo.body2}
  max-width: 130px;
  height: 100%;
  color: ${(props: Props) => props.theme.color.primary};
  padding-right: 4px;

  ${media.desktop`
    max-width: 100%;
  `}

  ${media.tablet`
    max-width: 130px;
  `}

  ${media.phone`
    max-width: 100%;
  `}
`;

export const DeleteButton = styled.div`
  width: 10px;
  height: 18px;
  background: url(${DeleteButtonImage}) no-repeat 50% 50%;
  cursor: pointer;
`;
