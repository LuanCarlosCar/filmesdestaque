
import { createContext, useState } from 'react'
import MiranhaBanner from '../assets/imagens/fundo/mini-miranha.svg'
import Miranha from '../assets/imagens/fundo/miranha.jpg'
import LokiBanner from '../assets/imagens/fundo/mini-loki.svg'
import Loki from '../assets/imagens/fundo/loki.jpg'
import Drag from '../assets/imagens/fundo/drag3.jpg'
import DragBanner from '../assets/imagens/fundo/mini-drag.svg'
import ShangBanner from '../assets/imagens/fundo/mini-shang-chi.svg'
import Shang from '../assets/imagens/fundo/shang-chi.jpg'
import WitcherBanner from '../assets/imagens/fundo/mini-witcher.svg'
import Witcher from '../assets/imagens/fundo/hte-witcher.jpg'



export const  ListContext = createContext({})
export const ListProvider = (props) =>{
    const data = [
        {titulo: 'Spider-Man', descricao: 'No Way Home explora o conceito do multiverso e liga o UCM aos filmes anteriores do Homem-Aranha, com vários atores — incluindo os atores anteriores do personagem Maguire e Garfield', horas: '1h 57m', categoria: 'acao', imgBanner : MiranhaBanner, imgMain:Miranha},
        {titulo: 'Loki', descricao: 'aLoki, Deus da Trapaça, sai da sombra de seu irmão para embarcar em uma aventura que ocorre após os eventos de "Vingadores: Ultimato".', horas: '1h 57m', categoria: 'acao', imgBanner : LokiBanner, imgMain: Loki},
        {titulo: 'Din e o Dragão Genial', descricao: 'Din é um garoto obstinado que quer retomar contato com sua melhor amiga de infância. Ele descobre que tudo é possível ao conhecer um dragão que realiza sonhos.', horas: '1h 57m', categoria: 'acao', imgBanner : DragBanner , imgMain: Drag},
        {titulo: 'Shang-Chi', descricao: 'Shang-Chi é o filho do líder de uma organização criminosa poderosa. O rapaz foi criado desde criança para ser um guerreiro, mas decidiu abandonar esse caminho e fugiu para viver uma vida pacífica. Porém, tudo isso muda quando ele é atacado por um grupo de assassinos e se vê forçado a enfrentar seu passado.', horas: '1h 57m', categoria: 'acao', imgBanner : ShangBanner , imgMain: Shang},
        {titulo: 'The Witcher', descricao: 'O mutante Geralt de Rívia é um caçador de monstros que luta para encontrar seu lugar em um mundo onde as pessoas, muitas vezes, são mais perversas do que as criaturas selvagens.', horas: '1h 57m', categoria: 'acao', imgBanner : WitcherBanner , imgMain: Witcher}
    ]
    const [lista, setLista] = useState(data)
    const [filme, setFilme] = useState({titulo: 'Spider-Man', descricao: 'No Way Home explora o conceito do multiverso e liga o UCM aos filmes anteriores do Homem-Aranha, com vários atores — incluindo os atores anteriores do personagem Maguire e Garfield', horas: '1h 57m', categoria: 'acao', imgBanner : MiranhaBanner, imgMain:Miranha});

      //const filteredData = Object.values(lista).filter(function(obj) { return obj.name.toLowerCase().includes(filter.toLowerCase())});// lista.filter(function(obj) { return obj.name.toLowerCase().includes(filter.toLowerCase())});


    return(
        <ListContext.Provider value={{lista, filme, setFilme}}>
            {props.children}
        </ListContext.Provider>
    )
}