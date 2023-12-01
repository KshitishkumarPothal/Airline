import React, { useState } from 'react'
import {SiConsul} from 'react-icons/si'
import {BsPhoneVibrate} from 'react-icons/bs'
import {MdLanguage} from 'react-icons/md'
import {CgMenuGridO} from 'react-icons/cg'




const Navbar = () => {

    //letus remove the navbar from the screen
    const [active,setActive]=useState('navBarMenu')
    const showNavbar =()=>{
        setActive('navBarMenu showNavbar')
    }


    const removeNavbar =()=>{
        setActive('navBarMenu')
    }

    //add a backgroung color to the second navbar

    const [noBg, addBg] = useState('navBarTwo')

    const addBgColor =()=>{
          if (window.scrollY >= 10) {
        addBg('navBarTwo navbarWithBg')
        
      }
      else{
        addBg('navBarTwo')
      }
    
    }
    window.addEventListener('scroll',addBgColor)




  return (
    <div className='flex navBar'>
        <div className="flex navBarOne">
            <div>
                <SiConsul className='icon'/>
            </div>
            <div className='flex none'>
                <li className='flex'><BsPhoneVibrate/>Support</li>
                <li className='flex'><MdLanguage/>Language</li>
    
            </div>

            <div className="flex atb">
                <span>Sign In</span>
                <span>Sign Out</span>

            </div>
        </div>
        <div className={noBg}>

            <div className="logoDiv">
                <img src="src/pic/logo.png" className='logo'  alt="" />
            </div>
            <div className = {active}>
                <ul className="flex menu">
                    <li onClick={removeNavbar} className="listItem">Home</li>
                    <li onClick={removeNavbar} className="listItem">About</li>
                    <li onClick={removeNavbar} className="listItem">Offer</li>
                    <li onClick={removeNavbar} className="listItem">Seat</li>
                    <li onClick={removeNavbar} className="listItem">Destination</li>

                </ul>
                <button className='flex btn btnOne'>Contact</button>
            </div>

            <button className='flex btn btnTwo'>Contact</button>
            <div onClick={showNavbar} className='toggleIcon'>
               <CgMenuGridO className='icon'/>
            </div>

        </div>
      
    </div>
  )
}

export default Navbar
