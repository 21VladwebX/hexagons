export default (url, data = []) => fetch(url, {
	method: 'POST',
	mode: 'cors',
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
	credentials: 'same-origin',
	body: JSON.stringify(data)
})