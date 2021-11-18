//Cars listing page
import Head from 'next/head'
import Image from 'next/image'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import Link from 'next/link'

export default function Home({ sell }) {
  return (
    <div>
      <Head>
        <title>Car Sell Company</title>
      </Head>

      <main >
        <center>
          <h1 className="text-4xl font-bold">Cars Listing</h1>

          <div className="rounded  shadow-lg border-8  p-2 gap-x-8  grid grid-cols-2 ">
            {/* mapping function for data props data */}
            {sell.map((data, index) => {
              return (
                <div key={index} className="my-4 border-2 p-4 transition duration-500 ease-in-out bg-white-600 hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110    border-gray-500">
                  <Link href={'/cars-for-sale/car/' + data.vehicle_key} key={data.vehicle_key} passHref>
                    <div >
                      <img src={data.main_image} alt="carImage" style={{ width: "24rem" }} />
                      <h3><b>  {data.year} {data.make} {data.model} </b></h3>
                      <p>${data.price_drive_away}</p>
                      <ul className="grid grid-cols-2 " style={{ listStyle: "inside" }}>
                        <li>
                          {data.transmission}
                        </li>
                        <li >
                          <b>odometer:</b> {data.odometer}
                        </li>
                        <li>
                          <b>Color:</b>{data.colour}
                        </li>
                        <li>
                          <b>Seat Capacity: </b>{data.seat_capacity}
                        </li>
                      </ul>
                    </div>
                  </Link>
                </div>
              )
            })}

          </div>
        </center>
      </main>
    </div>
  )
}

export const getServerSideProps = async pageContext => {
  //appollo client instance
  const client = new ApolloClient({

    uri: 'https://dev-carsforsale.drivemustang.com.au/graphql',   //uri for playground
    cache: new InMemoryCache()
  })
  //query for fetching data
  const { data } = await client.query({
    query: gql`{
      DealerListings {
        results {
          year
          main_image
          make
          model
          price_drive_away
          vehicle_key
          odometer
          transmission
          colour
          seat_capacity
          location_state
        }
      }
    }`
  })
  //passing props
  return {
    props: {
      sell: data.DealerListings.results
    }
  }
}
