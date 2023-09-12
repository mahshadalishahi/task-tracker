import Navbar from 'components/Navbar'
import { NextPage } from 'next'
import Head from 'next/head'
import Provider from 'context/provider'
import Tasks from 'components/Tasks'

const Home: NextPage = () => (
    <Provider>
      <Head>
        <title>Task tracker</title>
      </Head>
      <Navbar />
      <main>
        <div className="relative">
          <div className="absolute w-full -top-14 md:-top-6 lg:-top-16">
            <div className="grid grid-cols-2 mb-5 mx-16 mt-20 divide-x">
              <div>
                <h3 className="text-base text-neutral-900 text-center font-bold mb-6">
                  Incomplete
                </h3>
                <Tasks status='incomplete'/>
              </div>
              <div>
                <h3 className="text-base text-neutral-900 text-center font-bold mb-6">
                  Completed
                </h3>
                <Tasks status='completed'/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Provider>
  )

 

export default Home
