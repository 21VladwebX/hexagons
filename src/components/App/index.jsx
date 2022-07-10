import React from 'react'
import InitGame  from '../InitGame'
import {getURLParams} from './app.utils'
import  ParamsForm  from '../ParamsForm'

export const App = () => {
	const urlParams = getURLParams()

	const hasParams = !!urlParams.radius
	
	return (
		<div className='container'>
			{hasParams 
				? (<InitGame params={urlParams} />) 
				: (<ParamsForm />)
			}
		</div>			
	)
}
