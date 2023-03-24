import type { ReactElement } from 'react'
import Link from 'next/link'
import type { NextPageWithLayout } from "./_app"
import Layout from "../components/Layout"
 
const SecondPage: NextPageWithLayout = () => {
  return <Link href="/layout-style-1">Go to first layout</Link>
}

SecondPage.getLayout = function getLayout(page: ReactElement) {
  return(
    <Layout>
      <div>Another element</div>
      {page}
    </Layout>
  )
}
export default SecondPage