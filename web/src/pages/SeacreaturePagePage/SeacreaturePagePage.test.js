import { render } from '@redwoodjs/testing/web'

import SeacreaturePagePage from './SeacreaturePagePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SeacreaturePagePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SeacreaturePagePage />)
    }).not.toThrow()
  })
})
