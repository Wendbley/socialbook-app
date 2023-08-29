'use client'

import Image, { StaticImageData } from 'next/image'
import React from 'react'
import parse from 'html-react-parser'
import {FaEllipsisVertical} from 'react-icons/fa6'
import PostRow from './PostRow'
import './../index.css'

interface PostContainerProps {
	profile: StaticImageData
	name: string
	date: string
	pict: StaticImageData
	feed: StaticImageData
	text: string
}

const PostContainer = ({
	name,
	profile,
	date,
	pict,
	feed,
	text,
}: PostContainerProps) => {
	return (
		<div className='post-container'>
			<div className='post-row'>
				<div className='user-profile'>
					<Image src={profile} alt='profile' className='img' />
					<div className='info'>
						<p>{name}</p>
						<span>{date}</span>
					</div>
				</div>
				<a href='#'>
                    <FaEllipsisVertical />
                    </a>
			</div>

			<p className='post-text'>
				{parse(text)}{' '}
				<a href='#'>#subscribe</a>
			</p>
			<Image src={feed} alt='feed' className='post-img' />

			<PostRow />
		</div>
	)
}

export default PostContainer
