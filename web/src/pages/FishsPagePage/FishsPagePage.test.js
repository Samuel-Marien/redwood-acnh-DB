import { render } from '@redwoodjs/testing/web'

import FishsPagePage from './FishsPagePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FishsPagePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FishsPagePage />)
    }).not.toThrow()
  })
})
