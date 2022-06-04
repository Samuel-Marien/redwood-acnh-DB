import { render } from '@redwoodjs/testing/web'

import VillagerThumbnail from './VillagerThumbnail'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('VillagerThumbnail', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<VillagerThumbnail />)
    }).not.toThrow()
  })
})
