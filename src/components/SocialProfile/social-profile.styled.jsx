import styled from '@emotion/styled';

export const SocialProfileWrapper = styled.div`
    
    max-width: 420px;
    margin: 20px;
    padding-top: 20px;
    background-color: #FFF;
    border-radius: 10px;
    border: 1px solid rgb(200, 202, 202);
    p, b {
        text-align: center;
    };
    font-size: 18px;
    overflow: hidden;
`;


export const AvatarImageWrapper = styled.div`
    width: 150px;
    height: 150px;
    margin: 0 auto;
    border-radius: 75px;
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
export const UserNickName = styled.p`
    font-weight: bolder;
    font-size: 24px;
`;
export const StyledGrayTxt = styled.p`
    color: #bac1c9;
`;
export const StyledGrayTxtSpan = styled.span`
    color: #bac1c9;
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
    width: 220px;
    margin: 0;
    padding: 0;
    background-color: #f3f6f9;
    :not(:last-child) {
        border-right: 1px solid #e8edf3;
    };
    span, b {
        display: block;
        text-align: center;
    };
`;