import './css/Nav.css'
import { Wrap } from '../styles/styledComponents'

import { NavLink } from 'react-router-dom'
function Nav() {
   return (
      <Wrap>
         <ul>
            <li>
               <NavLink to="/">홈</NavLink>
            </li>
            <li>
               <NavLink to="/today">오늘의 날씨</NavLink>
            </li>
            <li>
               <NavLink to="/daytime">주간 날씨</NavLink>
            </li>
         </ul>
      </Wrap>
   )
}

export default Nav
