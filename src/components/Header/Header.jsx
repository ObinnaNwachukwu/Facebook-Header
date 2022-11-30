import React from 'react'
import './Header.css'
import Face from '../Face.svg'
import Home from '../Home.svg'
import Video from '../Video.svg'
import Store from '../Store.svg'
import User from '../Userr.svg'
import Game from '../Gaming.svg'
import Menu from '../Menu.svg'
import Messenger from '../Messenger.svg'
import Notification from '../Notification.svg'
import Obi from '../Obi.jpg'


const Header = () => {
  return (
    <div className='Main'>
      <div className='Main2'>
      <img className='Img1' src={Face} alt="Your SVG" />
      <input className='input' placeholder='Search Facebook'></input>
      </div>
      <div className='Main3'>
        <img className='Img2' src={Home}/>
        <img className='Img2' src={Video}/>
        <img className='Img3' src={Store}/>
        <img className='Img4' src={User}/>
        <img className='Img5' src={Game}/>
      </div>
      <div className='Main4'>
        <img className='img6' src={Menu}/>
        <img className='img7' src={Messenger}/>
        <img className='img8' src={Notification}/>
        <img className='img9' src={Obi}/>



      </div>

    </div>
  )
}

export default Header