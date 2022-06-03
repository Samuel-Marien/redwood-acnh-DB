import { render } from '@redwoodjs/testing/web'

import DataBaseLayout from './DataBaseLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DataBaseLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DataBaseLayout />)
    }).not.toThrow()
  })
})
