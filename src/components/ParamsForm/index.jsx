import React from 'react'
import formConfig from './config'
import Input from './Input'
import './index.css'
import {getUrlWithParams, parseFormData} from '../../common/utils'

const ParamsForm = () => {

	const onFormSubmit = (event) => {
		event.preventDefault()

		window.location.href = getUrlWithParams(parseFormData([...event.target.elements]))
	}

	return (
		<div className='form-wrapper'>	
			<span>Please, provide game config:</span>

			<form action="" onSubmit={ onFormSubmit }>

				{formConfig.map((item) => (
					<div key={ item.id } className='input-wrapper'>
						<label htmlFor="id">
							<Input { ...item } />
						</label>
					</div>	
				))     }
			
				<button className='form-wrapper__button'>Start</button>
			</form>
		</div>
	)
}

export default ParamsForm