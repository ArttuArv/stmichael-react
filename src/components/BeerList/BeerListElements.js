import styled from 'styled-components';

export const BLTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #06260F;
  padding-top: 80px;

  @media screen and (max-width: 370px) {
    padding-top: 20px;
  }
`;

export const BLTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 24px;
  background-color: #06260F;
  max-width: 1200px;
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

  @media screen and (max-width: 370px) {
    padding-top: 5px;
  }
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
  padding-right: 15px;
  text-align: left;
  font-size: calc(14px + (16 - 14) * ((100vw - 1000px) / (1300 - 600)));
`;

export const BLTableData = styled.td`
  color: #F5BD30;
  font-weight: 400;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: calc(14px + (16 - 14) * ((100vw - 1000px) / (1300 - 600)));
`;

export const BLh1 = styled.h1`
  color: #F5BD30;
  font-weight: 400;
  font-size: 48px;
  text-align: center;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const BLh2 = styled.h2`
  color: #F5BD30;
  font-weight: 400;
  font-size: 36px;
  text-align: center;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`;