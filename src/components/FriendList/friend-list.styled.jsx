import styled from '@emotion/styled'

export const FriendsSchedule = styled.ul`
    list-style: none;
    width: 200px;
    
`;
export const ScheduleItem = styled.li`
    display: flex;
    align-items: center;
    justify-content:space-around;
    box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.3);
    padding: 5px;
    margin-bottom: 20px;
`;
export const StatusOnline = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: green;
`;
export const StatusOffline = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: red;
`;