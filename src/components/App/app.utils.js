const HOSTNAME = 'hostname'
const RADIUS = 'radius'
const PORT = 'port'

const possibleKeys = [ HOSTNAME, RADIUS, PORT ]

export const getURLParams = () => {
	const params = new URLSearchParams(window.location.search) 

	return possibleKeys.reduce((acc, key)=>({
		...acc,
		[ key ]: params.has(key) ? params.get(key) : null 
	}
	), {})
}