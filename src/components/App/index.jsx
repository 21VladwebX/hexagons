import React from 'react'
import InitGame  from '../HexPoligon'
import {getCellWidthHeight, getURLParams} from './app.utils'
import  ParamsForm  from '../ParamsForm'

export const App = () => {
	const urlParams = getURLParams()

	const hasParams = !!urlParams?.radius
	const cellWidthHeight = hasParams ? getCellWidthHeight(urlParams) : {}
	
	return (
		<div className='container'>
			{hasParams 
				? (<InitGame requestParams={urlParams} cellWidthHeight={cellWidthHeight}/>) 
				: (<ParamsForm />)
			}
		</div>			
	)
}
