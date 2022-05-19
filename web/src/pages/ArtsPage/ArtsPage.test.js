import { render } from '@redwoodjs/testing/web'

import ArtsPage from './ArtsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ArtsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ArtsPage />)
    }).not.toThrow()
  })
})
