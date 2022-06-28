import { render } from '@redwoodjs/testing/web'

import CardDetailsLayout from './CardDetailsLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CardDetailsLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CardDetailsLayout />)
    }).not.toThrow()
  })
})
