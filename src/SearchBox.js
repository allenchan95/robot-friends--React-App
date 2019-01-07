import React from 'react';

const SearchBox = ({searchfield,searchChange}) => {
	return (
			<div className='pa2'>
				<input
				 className='pa3 ba b--green bg-light-blue .shadow-2 o-30 br4'
				 type='search' 
				 placeholder='search robot'
				 onChange={searchChange}
				 />
			 </div>

		);
	
}

export default SearchBox;