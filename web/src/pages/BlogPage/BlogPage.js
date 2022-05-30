import { MetaTags } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell'

const BlogPage = () => {
  return (
    <>
      <MetaTags title="Blog" description="Blog page" />

      <h1>BlogPage</h1>
      <ArticlesCell />
    </>
  )
}

export default BlogPage
