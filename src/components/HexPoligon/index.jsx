import React from 'react'
import PropTypes from 'prop-types'
import useGetHexData from './useGetHexData'
import './index.css'
import {getCellList, getRequestUrl} from './hexPoligonUtils'
import CellList from './CellList'
import {RADIUS} from '../../common/constants'

const InitGame = ({requestParams, cellWidthHeight}) => {
	const {isLoading} = useGetHexData(getRequestUrl(requestParams))

	const list = getCellList(requestParams[ RADIUS ], cellWidthHeight)

	return (
		<div className='poligon'> 
			<CellList list={list}/>
			<div className='poligon__status'>
				{/* Game status: {isLoading} */}

				{isLoading}
			</div>
		</div>
	)
}

InitGame.propTypes = {
	requestParams: PropTypes.shape({}).isRequired,
	cellWidthHeight: PropTypes.shape({}).isRequired
}

export default InitGame

