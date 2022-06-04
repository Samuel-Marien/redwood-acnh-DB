import { render } from '@redwoodjs/testing/web'

import ArtThumbnail from './ArtThumbnail'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ArtThumbnail', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ArtThumbnail />)
    }).not.toThrow()
  })
})
