import {defaultPort, HOSTNAME, PORT, RADIUS} from '../../common/constants'
import {getRequestUrl} from '../../components/HexPoligon/hexPoligonUtils'

describe('HexPoligon utils', () => {
	describe('getRequestUrl', () => {
		const mockData = {
			[ PORT ]: [defaultPort],
			[ RADIUS ]: 2,
			[ HOSTNAME ]: 'someHost'
		}

		it('should return expected url with default port', () => {
			const expectedUrl =  `https:/${mockData[ HOSTNAME ]}:${mockData[ PORT ]}/${mockData[ RADIUS ]}`

			expect(getRequestUrl(mockData)).toEqual(expectedUrl)
		})

		it('should return expected url with passed port', () => {
			const mockPort = 10
			const expectedUrl =  `https:/${mockData[ HOSTNAME ]}:${mockPort}/${mockData[ RADIUS ]}`
      
			expect(getRequestUrl({...mockData, [ PORT ]: mockPort})).toEqual(expectedUrl)
		})
	})
})