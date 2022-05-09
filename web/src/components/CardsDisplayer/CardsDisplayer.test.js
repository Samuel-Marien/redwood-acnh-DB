import { render } from '@redwoodjs/testing/web'

import CardsDisplayer from './CardsDisplayer'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CardsDisplayer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CardsDisplayer />)
    }).not.toThrow()
  })
})
