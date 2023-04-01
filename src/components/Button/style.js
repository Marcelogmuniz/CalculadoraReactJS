import styled from 'styled-components';

export const ButtonContainer = styled.button `
    padding: 20px;
    border: 1px solid #16db65;
    background-color: #04471c;
    color: #ffffff;
    font-size: 24px;
    fonbt-weight: 700;
    flex: 1;
    transition: 0.2s ease-in-out;

    &:hover {
        background-color: #15db65;
        cursor: pointer;
    }
`