'use client'

import React from 'react'
import Image from 'next/image'

import { AiOutlineCaretDown } from 'react-icons/ai'

import './../index.css'
import { feeling, liveVideo, photo, profile } from '../../../public/images'

const WritePost = () => {
	return (
		<div className='write-post-container'>
			<div className='user-profile'>
				<Image src={profile} alt='profile' className='img'/>
				<div className='info'>
					<p>John Nicholson</p>
					<small>
						{' '}
						Public
						<AiOutlineCaretDown />
					</small>
				</div>
			</div>

			<div className='post-input-container'>
				<textarea rows={3} placeholder="What's on your mind John?"></textarea>
				<div className='add-post-links'>
					<a href='#'>
						<Image src={liveVideo} alt='video' />
						Live Video
					</a>
					<a href='#'>
						<Image src={photo} alt='photo' />
						Photo/Video
					</a>
					<a href='#'>
						<Image src={feeling} alt='feeling' />
						Feeling/Activity
					</a>
				</div>
			</div>
		</div>
	)
}

export default WritePost
