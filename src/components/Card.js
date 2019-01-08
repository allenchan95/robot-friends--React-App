import React from 'react';

const Card = ({name,email,id}) =>{
	const onItemClick = (event) => {
		event.target.parentNode.parentNode.style.display='none';
 	}

	return(
		<div className='tc bg-lightest-blue dib br4 pa3 ma3 grow bw2 shawdow-3'>
			<img alt='robots' src={`https://robohash.org/${id}`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
				<a className="f6 link dim ba ph3 pv2 mb2 dib mid-gray" href="#0"  onClick={onItemClick} >
				Hide</a>
			</div>
		</div>
	);
}

export default Card;