import { render } from '@redwoodjs/testing/web'

import Details from './Details'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Details', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Details />)
    }).not.toThrow()
  })
})
