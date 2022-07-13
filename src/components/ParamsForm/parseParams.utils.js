import {possibleKeys} from '../../common/constants'

export const parseParams = (params = []) => params?.reduce((acc, item) => {
	if (!possibleKeys.includes(item.id)) return acc
  
	return {
		...acc,
		[ item.id ]: item.value
	}
}, {}) 

export const getUrlWithParams = (data = {}) => (
	possibleKeys.reduce((acc, item, index) => (
		acc += `${index === 0 ? '' : '&'}${item}=${data[ item ]}`
	), '?')
)

export const parseFormData = (data = []) => data?.reduce((acc, item) => {
	if (!possibleKeys.includes(item.id)) return acc
  
	return {...acc, [ item.id ]: item.value}
}, {})
