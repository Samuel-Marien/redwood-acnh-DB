import { render } from '@redwoodjs/testing/web'

import HousewarePage from './HousewarePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HousewarePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HousewarePage />)
    }).not.toThrow()
  })
})
