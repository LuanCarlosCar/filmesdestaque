import styled from "styled-components";
import { keyframes } from "styled-components";
const flutuar = keyframes`
    0% {
    transform: translatey(0px);
  }

  50% {
    transform: translatey(-10px);
  }
  100%{
    transform: translatey(0px);
  }
`;
export const ContainerBanner= styled.div`
    position: relative;
    background-image: url(${(props)=>(props.fundo)});
    background-size: cover;
    background-repeat: no-repeat;
    min-width: 300px;
    height: 400px;
    margin-right: 20px;
    cursor: pointer;
    
    box-shadow: inset 70px -100px 100px 10px rgba(0,0,0);
    box-sizing: border-box;
    transition: .5s;
    &:hover{
        animation: ${flutuar} 2s ease;
        
        
    }
    
    div{
        position: absolute;
        bottom: 0;
        margin-left: 24px;
        margin-bottom: 24px;

        p{
            
        display: block;
        padding: 0.25rem;
        border-radius: 0 0.625rem 0 0.625rem;
        height: 1rem;
        font-family: 'Open Sans', sans-serif;
        font-size: 1rem;
        font-weight: 600;
        color: #FFA634;
        background-color: transparent;
        margin-bottom: .7rem;

        }
        img{
            margin-bottom: .7rem;

        }
    }
    h2{
        font-size: 24px;
        font-family: 'Open Sans',sans-serif;
        font-weight: 600;
        color: #F9F9F9;
    }
   
`;