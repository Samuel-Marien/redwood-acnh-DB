import { render } from '@redwoodjs/testing/web'

import SongDetails from './SongDetails'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SongDetails', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SongDetails />)
    }).not.toThrow()
  })
})
