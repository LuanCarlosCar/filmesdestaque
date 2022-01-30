import { useContext } from "react";
import Banner from "./components/Banner";
import Detalhe from "./components/Detalhe";
import NavBar from "./components/Navbar";
import { ListContext, ListProvider } from "./providers/ListProvider";
import { Barra, ContainerDestaque, ContainerHeader, ContainerHome, ContainerListaDestaque, TitleDestaque } from "./styledHome/styled";

import Footer from "./components/Footer";


function App() {
  const {lista, filme} = useContext(ListContext)
  return (
   
        <ContainerHome>
      <ContainerHeader fundo={filme.imgMain}>
      <NavBar />
        <Detalhe />

      </ContainerHeader>
      
      <ContainerDestaque>
        <TitleDestaque>Destaque</TitleDestaque>
        <Barra></Barra>
        <ContainerListaDestaque>
        {lista.map((item)=>(
          <Banner key={item.titulo} item={item} titulo={item.titulo} descricao={item.descricao} horas={item.horas} categoria={item.categoria} fundoBanner={item.imgBanner} fundoMain={item.imgMain} />
        ))}

        </ContainerListaDestaque>
        
        <Footer />
      </ContainerDestaque>
          
    </ContainerHome>


  );
}

export default App;
