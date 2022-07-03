import { render } from '@redwoodjs/testing/web'

import VillagerDetails from './VillagerDetails'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('VillagerDetails', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<VillagerDetails />)
    }).not.toThrow()
  })
})
