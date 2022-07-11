import {defaultPort} from '../../common/constants'

export default [{
	id: 'port',
	label: 'Port',
	inputProps: {
		type: 'text',
		value: defaultPort
	},
	examples: [
		'80',
		'1231'
	]
}, {
	id: 'hostname',
	label: 'Hostname',
	inputProps: {
		type: 'text',
		value: 'hex-2048.octa.wtf'
	},
	examples: [
		'hex-2048.octa.wtf',
		'localhost'
	]
}, {
	id: 'radius',
	label: 'Radius',
	inputProps: {
		type: 'range',
		min: 2,
		max: 6,
		value: 2
	}
}]