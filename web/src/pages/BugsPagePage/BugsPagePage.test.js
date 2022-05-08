import { render } from '@redwoodjs/testing/web'

import BugsPagePage from './BugsPagePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BugsPagePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BugsPagePage />)
    }).not.toThrow()
  })
})
