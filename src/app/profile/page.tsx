import React from 'react'
import { cover } from '../../../public/images'
import Image from 'next/image'
import './profile.css'
import Details from '@/components/profile/details'
import ProfileInfo from '@/components/profile/ProfileInfo'
import WritePost from '@/components/home/WritePost'
import { Posts } from '../constants'
import PostContainer from '@/components/home/PostContainer'

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
