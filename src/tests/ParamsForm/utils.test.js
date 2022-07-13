import {possibleKeys} from '../../common/constants'
import {getUrlWithParams, parseFormData} from '../../components/ParamsForm/parseParams.utils'

describe('ParamsForm utils', () => {
	describe('getUrlWithParams', () => {
		it('should return expexted result', () => {
			const mockData = {
				host: 'someHost',
				port: '90',
				radius: 22
			}

			expect(getUrlWithParams(mockData)).toEqual('?hostname=undefined&radius=22&port=90')
		})
	})

	describe('parseFormData', () => {
		it('should return expexted result', () => {
			const mockData = possibleKeys.map((item) => ({
				id: item,
				value: 'value'
			}))
			const expectedResult = {'hostname': 'value', 'port': 'value', 'radius': 'value'}
    
			expect(parseFormData([...mockData, {id: 'some id', value: 'some val'}])).toEqual(expectedResult)
		})
	})
})