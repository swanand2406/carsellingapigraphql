import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import Link from 'next/link'

export default function Home({ sell }) {
  console.log("Sell", sell)
  return (
<div>
  <h1>Hey</h1>
    </div>
  )
}

export async function getStaticProps() {

  const client = new ApolloClient({

    uri: 'https://dev-carsforsale.drivemustang.com.au/graphql',
    cache: new InMemoryCache()
  })

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
  console.log(data);
  return {
    props: {
      sell: data.DealerListings.results
    }
  }
}
