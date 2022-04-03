import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import FCFS from '../components/FCFS'
import SJF from '../components/SJF'

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Operating System Lab 1 & 2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="layout">
        <h2 className="mb-5 font-bold">Lab 1 & 2</h2>
        <h3 className="mb-3 font-bold text-blue-500">
          <span className="mr-3 text-blue-700">1.1</span> Objective
        </h3>
        <h5 className="text-justify">
          Write a program to simulate the following non-preemptive CPU
          scheduling algorithms to find turnaround time and waiting time for the
          above problem.
        </h5>
        <h3 className="mt-5 mb-3 font-bold text-blue-500">
          <span className="mr-3 text-blue-700">1.2</span> Description
        </h3>
        <h5 className="text-justify">
          Assume all the processes arrive at the same time.
        </h5>
        <div className="mb-10"></div>
        <FCFS />
        <div className="mb-10"></div>
        <SJF />
      </div>
    </div>
  )
}

export default Home
