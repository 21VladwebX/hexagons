import PropTypes from 'prop-types'
import React from 'react'
import formConfig from './config'
import Input from './Input'
import { parseParams } from './parseParams'
import './index.css'

const ParamsForm = ({ setParams }) => {
	const onFormSubmit = (event) => {
		event.preventDefault()

		setParams(parseParams([ ...event.target.elements ]))
	}

	return (
		<div className='form-wrapper'>	
			<span>Please, provide game config:</span>

			<form action="" onSubmit={onFormSubmit}>

				{formConfig.map((item) => (
					<div key={item.id} className='input-wrapper'>
						<label htmlFor="id">
							<Input {...item} />
						</label>
					</div>	
				))}
			
				<button className='form-wrapper__button'>Start</button>
			</form>
		</div>
	)
}

ParamsForm.propTypes = {
	setParams: PropTypes.func.isRequired
}

export default ParamsForm