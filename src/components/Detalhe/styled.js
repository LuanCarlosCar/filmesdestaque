import styled from "styled-components";

export const ContainerConteudo = styled.div`
    z-index: 99;
    margin-top: 1rem;
    margin-left: 3rem;
    box-sizing: border-box;
    h1{
        font-family: 'Open Sans', sans-serif;
        font-size: 3.5rem;
        font-weight: 600;
        color: #F9F9F9;
        margin-bottom: 1.3rem;
    }
    a{
        
        text-decoration: none;
        width: 17.875rem;
        height: 3.5rem;
        background-color: #FFA634;
        padding: 0.75rem 4rem;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        font-size: 1.6rem;
        color: black;
        border-radius: 0.625rem;
        
    }
`;
export const TextCategoria = styled.p`
    display: inline-block;
    padding: 0.25rem 0.5rem;
    border-radius: 0 0.625rem 0 0.625rem;
    height: 1rem;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: #FFA634;
    background-color: black;
    margin-bottom: 1rem;


`;
export const ContainerFLex = styled.div`
    display: flex;
    margin-bottom: 1.625rem;
    align-items: center;
    p{
        font-family: 'Open Sans', sans-serif;
        font-size: 0.875rem;
        font-weight: 600;
        color: #F9F9F9;
        margin-left: 0.625rem;
    }
`;
export const TextDescricao = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size:  1.25rem;
    font-weight: 400;
    max-width: 33.5rem;
    max-height: 5.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #F9F9F9;
    line-height: 1.75rem;
    margin-bottom: 2.7rem;
    @media (max-width: 960px){
        max-height: 3.5rem;
      
    }
`;

