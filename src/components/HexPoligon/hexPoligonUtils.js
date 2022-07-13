import {defaultPort, HOSTNAME, PORT, RADIUS} from '../../common/constants'

export const getRequestUrl = (data = {}) => (
	`https:/${data[ HOSTNAME ]}:${+data[ PORT ] === defaultPort ? '' : data[ PORT ]}/${data[ RADIUS ]}`
)

export const getCellList = (radius = 0) => {
	console.log(radius)
	
	//todo Vlad implement logic for cell coordinates and
	return []
}