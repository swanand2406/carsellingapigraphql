import Head from 'next/head'
import Image from 'next/image'
// import styles from '../../styles/Home.module.css'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function Home() {
  const router = useRouter();
  return (
    <div>
      <center>
        <strong>
          <h1 className="text-6xl bg-blue-400 text-white p-4">Cars Sell Company</h1>
        </strong>
      </center>
      <strong>
        <div>
          <marquee width="100%" scrollamount="12" direction="left" height="90%">
            <div className="text-3xl">One Stop to Buy and Sell the car.</div>
          </marquee>
        </div>
      </strong>
      <div className="my-28">
        <center>
          <a className="cursor-pointer underline text-2xl hover:text-blue-600" onClick={() => router.push('/cars-for-sale')}>
            Click to see the cars for selling
          </a>
        </center>
      </div>

    </div>
  )
}