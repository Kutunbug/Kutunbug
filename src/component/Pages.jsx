import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Account from '../pages/Account'
import Cart from '../pages/Cart'
import Help from '../pages/Help'
import Saved from '../pages/Saved'
import Setting from '../pages/Setting'


function Pages () {
    return (
        <div>
            <Routes>
                <Route path= '/' element={<Home/>}/>
                <Route path= '/about-us' element={<About/>}/>
                <Route path= '/account' element={<Account/>}/>
                <Route path= '/cart' element={<Cart/>}/>
                <Route path= '/saved' element={<Saved/>}/>
                <Route path= '/setting' element={<Setting/>}/>
                <Route path= '/help' element={<Help/>}/>
            </Routes>
        </div>
    )
}

export default Pages