import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const CellItem = ({value, ...rest}) => {
	console.log(value)

	return (<div className='cell' {...rest} >{value}</div>)
}

CellItem.propTypes = {
	value: PropTypes.number
}

export default CellItem