import {HOSTNAME, PORT, RADIUS} from '../../common/constants'
import {getCellWidthHeight, getURLParams} from '../../components/App/app.utils'

Object.defineProperty(window, 'location', {
	value: {
		search: `?${HOSTNAME}=google&${PORT}=80&${RADIUS}=2`,
	}
})

describe('App utils', () => {
	describe('getURLParams', () => {
		it('should return expected object', () => {
			expect(getURLParams()).toEqual({
				[ HOSTNAME ]: 'google',
				[ PORT ]: '80',
				[ RADIUS ]: '2'
			})
		})
	})

	describe('getCellWidthHeight', () => {
		it('should return 100', () => {
			expect(getCellWidthHeight({radius: 4})).toEqual(100)
		})
	})
})