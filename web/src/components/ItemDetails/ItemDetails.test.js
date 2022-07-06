import { render } from '@redwoodjs/testing/web'

import ItemDetails from './ItemDetails'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ItemDetails', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ItemDetails />)
    }).not.toThrow()
  })
})
