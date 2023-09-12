import Layout from 'components/Layout'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const NotFound: NextPage = () => {
  const router = useRouter()
   return (
    <Layout pageTitle="404-Not Found">
         <p className="text-base font-bold mb-3 lg:mb-6 lg:text-xl">
          404| Not Found
        </p>
    </Layout>
  )
}

export default NotFound
