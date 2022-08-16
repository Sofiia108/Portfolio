import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {VscGithub} from 'react-icons/vsc'
import {FiDribbble} from 'react-icons/fi'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target="__blank"><BsLinkedin /></a>
        <a href='https://github.com' target="__blank"><VscGithub /></a>
        <a href='https://dribble.com' target="__blank"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials