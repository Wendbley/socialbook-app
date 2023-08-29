'use client'


import React from 'react'
import Image from 'next/image'

import { Members } from '@/app/constants'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { advertisement } from '../../../public/images'
import './../index.css'

/**
 *
 * @returns
 */
const Rightbar = () => {
	return (
		<div className='right-sidebar'>
			{/* <!-- title --> */}
			<div className='sidebar-title'>
				<h4>Events</h4>
				<a href='#'>See All</a>
			</div>
			{/* <!-- events --> */}
			<div className='event'>
				<div className='left-event'>
					<h3>05</h3>
					<span>August</span>
				</div>
				<div className='right-event'>
					<h4>Social Media</h4>
					<p>
						<FaMapMarkerAlt />
						Cape Town, Wynberg
					</p>
					<a href='#'>More info</a>
				</div>
			</div>
			<div className='event'>
				<div className='left-event'>
					<h3>24</h3>
					<span>September</span>
				</div>
				<div className='right-event'>
					<h4>Regional Convention</h4>
					<p>
						<FaMapMarkerAlt />
						Green Point Stadium, Cape Town
					</p>
					<a href='#'>More info</a>
				</div>
			</div>

			{/* <!-- Advertissements --> */}
			<div className='sidebar-title'>
				<h4>Advertissements</h4>
				<a href='#'>Close</a>
			</div>
			<Image src={advertisement} alt='advertisement' className='sidebar-ads' />

			<div className='sidebar-title'>
				<h4>Conversation</h4>
				<a href='#'>Hide Chat</a>
			</div>

			{Members.map((member, index) => (
				<div className='online-list' key={index}>
					<div className='online'>
						<Image src={member.pict} alt={member.name} className='img' />
					</div>
					<p>{member.name}</p>
				</div>
			))}
		</div>
	)
}

export default Rightbar
