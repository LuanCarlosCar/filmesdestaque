import styled from "styled-components";

export const ContainerFooter = styled.footer`
    
    margin-top: 10px;
    bottom: 0;
    
    display: flex;
    justify-content: space-between;
    ul{
        display: flex;
        li{
            margin-right: 1rem;
        }
        li:last-child{
            margin-right: 0;
        }
    }
`;