import React from 'react'
import Image from 'next/image'
import {
	addFriends,
	member1,
	member2,
	message,
	more,
	profile,
} from '../../../public/images'
import { Members } from '@/app/constants'

const Details = () => {
	return (
		<div className='profile-details'>
			<div className='profile-detail-left'>
				<div className='profile-detail-row'>
					<Image src={profile} alt='profile' className='pd-image' />
					<div>
						<h3>Johnny Wendbley</h3>
						<p>120 Friends - 20 mutuals</p>

						{Members.map((member, index) => (
							<Image key={index} src={member.pict} alt={member.name} />
						))}
					</div>
				</div>
			</div>
			<div className='profile-detail-right'>
				<button type='button'>
					<Image src={addFriends} alt='add-friends' /> Friend
				</button>
				<button type='button'>
					<Image src={message} alt='message' /> Message
				</button>
				<br />
				<a href='#'>
					<Image src={more} alt='more' />
				</a>
			</div>
		</div>
	)
}

export default Details
