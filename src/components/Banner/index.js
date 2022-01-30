import { useContext } from 'react'
import estrela from '../../assets/imagens/nav/estrelas.svg'
import { ListContext } from '../../providers/ListProvider'
import { ContainerBanner } from './styled'
export default function Banner(props){
    const {titulo,categoria,fundoBanner} = props
    const {setFilme} = useContext(ListContext)
    const newMovie = ()=>{
        setFilme(props.item)
    }
    return(
        
        <ContainerBanner fundo={fundoBanner}  onMouseOver={newMovie}>
            <div>
                <p>{categoria}</p>
                
                <img src={estrela} />
                <h2>{titulo}</h2>
            </div>
            
        </ContainerBanner>

    )
}