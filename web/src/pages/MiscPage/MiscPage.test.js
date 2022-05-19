import { render } from '@redwoodjs/testing/web'

import MiscPage from './MiscPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MiscPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MiscPage />)
    }).not.toThrow()
  })
})
