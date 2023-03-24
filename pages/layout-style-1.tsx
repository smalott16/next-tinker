import type { ReactElement } from 'react'
import Link from 'next/link'
import type { NextPageWithLayout } from "./_app"
import Layout from "../components/Layout"
 
const FirstPage: NextPageWithLayout = () => {
  return <Link href="/layout-style-2">Go to second layout</Link>
}

FirstPage.getLayout = function getLayout(page: ReactElement) {
  return(
    <Layout>
      {page}
    </Layout>
  )
}
export default FirstPage