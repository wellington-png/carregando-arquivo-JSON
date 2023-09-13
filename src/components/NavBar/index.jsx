import bell from '../../assets/bell.svg';
import msg from '../../assets/msg.svg';
import user from '../../assets/client_img.png';

import  NavBarContainer  from './styles';


export default function NavBar(){
    return (
        <NavBarContainer>
           <div className="search">
                <input type="text" placeholder="Pesquisar" />
                <button type="submit">Pesquisar</button>
           </div>
           <div className="icon_navbar">
                <div className="icons">
                    <img src={bell} alt="" />
                </div>
                <div className="icons">
                    <img src={msg} alt="" />
                </div>
                <div className="user">
                    <img src={user} alt="" />
                </div>
                
           </div>
        </NavBarContainer>
    )
}