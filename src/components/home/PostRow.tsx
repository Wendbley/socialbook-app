import React from 'react'
import Image from 'next/image'
import { AiOutlineCaretDown } from 'react-icons/ai'
import './../index.css'
import { comments, like, profile, share } from '../../../public/images'

/**
 * 
 * @returns 
 */
const PostRow = () => {
	return (
		<div className='post-row'>
			<div className='activity-icons'>
				<div>
					<Image src={like} alt='like-blue' />
					120
				</div>
				<div>
					<Image src={comments} alt='comments' />
					45
				</div>
				<div>
					<Image src={share} alt='share' />
					25
				</div>
			</div>
			<div className='post-profile-icon'>
				<Image src={profile} alt='' />
                <AiOutlineCaretDown />
				{/* <i className='fas fa-caret-down'></i> */}
			</div>
		</div>
	)
}

export default PostRow
