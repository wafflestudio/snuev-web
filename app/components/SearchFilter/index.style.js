import styled from 'styled-components';

import { typo, media } from '../../style-utils';
import SearchButtonImage from '../../images/ic-search-small-normal.png';
import DeleteButtonImage from '../../images/btn-delete-normal.png';
import ResetButtonImage from '../../images/ic-reset-disabled.png';
import CheckedButtonImage from '../../images/ic-detailsearch-checked.png';

export const Wrapper = styled.div`
  min-width: 1300px;
  height: 440px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  overflow: auto;

  ${media.tablet`
    min-width: 768px;
    height: 750px;
  `}

  ${media.phone`
    min-width: 400px;
    height: calc(100vh - ${(props) => props.theme.mobileNavBarHeight}px);
  `}
`;

export const Header = styled.div`
  width: 1220px;
  height: 36px;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;

  ${media.tablet`
    width: 700px;
    align-items: flex-end;
  `}

  ${media.phone`
    width: 90%;
    margin-top: 20px;
    align-items: flex-start;
  `}
`;

export const HeaderText = styled.div`
  font-family: ${(props) => props.theme.fontFamily.sansSerif};
  font-size: 14px;
  width: 81px;
  height: 100%;
  margin-right: 10px;

  ${media.phone`
    justify-content: center;
  `}
`;

export const ResetButton = styled.button`
  width: 30px;
  height: 30px;
  background-size: 28px;
  background: url(${ResetButtonImage}) no-repeat 50% 50%;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const FiltersWrapper = styled.div`
  height: 300px;
  display: flex;
  justify-content: space-between;

  ${media.tablet`
    height: 100%;
  `}

  ${media.phone`
    width: 90%;
    justify-content: flex-start;
    flex-direction: column;
    height: 100%;
  `}
`;

export const NondepartmentsWrapper = styled.div`
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  margin-left: 40px;

  ${media.tablet`
    width: 550px;
    margin-left: 0;
  `}

  ${media.phone`
    width: 100%;
    margin-left: 0;
  `}
`;

export const DepartmentWrapper = styled.div`
  width: 140px;
  align-items: center;

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
  }

  ${media.tablet`
    margin-left: 40px;
    margin-bottom: 20px;
  `}

  ${media.phone`
    width: 100%;
    margin-left: 0;
    & + & {
      margin-left: 0;
    }
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
    color: #000000;
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
    color: #000000;
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
  background-color: white;
  border: solid 1px #ccc;
  position: relative;
  z-index: 100;
  margin-left: -1px;
  margin-right: -29px;
  max-height: 200px;
  overflow-y: auto;
`;

export const AutoCompleteItem = styled.div`
  width: 125px;
  padding: 5px 0 5px 12px;
  font-family: NotoSansCJKkr;
  font-size: 12px;
  font-weight: normal;
  color: #000000;
  background-color: ${(props) => props.highlighted ? '#eee' : '#ffffff'};

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
  width: fit-content;
  min-height: 18px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;

  ${media.phone`
    margin-right: 20px;
  `}
`;

export const SelectedDepartmentText = styled.div`
  max-width: 130px;
  height: 100%;
  font-family: ${(props) => props.theme.fontFamily.sansSerif};
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0px;
  color: #4f48c4;
  padding-right: 4px;

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
