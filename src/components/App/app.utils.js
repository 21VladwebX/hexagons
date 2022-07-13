import {CONTAINER_WIDTH, possibleKeys} from '../../common/constants'

export const getURLParams = () => {
	const params = new URLSearchParams(window.location.search) 

	return possibleKeys.reduce((acc, key) => ({
		...acc,
		[ key ]: params.has(key) ? params.get(key) : null 
	}), {})
}

export const getCellWidthHeight = ({radius}) => {
	const cellInRow = +radius + 1	

	return CONTAINER_WIDTH / cellInRow
}