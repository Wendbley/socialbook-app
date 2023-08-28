'use client'

import React from 'react'
import Image from 'next/image'
import { friends, group, marketplace, news, shortcut1, shortcut2, shortcut3, shortcut4, watch } from '../../public/images'
import './index.css'

const Sidebar = () => {
	return (
		<div className='left-sidebar'>
			<div className='imp-links'>
				<a href='#'>
					<Image src={news} alt='news' className='img' />
					Latest News
				</a>
				<a href='#'>
					<Image src={friends} alt='friends' className='img' />
					Friends
				</a>
				<a href='#'>
					<Image src={group} alt='group' className='img' />
					Group
				</a>
				<a href='#'>
					<Image src={marketplace} alt='marketplace' className='img' />
					Marketplace
				</a>
				<a href='#'>
					<Image src={watch} alt='watch' className='img' />
					Watch
				</a>
				<a href='#'>See More</a>
			</div>

			<div className='shortcut-links'>
				<p>Your shortcuts</p>
				<a href=''>
					<Image src={shortcut1} alt='shortcut-1' className='img' />
					Web Developers
				</a>
				<a href=''>
					<Image src={shortcut2} alt='shortcut-2' className='img' />
					Web Design Course
				</a>
				<a href=''>
					<Image src={shortcut3} alt='shortcut-3' className='img' />
					Full Stack Development
				</a>
				<a href=''>
					<Image src={shortcut4} alt='shortcut-4' className='img' />
					Website Experts
				</a>
			</div>
		</div>
	)
}

export default Sidebar
