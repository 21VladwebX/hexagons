import {possibleKeys} from './constants'

export const parseFormData = (data = {}) => data?.reduce((acc, item) => {
	if (!possibleKeys.includes(item.id)) return acc
  
	return {...acc, [ item.id ]: item.value}
}, {})

export const getUrlWithParams = (data = {}) => {

	return possibleKeys.reduce((acc, item, index) => (
		acc += `${index === 0 ? '' : '&'}${item}=${data[ item ]}`
	), '?')
}