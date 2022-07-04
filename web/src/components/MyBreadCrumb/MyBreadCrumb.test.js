import { render } from '@redwoodjs/testing/web'

import MyBreadCrumb from './MyBreadCrumb'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MyBreadCrumb', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyBreadCrumb />)
    }).not.toThrow()
  })
})
