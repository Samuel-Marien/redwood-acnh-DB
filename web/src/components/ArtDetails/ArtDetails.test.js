import { render } from '@redwoodjs/testing/web'

import ArtDetails from './ArtDetails'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ArtDetails', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ArtDetails />)
    }).not.toThrow()
  })
})
