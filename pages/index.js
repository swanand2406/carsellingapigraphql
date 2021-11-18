//Landing Page
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col h-screen justify-between">
      <center>
        <strong>
          <h1 className="text-6xl bg-blue-400 text-white p-4">Cars Sell Company</h1>
        </strong>
      </center>
      <strong>
        <div>
          <marquee width="100%" scrollamount="12" direction="left" height="90%">
            <div className="text-3xl text-purple-600">One Stop to Buy and Sell the car.</div>
          </marquee>
        </div>
      </strong>
      <div className="my-2">
        <center>
          <a className="cursor-pointer underline text-2xl hover:text-blue-600" onClick={() => router.push('/cars-for-sale')}>
            Click to see the cars for selling
          </a>
        </center>
      </div>
      <footer className="h-10 ">
        <center>
          Copyright 2021 News Broadcast
        </center>
      </footer>
    </div >
  )
}