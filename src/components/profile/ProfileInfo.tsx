import React from 'react'
import Image from 'next/image'
import { Members, Photos, Posts } from '@/app/constants'
import {
	feeling,
	profileHome,
	profileJob,
	profileLocation,
	profileStudy,
} from '../../../public/images'
import WritePost from '../home/WritePost'
import PostContainer from '../home/PostContainer'

const ProfileInfo = () => {
	return (
		<div className='profile-info'>
			{' '}
			<div className='info-col'>
				<div className='profile-intro'>
					<h3>Intro</h3>
					<p className='intro-text'>
						Believe in yourself and you can do unbelievable things.{' '}
						<Image src={feeling} alt='smiley-face' />
					</p>
					<hr />
					<ul>
						<li>
							<Image src={profileJob} alt='profile-job' /> Director at 99 media
							Ltd
						</li>
						<li>
							{' '}
							<Image src={profileStudy} alt='profile-study' />
							Supervisor at F&O Controls Systems
						</li>
						<li>
							<Image src={profileStudy} alt='profile-study' /> Lecturer at CPUT
						</li>
						<li>
							<Image src={profileHome} alt='profile-home' /> Manager at District
							Hospital
						</li>
						<li>
							<Image src={profileLocation} alt='profile-location' /> CEO at
							Gallery of Art
						</li>
					</ul>
				</div>

				<div className='profile-intro'>
					<div className='title-box'>
						<h3>Photo</h3>
						<a href='#'>All Photos</a>
					</div>

					<div className='photo-box'>
						{Photos.map((photo, index) => (
							<div key={index}>
								<Image src={photo.photo} alt='photo' />
							</div>
						))}
					</div>
				</div>

				<div className='profile-intro'>
					<div className='title-box'>
						<h3>Friends</h3>
						<a href='#'>All Friends</a>
					</div>
					<p>120 (10 mutuals) </p>
					<div className='friends-box'>
						{Members.map((member, index) => (
							<div key={index}>
								<Image src={member.pict} alt={member.name} />
								<p>{member.name}</p>
							</div>
						))}
					</div>
				</div>
			</div>

            <div className='post-col'>
				<WritePost />
				{Posts.map((post, index) => {
					return <PostContainer key={index} {...post} />
				})}
			</div>
		</div>
	)
}

export default ProfileInfo
