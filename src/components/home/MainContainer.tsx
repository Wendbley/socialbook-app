'use client'

import React from 'react'
import Image from 'next/image'
import {
	member1,
	member2,
	member3,
	member5,
	profile,
	status1,
	status2,
	status3,
	status4,
	status5,
	upload,
} from '../../../public/images'
import { Posts } from '@/app/constants'
import WritePost from './WritePost'
import PostContainer from './PostContainer'
import './../index.css'

const MainContainder = () => {
	return (
		<div className='main-content'>
			{/* <!-- Gallery --> */}
			<div className='story-gallery'>
				<div className='story story1'>
					<Image src={upload} alt='upload' className='img' />
					<p>Post Story</p>
				</div>

				<div className='story story2'>
					<Image src={member1} alt='member-1' className='img' />
					<p>Maggie</p>
				</div>
				<div className='story story3'>
					<Image src={member2} alt='member-2' className='img' />
					<p>Alison</p>
				</div>
				<div className='story story4'>
					<Image src={member3} alt='member-3' className='img' />
					<p>Pelagie</p>
				</div>
				<div className='story story5'>
					<Image src={member5} alt='member-4' className='img' />
					<p>Giresse</p>
				</div>
			</div>

			<WritePost />

			{Posts.map((post, index) => {
				return <PostContainer key={index} {...post} />
			})}

			<button type='button' className='load-more-btn'>
				Load More
			</button>
		</div>
	)
}

export default MainContainder
