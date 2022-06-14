import { render } from '@redwoodjs/testing/web'

import SongThumbnail from './SongThumbnail'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SongThumbnail', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SongThumbnail />)
    }).not.toThrow()
  })
})
