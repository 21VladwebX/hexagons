import React, { useState } from 'react'
import InitGame  from '../InitGame'
import { getURLParams } from './app.utils'
import  ParamsForm  from '../ParamsForm'

export const App = () => {
	const [ params, setParams ] = useState({})

	const urlParams = getURLParams()

	const hasParams = !!urlParams.radius

	return (
		<div className='container'>
			{hasParams 
				? (<InitGame params={params} />) 
				: (<ParamsForm setParams={setParams}/>)
			}
		</div>			
	)
}
