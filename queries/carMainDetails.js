import { gql } from "@apollo/client"

const CAR_MAIN_DETAILS = gql`{
  query carMainDetails($id: String!){
    DealerListings(id: $id){
      results{
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
  }
  }`

export default CAR_MAIN_DETAILS;