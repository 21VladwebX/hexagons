import React from 'react'
import PropTypes from 'prop-types'
import CellItem from '../CellItem/CellItem'
import './index.css'

const CellList = ({list}) => {

	return (
		<div className='cell__list'>
			CellList
			{list?.map((item) => (
				<CellItem 
					key={item.x - item.z + item.y}
					style={item.style}
					data-x={item.x}
					data-y={item.y}
					data-z={item.z}
					data-value={item.value}
					value={item.value}
				/>
			))}
		</div> 
	)
}

CellList.propTypes = {
	list: PropTypes.arrayOf(PropTypes.shape({}))
}

export default CellList