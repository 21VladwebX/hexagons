import { possibleKeys } from '../../common/constants'

export const parseParams = (params = []) => params?.reduce((acc, item)=>{
	if(!possibleKeys.includes(item.id)) return acc
  
	return {
		...acc,
		[ item.id ]: item.value
	}
}, {}) 