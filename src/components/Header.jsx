import MenuItem from "./MenuItem"
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'

const Header = () => {
  return (
    <div>
        <div className="menu">
            <MenuItem title='home' address='/' Icon={ AiFillHome }/>
            <MenuItem title='about' address='/about' Icon={ BsFillInfoCircleFill }/>
        </div>
    </div>
  )
}

export default Header