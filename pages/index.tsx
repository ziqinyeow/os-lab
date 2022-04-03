import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>Operating System Lab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="layout">
        <h2 className="mb-2">Operating System OCC 2 Group C</h2>
        <h4 className="mb-10">Lecturer: Dr. Emran Bin Mohd Tamil</h4>
        <div className="grid w-full grid-cols-12 group">
          <div className="font-bold group-hover:underline">1.</div>
          <div className="col-span-10">
            <Link href="/lab_1&2">
              <a className="font-bold group-hover:underline">Lab 1 & 2</a>
            </Link>
          </div>
          <div className="group-hover:underline">
            <button
              onClick={() => {
                router.push('/lab_1&2')
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M21 15l-6 5.996L4.002 21A.998.998 0 0 1 3 20.007V3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.456.993 1.002V15zM19 5H5v14h8v-5a1 1 0 0 1 .883-.993L14 13l5-.001V5zm-.829 9.999L15 15v3.169l3.171-3.17z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
