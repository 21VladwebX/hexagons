import {defaultPort, HOSTNAME, PORT, RADIUS} from '../../common/constants'

export const getRequestUrl = (data = {}) => (
	`https:/${data[ HOSTNAME ]}:${+data[ PORT ] === defaultPort ? '' : data[ PORT ]}/${data[ RADIUS ]}`
)