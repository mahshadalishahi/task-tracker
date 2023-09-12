import Head from 'next/head'
import Navbar from './Navbar'
import { PropsWithChildren } from 'react'

interface PropsType {
  pageTitle?: string
}

const Layout: React.FC<PropsWithChildren<PropsType> > = ({ children, pageTitle }) => (
  <div>
    <Head>
      <title>{`${pageTitle} | Task Tracker`}</title>
    </Head>
    <Navbar/>
    <main className="py-7 px-5 lg:py-11 lg:px-16">{children}</main>
  </div>
)

export default Layout
