import React from 'react'
import { cover } from '../../../public/images'
import Image from 'next/image'

import './profile.css'
import Details from '@/components/profile/Details'
import ProfileInfo from '@/components/profile/ProfileInfo'


const Profile = () => {
	return (
		<div className='profile-container'>
			<Image src={cover} alt='cover' className='cover-img' />
			<Details />
			<ProfileInfo />
			
		</div>
	)
}

export default Profile
