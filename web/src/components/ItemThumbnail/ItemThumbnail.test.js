import { render } from '@redwoodjs/testing/web'

import HousewareThumbnail from './ItemThumbnail'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HousewareThumbnail', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HousewareThumbnail />)
    }).not.toThrow()
  })
})
