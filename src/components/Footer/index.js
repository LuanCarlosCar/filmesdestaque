import Facebook from '../../assets/imagens/nav/facebook.svg'
import Instagram from '../../assets/imagens/nav/instagram.svg'
import Twitter from '../../assets/imagens/nav/twitter.svg'
import Logo from '../../assets/imagens/nav/Kenai.svg'
import { ContainerFooter } from './styled'
export default function Footer(){
    return(
        <ContainerFooter>
            <img src={Logo}/>
            <ul>
                <li><a href="#"><img src={Facebook} /></a></li>
                <li><a href="#"><img src={Instagram} /></a></li>
                <li><a href="#"><img src={Twitter} /></a></li>
            </ul>
        </ContainerFooter>
    )
}