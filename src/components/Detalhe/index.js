import { useContext } from 'react'
import estrela from '../../assets/imagens/nav/estrelas.svg'
import { ListContext } from '../../providers/ListProvider'
import { ContainerConteudo, ContainerFLex, TextCategoria, TextDescricao } from './styled'

export default function Detalhe(){
    const {filme} = useContext(ListContext)
    return(
        <ContainerConteudo>
            <TextCategoria>{filme.categoria}</TextCategoria>
            <ContainerFLex>
                <img src={estrela} alt="estrelas"/>
             
                
                <p>{filme.horas}</p>
            </ContainerFLex>
            <h1>{filme.titulo}</h1>
            <TextDescricao>{filme.descricao}</TextDescricao>
            <a href="#">Assistir agora</a>
        </ContainerConteudo>
    )
};