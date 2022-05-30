import styled from 'styled-components';

export const BLTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #06260F;
  padding: 0 24px;
`;

export const BLTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 24px;
  background-color: #06260F;
  max-width: 1300px;
`;

export const BLTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  // border-bottom: 3px solid #D4A24E;
`;

export const BLTableBody = styled.tbody`
  color: #F5BD30;
  font-weight: 400;
  text-align: left;
  padding: 10px;
  font-size: 16px;
`;

export const BLTableRow = styled.tr`
  border-bottom: 1px dashed #D4A24E;
  // border-top: 1px solid #ddd;
  width: 100%;
`;

export const BLTableHeader = styled.th`
  color: #F5BD30;
  font-weight: 700;
  padding-bottom: 10px;
`;

export const BLTableData = styled.td`
  color: #F5BD30;
  font-weight: 400;
  padding-bottom: 10px;
`;

export const BLh1 = styled.h1`
  color: #F5BD30;
  font-weight: 400;
  font-size: 48px;
  text-align: center;
  padding: 10px;
`;