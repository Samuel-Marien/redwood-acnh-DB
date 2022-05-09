import { render } from '@redwoodjs/testing/web'

import DetailsPage from './DetailsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DetailsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DetailsPage />)
    }).not.toThrow()
  })
})
