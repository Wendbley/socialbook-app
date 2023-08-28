'use client'

import React, { useEffect, useState } from 'react'
import {
	inbox,
	logo,
	notification,
	profilePic,
	search,
	video,
} from '@/../public/images'
import Image from 'next/image'
import './index.css'
import DropDownMenu from './DropDownMenu'


const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
    const [darkTheme, setDarkTheme] = useState('')

    
    /**
     * 
     */
	useEffect(() => {
		if (localStorage.getItem('theme') == 'light') {
			document.body.classList.remove('dark-theme')
		} else if (localStorage.getItem('theme') == 'dark') {
			document.body.classList.add('dark-theme')
		} else {
			localStorage.setItem('theme', 'light')
			document.body.classList.remove('dark-theme')
		}
        setDarkTheme(localStorage.getItem('theme')!)
        
	}, [])

	return (
		<nav>
			<div className='nav-left'>
				<a href='/'>
					<Image src={logo} alt='logo' className='logo'  priority={true}/>
				</a>

				<ul className='nav-links'>
					<li>
						<Image
							src={notification}
							alt='notification'
							width={28}
							height={28}
							className='img'
						/>
					</li>
					<li>
						<Image
							src={inbox}
							alt='inbox'
							width={28}
							height={28}
							className='img'
						/>
					</li>
					<li>
						<Image
							src={video}
							alt='video'
							width={28}
							height={28}
							className='img'
						/>
					</li>
				</ul>
			</div>
			<div className='nav-right'>
				<div className='search-box'>
					<Image src={search} alt='search' className='img' />
					<input type='text' placeholder='Search' />
				</div>
				<div className='nav-user-icon online'>
					<Image
						src={profilePic}
						alt='profile'
						width={40}
						height={40}
						id='dropdown-btn'
						onClick={() => setIsOpen(!isOpen)}
					/>
				</div>
			</div>

			{isOpen && <DropDownMenu darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>}
		</nav>
	)
}

export default Navbar
