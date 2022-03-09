import styled from '@emotion/styled';

export const SocialProfileWrapper = styled.div`
    
    width: 250px;
    padding-top: 40px;
    background-color: #FFF;
    border-radius: 10px;
    border: 1px solid rgb(200, 202, 202);
    p {
        text-align: center;
    };
    overflow: hidden;
`;

export const AvatarImageWrapper = styled.div`
    width: 100px;
    height: 100px;
    margin: 0 auto;
    border-radius: 50px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: #FFF;
    img {
        width: 98%;
        height: 98%;
    };
`;

export const StatsList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-betwen;
    border-top: 1px solid #e8edf3;
`;
export const StatsListItem = styled.li`
    width: 85px;
    margin: 0;
    padding: 0;
    background-color: #f3f6f9;
    :not(:last-child) {
        border-right: 1px solid #e8edf3;
    };
    span {
        display: block;
        text-align: center;
    };
`;