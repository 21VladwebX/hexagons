import React, {useState} from 'react'
import PropTypes from 'prop-types'

const Input = ({label, inputProps, id, examples}) => {
	const [inputValue, setInputValue] = useState(inputProps?.value || undefined)

	const onHintClick = (value) => () => {
		setInputValue(value)
	}

	const onInputChange = ({target}) => {
		setInputValue(target.value)
	}

	const isNotTextType = inputProps.type !== 'text'

	return (
		<>
			<span>{label} {isNotTextType && inputValue}</span>
			<input {...inputProps} id={id} value={inputValue} onChange={onInputChange} />
			
			{!!examples?.length && (
				<i className='input-wrapper__hint'>
        Example:
					{examples.map((item, index) => (
						<p key={item} onClick={onHintClick(item)}> {item}{index !== (examples?.length -1) && ','}</p>
					))}
				</i>
			)}
		</>
	)
}

Input.propTypes = {
	label: PropTypes.string,
	inputProps: PropTypes.shape({
		value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		type: PropTypes.string
	}),
	id: PropTypes.string.isRequired,
	examples: PropTypes.array
}

export default Input