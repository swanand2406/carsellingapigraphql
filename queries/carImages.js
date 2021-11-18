//Car image graphql query
import { gql } from "@apollo/client"

const CAR_IMAGES = gql`
  query carImages($id: String!){  
    DealerListings( 
        where:  $id 
      ) { 
        results { 
          DealerListingImages { 
            image_location 
          } 
        } 
    } 
    }`;

export default CAR_IMAGES;