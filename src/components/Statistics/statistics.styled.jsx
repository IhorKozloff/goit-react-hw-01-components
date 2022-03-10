import styled from '@emotion/styled';


export const StatisticsSection = styled.section`
    width: 400px;
    background-color: #fff;
    padding-top: 30px;
`;
export const SectionTittle = styled.h2`
    text-align: center;
    margin: 0 0 30px 0;
    padding: 0;
    text-transform: uppercase;
    color: gray;
`;
export const StatisticList = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 0;
`;
export const StatisticListItem = styled.li`
    span {
        display: block;
        text-align: center;
        color: #fff;
    }
    padding: 10px 5px;
    flex-basis: 50px;
    flex-grow: 1;
`;
export const PercentValue = styled.span`
   font-size: 22px;
   margin-top: 10px;
`;
