import styled from "styled-components";

export const ContainerFooter = styled.footer`
    
    margin-top: 1.5rem;
    bottom: 0;
    
    display: flex;
    justify-content: space-between;
    padding: 0 3rem;
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