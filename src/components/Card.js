import React from 'react';

const Card = ({name, bounty, id}) =>
{
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='' src={`https://raw.githubusercontent.com/MalikSploit/mugiwara-crew-bounties/master/images/${id}.jpg?`}/>
			<div>
				<h2>{name}</h2>
				<p>{bounty}</p>
			</div>
		</div>
	);
}

export default Card;