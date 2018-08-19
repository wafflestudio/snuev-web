import styled from 'styled-components';
import SearchButtonImage from '../../images/ic-search-small-normal.png';
import DeleteButtonImage from '../../images/btn-delete-normal.png';
import ResetButtonImage from '../../images/ic-reset-disabled.png';

export const Wrapper = styled.div`
  width: 1300px;
  height: 420px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const Header = styled.div`
  width: 1220px;
  height: 20px;
  margin-top: 16px;
  margin-bottom: 40px;
  display: flex;
`;

export const HeaderText = styled.div`
  font-family: NotoSansCJKkr;
  font-size: 14px;
  width: 81px;
  height: 100%;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  margin-right: 12px;
`;

export const ResetButton = styled.button`
  width: 20px;
  height: 100%;
  background: url(${ResetButtonImage}) no-repeat 50% 50%;
  cursor: pointer;
`;

export const FiltersWrapper = styled.div`
  height: 300px;
  display: flex;
  justify-content: space-between;
`;

export const FilterWrapper = styled.div`
  width: 140px;
  align-items: center;

  & + & {
    margin-left: 40px;
  }
`;

export const FilterHeader = styled.div`
  width: 100%;
  height: 40px;
  font-family: NotoSansCJKkr;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0px;
  color: var(--black-two);
  border-bottom: solid 1px #d5dbe0;
  margin-bottom: 10px;
`;

export const FilterElement = styled.button`
  width: 100%;
  height: 32px;
  font-family: NotoSansCJKkr;
  font-size: 13px;
  font-weight: normal;
  font-style: noraml;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0px;
  color: #222222;
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
`;

export const FilterElementSelected = styled.button`
  width: 100%;
  height: 32px;
  font-family: NotoSansCJKkr;
  font-size: 13px;
  font-weight: normal;
  font-style: noraml;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0px;
  color: #4f48c4;
  text-align: left;
  padding-left: 12px;
  cursor: pointer;
  opacity: 0.7;
  background-color: #4f48c419;
  margin-bottom: 2px;

  &:hover {
    opacity: 1;
  }
`;

export const DepartmentSearchWrapper = styled.form`
  width: 150px;
  height: 30px;
  border-radius: 2px;
  border: solid 1px #d5dbe0;
  text-align: left;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  margin: 0;

  &:focus {
    outline: none;
  }
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

export const AutoCompleteItemStyle = (highlighted) => ({
  width: '135px',
  padding: '5px 0 5px 12px',
  fontFamily: 'NotoSansCJKkr',
  fontSize: '12px',
  fontWeight: 'normal',
  color: '#000000',
  backgroundColor: highlighted ? '#eee' : 'transparent',
});

export const DepartmentSearchIcon = styled.div`
  width: 30px;
  height: 100%;
  background: url(${SearchButtonImage}) no-repeat 50% 50%;
  cursor: pointer;
`;

export const SelectedDepartmentWrapper = styled.div`
  width: 140px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`;

export const SelectedDepartmentText = styled.div`
  max-width: 130px;
  height: 100%;
  font-family: NotoSansCJKkr;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0px;
  color: #4f48c4;
  padding-right: 4px;
`;

export const DeleteButton = styled.div`
  width: 10px;
  height: 18px;
  background: url(${DeleteButtonImage}) no-repeat 50% 50%;
  cursor: pointer;
`;
