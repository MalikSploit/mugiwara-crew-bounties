import React from 'react';
import Card from './Card';

const CardList = ({ member }) =>
{
	return (
			<div> 
			{
			    member.map((user, i) =>
				{
					return ( 
							<Card 
								key={i}  
								id={member[i].id}
								name={member[i].name}
								bounty={member[i].bounty}
							/>
					);
				})
			}
	    	</div>
	);
}

export default CardList;