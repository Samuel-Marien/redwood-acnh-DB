import { render } from '@redwoodjs/testing/web'

import PapersPage from './PapersPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PapersPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PapersPage />)
    }).not.toThrow()
  })
})
