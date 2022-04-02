import styled from '@emotion/styled';

export const FriendsSchedule = styled.ul`
    list-style: none;
    width: 420px;
    margin: 20px;
    padding: 0;
    
`;
export const ScheduleItem = styled.li`
    display: flex;
    align-items: center;
    justify-content:start; 
    box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.3);
    padding: 5px;
    margin-bottom: 20px;
`;
export const StatusOnline = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: ${props => (props.onlineStatus ? 'green' : 'red')};
    margin-right: 10px;
`;

export const FriendName = styled.p`
    margin: 0;
    font-weight: bolder;
    font-size: 36px;
    margin-left: 10px;
    text-transform: capitalize;
`;