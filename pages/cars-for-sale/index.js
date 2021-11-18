import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import Link from 'next/link'


export default function Home({ sell }) {
  console.log("Sell", sell)

  return (
    <div className={styles.container}>

      <main className={styles.main}>

        <div className={styles.grid}>
          {sell.map(data => {
            return (
              <Link href={'/cars-for-sale/car/' + data.vehicle_key} key={data.vehicle_key} passHref>
                <div className={styles.card}>
                  <img src={data.main_image} alt="carImage" style={{ width: "16rem" }} />
                  <h3>{data.year} {data.make} {data.model}</h3>
                  <p>{data.price_drive_away}</p>
                  <ul>
                    <li>
                      {data.transmission}
                    </li>
                    <li>
                      {data.odometer}
                    </li>
                    <li>
                      {data.colour}
                    </li>
                    <li>
                      {data.seat_capacity}
                    </li>
                  </ul>
                </div>
              </Link>
            )
          })}
        </div>
      </main>
    </div>
  )
}


export const getServerSideProps =  async pageContext =>  {

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
