import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {VscGithub} from 'react-icons/vsc'
import {FiDribbble} from 'react-icons/fi'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com/in/sofia-masliak' target="__blank"><BsLinkedin /></a>
        <a href='https://github.com/Sofiia108' target="__blank"><VscGithub /></a>
    </div>
  )
}

export default HeaderSocials