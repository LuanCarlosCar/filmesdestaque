import styled from "styled-components";

export const ContainerNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 3rem;
    box-sizing: border-box;
    
`;
export const ContainerList = styled.ul`
    text-decoration: none;
    display: flex;
    li{
        margin-right: 3.125rem;
        a{
            text-decoration: none;
            font-family: 'Open Sans', sans-serif;
            font-size: 1.5rem;
            font-weight: 600;
            color: #F9F9F9;
            
        }
    }
    li:last-child{
        margin-right: 0;
    }
    @media (max-width: 960px){
      display: none;
      
    }
`