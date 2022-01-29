import search from '../../assets/imagens/nav/search.svg'
import notifica from '../../assets/imagens/nav/bell.svg'
import avatar from '../../assets/imagens/nav/user.svg'
import { ContainerList, ContainerNav } from './styled'
import logo from '../../assets/imagens/nav/kenaiC.svg'

export default function NavBar(){
    return(
        <ContainerNav>
            <img src={logo} alt="logo"/>
            <ContainerList>
                <li><a href="#"> <img src={search} /></a></li>
                <li><a href="#">Início</a></li>
                <li><a href="#">Minha lista</a></li>
                <li><a href="#"> <img src={notifica} /></a></li>
                <li><a href="#"> <img src={avatar} /></a></li>
            </ContainerList>
        </ContainerNav>
    )
}