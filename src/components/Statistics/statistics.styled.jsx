import styled from '@emotion/styled';


export const StatisticsSection = styled.section`
    max-width: 420px;
    background-color: #fff;
    padding-top: 30px;
    font-size: 18px;
    margin: 20px;
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
    flex-basis: 30px;
    flex-grow: 1;
`;
export const PercentValue = styled.span`
   font-size: 22px;
   font-weight: bolder;
   margin-top: 10px;
`;
