import React from 'react'
import PropTypes from 'prop-types'
import useGetHexData from './useGetHexData'
import './index.css'

const InitGame = ({params}) => {
//take params from props
	const {isLoading} = useGetHexData(params)

	return (
		<div className='poligon'> InitGame 
	
			<div className='poligon__status'>
				Game status: {isLoading}
			</div>
		</div>
	)
}

InitGame.propTypes = {
	params: PropTypes.shape({}).isRequired
}
export default InitGame

