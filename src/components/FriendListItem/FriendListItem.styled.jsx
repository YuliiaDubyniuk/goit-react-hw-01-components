import styled from '@emotion/styled';

export const Status = styled.span`
    display: block;
    position: absolute;
    top: 61px;
    left: -7px;
    margin-left: 10px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${(props) => (props.stat ? 'green' : 'red')};
`