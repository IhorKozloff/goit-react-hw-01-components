import styled from '@emotion/styled';

export const TransactionTable = styled.table`
    width: 600px;
    border: 1px solid #FFF;
    margin: 0;
    padding: 0;
`;
export const TransactionTableHead = styled.thead`
    background-color: #00bcd5;
    color: #FFF;
`;
export const TransactionTableHeadItem = styled.th`
    padding: 10px 0;
`;

export const TransactionTableRow = styled.tr`
    :nth-child(2n) {
        background-color: #ecf1f3;
    }
    border: 1px solid black;
`;
export const TransactionTableItem = styled.td`
    // background-color: #00bcd5;
    color: gray;
    text-align: center;
    padding: 5px 0;
    
`;