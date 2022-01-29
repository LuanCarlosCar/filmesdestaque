import styled from "styled-components";


export const ContainerHome = styled.div`
    width: 100vw;
    height: 62.5rem;
    background-color: #0C0C0C;
    box-sizing: border-box;
    overflow: hidden;
    
`;
export const ContainerHeader = styled.header`
background-image: url(${(props)=>(props.fundo)});
position: relative;
    height: 80vh;
    width: 100vw;
    background-size: cover;
    box-shadow: inset 100px 25px 240px 100px rgba(0,0,0);
    
    
 
`;
export const ContainerDestaque = styled.section`
    position: absolute;
    bottom: -16.9rem;
    padding: 0 3rem;
    box-sizing: border-box;
    h2{font-family: 'Open Sans', sans-serif;
    font-size: 2rem;
    font-weight: 600;
    color: #f9f9f9;
    }

`;
export const Barra = styled.div`
    width: 3.75rem;
    height: 0.3125rem;
    margin-top: 0.125rem;
    background-color: orange;
    margin-bottom: 2.3rem;
`;
export const ContainerListaDestaque = styled.section`

    width: 95vw;
    position: relative;

   
    display: grid;
    
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr ;
    gap: 10px;
    
    overflow-x: auto;
    scroll-snap-type: x mandatory;
  

   scroll-padding: 10px;
    &::-webkit-scrollbar {
      width: 1px;
        height: 1px;
        background-color: #CCCCCC;
        }
        &::-webkit-scrollbar-button {
            margin: 0;
            height: 0;
            padding: 0;
    
        }
        &::-webkit-scrollbar-track {
            background: #CCCCCC;
        }
        &::-webkit-scrollbar-track-piece {
            background: #282830;
        }
        &::-webkit-scrollbar-thumb {
            background: #8257E6;
            border-radius: 10px;
        }
        &::-webkit-scrollbar-corner {
          background: #FF0000;
          border-radius: 5px;
      }


    
`;