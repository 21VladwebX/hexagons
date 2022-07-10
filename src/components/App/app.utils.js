import {possibleKeys} from '../../common/constants'

export const getURLParams = () => {
	const params = new URLSearchParams(window.location.search) 

	return possibleKeys.reduce((acc, key) => ({
		...acc,
		[ key ]: params.has(key) ? params.get(key) : null 
	}), {})
}