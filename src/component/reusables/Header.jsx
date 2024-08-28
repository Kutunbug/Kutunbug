import { NavLink} from 'react-router-dom'
import style from '../../styles/Header.module.css'
function Header() {
  return (
    <div>
      <nav className={style.header}>

        <h1>LOGO</h1>
        <ul className={style.navUl}>
          <li><NavLink className={style.navLi} to='/'>Home</NavLink ></li>
          <li><NavLink className={style.navLi} to='/about-us'>About</NavLink ></li>
          <li><NavLink className={style.navLi} to='/account'>Account</NavLink ></li>
          <li><NavLink className={style.navLi} to='/search'>Search</NavLink ></li>
        </ul>

        <ul className={style.navUl}>
          <li><NavLink className={style.navLi} to='/help'>Help</NavLink ></li>
          <li><NavLink className={style.navLi} to='/saved'>Saved</NavLink ></li>
          <li><NavLink className={style.navLi} to='/cart'>Cart</NavLink ></li>
          <li><NavLink className={style.navLi} to='/setting'>Setting</NavLink ></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header