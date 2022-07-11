import {useEffect, useState} from 'react'
import {getRequestUrl} from './hexPoligonUtils.js'
import postHexData from './postHexData.js'

export default  (requestData) => {
	const [{data, isLoading, error}, setState] = useState({data: {}})

	useEffect(() => {
		setState({
			data: {},
			isLoading: true,
			error: ''
		})

		postHexData(getRequestUrl(requestData))
			.then((data) => {
				console.log(data)
			})
			.catch(() => setState({
				data: {},
				isLoading: false,
				error: 'network-issues'
			}))

	}, [requestData])

	return {data, isLoading, error}
}