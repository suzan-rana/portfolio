import Layout from '@/components/Layout'
import React from 'react'

const BlogPage = () => {
  return (
    <div>BlogPage</div>
  )
}

export default BlogPage

BlogPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      <>{page}</>
    </Layout>
  )
}