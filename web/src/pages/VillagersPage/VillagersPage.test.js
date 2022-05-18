import { render } from '@redwoodjs/testing/web'

import VillagersPage from './VillagersPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('VillagersPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<VillagersPage />)
    }).not.toThrow()
  })
})
