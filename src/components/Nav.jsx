import './css/Nav.css'
import { Wrap } from '../styles/styledComponents'

import { NavLink } from 'react-router-dom'
function Nav() {
   return (
      <Wrap>
         <ul className="nav-meun">
            <li>
               <NavLink to="/">홈</NavLink>
            </li>
            <li>
               <NavLink to="/today/seoul">오늘의 날씨</NavLink>
            </li>
            <li>
               <NavLink to="/daytime/seoul">주간 날씨</NavLink>
            </li>
         </ul>
      </Wrap>
   )
}

export default Nav
