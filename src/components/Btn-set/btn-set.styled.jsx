import styled from '@emotion/styled';

export const BtnWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 20px;
    position: absolute;
    top: 0;
    left: 35%;
    button {
        padding: 5px 10px;
        margin-right: 10px;
        transform: skew(10deg);
        cursor: pointer;
        :hover {
            box-shadow: -1px 4px 6px 0px rgba(0,0,0,0.75);
            transform: skew(10deg) scale(1.1);
            
        };
    }
`;