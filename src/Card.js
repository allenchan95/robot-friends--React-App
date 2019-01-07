import React from 'react';

const Card = ({name,email,id}) =>{
	return(
		<div className='tc bg-lightest-blue dib br4 pa3 ma2 grow bw2 shawdow-3'>
			<img alt='robots' src={`https://robohash.org/${id}`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;