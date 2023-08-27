'use client'

import Image from 'next/image'
import {
	arrow,
	display,
	feedback,
	help,
	logout,
	profilePic,
	settings,
} from '@/../public/images'
import './index.css'

interface DropDownMenuProps {
    darkTheme: string
    setDarkTheme: React.Dispatch<React.SetStateAction<string>>
}

/**
 *
 * @returns
 */
const DropDownMenu = ({ darkTheme, setDarkTheme }: DropDownMenuProps) => {
	
    /**
	 *
	 */
	const handleDarkTheme = () => {
		if (localStorage.getItem('theme') == 'light') {
			localStorage.setItem('theme', 'dark')
            setDarkTheme('dark')
		} else {
			localStorage.setItem('theme', 'light')
            setDarkTheme('light')
		}
		document.body.classList.toggle('dark-theme')
	}


	return (
		<div className='settings-menu'>
			<div
				id='dark-btn'
				className={` ${darkTheme === 'dark' ? 'active' : ''}`}
				onClick={handleDarkTheme}>
				<span></span>
			</div>
			<div className='settings-menu-inner'>
				<div className='user-profile'>
					<Image src={profilePic} alt='profile' className='img' />
					<div>
						<p>John Nicholson</p>
						<a href='/profile'>See your profile</a>
					</div>
				</div>
				<hr />
				<div className='user-profile'>
					<Image src={feedback} alt='profile' width={38} />
					<div>
						<p>Give Feeback</p>
						<a href='#'>Help us to improve the new design</a>
					</div>
				</div>
				<hr />

				<div className='settings-links'>
					<Image
						src={settings}
						alt='setting'
						className='settings-icon'
						width={38}
					/>
					<a href='#'>
						Settings & Privacy <Image src={arrow} width={10} alt='arrow' />
					</a>
				</div>
				<div className='settings-links'>
					<Image
						src={help}
						alt='setting'
						className='settings-icon'
						width={38}
					/>
					<a href='#'>
						Help & Support
						<Image src={arrow} width={10} alt='arrow' />
					</a>
				</div>
				<div className='settings-links'>
					<Image
						src={display}
						alt='setting'
						className='settings-icon'
						width={38}
					/>
					<a href='#'>
						Display & Accessibility <Image src={arrow} width={10} alt='arrow' />
					</a>
				</div>
				<div className='settings-links'>
					<Image
						src={logout}
						alt='setting'
						className='settings-icon'
						width={38}
					/>
					<a href='#'>
						Logout <Image src={arrow} width={10} alt='arrow' />
					</a>
				</div>
			</div>
		</div>
	)
}

export default DropDownMenu
