import { render } from '@redwoodjs/testing/web'

import SeaCreaturesPage from './SeaCreaturesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SeaCreaturesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SeaCreaturesPage />)
    }).not.toThrow()
  })
})
