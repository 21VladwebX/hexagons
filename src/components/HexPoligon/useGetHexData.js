import {useEffect, useState} from 'react'
import postHexData from './postHexData.js'

export default (url) => {
	const [{data, isLoading, error}, setState] = useState({data: []})

	useEffect(() => {
		setState({
			data: {},
			isLoading: true,
			error: ''
		})
 
		postHexData(url)
			.then((response) => (
				response.json()
			))
			.then(response => {
				setState({
					data: response,
					isLoading: true,
					error: ''
				})
			})
			.catch(() => setState({
				data: {},
				isLoading: false,
				error: 'network-issues'
			}))

	}, [url])

	return {data, isLoading, error}
}