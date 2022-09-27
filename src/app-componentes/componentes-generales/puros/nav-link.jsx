import React from 'react';

const NavLink = ({texto, section}) => {
	return (
		<>
			<a href={ section } className='text-zinc-200 font-bold capitalize'>{ texto }</a>			
		</>
	);
}

export default NavLink;
