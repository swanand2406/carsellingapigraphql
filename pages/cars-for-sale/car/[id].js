//Cars details Page
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import CAR_DETAILS from "../../../queries/carDetails"
import CAR_IMAGES from "../../../queries/carImages"
import Head from "next/head"
import Slider from "react-slick";

export const getServerSideProps = async (pageContext) => {
  const id = pageContext.params.id;       //id=>fetching vehicle key 
  //appollo client instance
  const client = new ApolloClient({
    uri: "https://dev-carsforsale.drivemustang.com.au/graphql",         //uri for playground
    cache: new InMemoryCache(),
  });
  //fetching car details from 'queries/CAR_DETAILS' component 
  const { data } = await client.query({
    query: CAR_DETAILS,
    variables: { id },

  });

  const { data: data2 } = await client.query({
    query: CAR_IMAGES,
    variables: { id: JSON.stringify({ vehicle_key: id }) },
  });

  return {
    props: {
      Sell: data.RedbookVehicle,
      Model: data.RedbookVehicle.RedbookFamily.model,
      Make: data.RedbookVehicle.RedbookMake.make,
      ImagesData: data2.DealerListings.results[0].DealerListingImages,
      id,
    },
  };
};

const Details = ({ Sell, Model, Make, id, ImagesData }) => {
  const settings = {
    className: "center",
    bool: true,
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 1,
    speed: 500
  };

  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <Head>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>

      <div className="w-3/4" style={{ marginLeft: 200 }}>
        <Slider {...settings}>
          {
            ImagesData.map((image, key) => (
              <div key={key}>
                <img className="flex items-center justify-center my-5" src={image.image_location} alt="" />
              </div>
            ))
          }
        </Slider>
      </div>

      <div className="flex flex-row flex-wrap content-start justify-around items-start">

        <div id="whoobe-3fery" className="transition duration-500 ease-in-out bg-white-600 hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110 my-9 w-full md:w-80 justify-center items-center bg-white shadow-lg rounded-lg flex flex-row">
          <div id="whoobe-1okdg" className="w-full p-4 justify-start flex flex-col">
            <h4 className="border-b-4 text-3xl" id="whoobe-3mr7n"><strong>{Sell.year} {Make} {Model}</strong></h4>
            <p className="my-4"><strong>Doors & Seats - </strong>{Sell.door} Doors {Sell.seat} Seats</p>
            <p className="my-4"><strong>Fuel Type - </strong>{Sell.fuelType}</p>
            <p className="my-4" id="whoobe-950fw"></p>
          </div>
        </div>

        <div id="whoobe-3fery" className="transition duration-500 ease-in-out bg-white-600 hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110 my-9 w-full md:w-80 justify-center items-center bg-white shadow-lg rounded-lg flex flex-row">
          <div id="whoobe-1okdg" className="w-full p-4 justify-start flex flex-col">
            <h4 className="border-b-4 text-3xl" id="whoobe-3mr7n"><strong>Fuel & Envirnoment</strong></h4>
            <p className="my-4"><strong>Fuel Type - </strong>{Sell.fuelType}</p>
            <p className="my-4"><strong>RON Rating - </strong>{Sell.ronRating}</p>
            <p className="my-4"><strong>Max Ethanol Blend - </strong>{Sell.ethanolBlend}-</p>
            <p className="my-4"><strong>Fuel Capacity - </strong>{Sell.fuel_capacity}</p>
            <p className="my-4"><strong>Fuel Combined - </strong>{Sell.fuelCombined}</p>
            <p className="my-4"><strong>Fuel Urban - </strong>{Sell.fuelUrban}</p>
            <p className="my-4"><strong>Extra Urban - </strong>{Sell.fuelExtraUrban}</p>
            <p className="my-4"><strong>C02 Combined - </strong>{Sell.COCombined}</p>
            <p className="my-4"><strong>Emission Standard - </strong>{Sell.emissionStd}</p>
            <p className="my-4" id="whoobe-950fw"></p>
          </div>
        </div>

        <div id="whoobe-3fery" className="transition duration-500 ease-in-out bg-white-600 hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110 my-9 w-full md:w-80 justify-center items-center bg-white shadow-lg rounded-lg flex flex-row">
          <div id="whoobe-1okdg" className="w-full p-4 justify-start flex flex-col">
            <h4 className="border-b-4 text-3xl" id="whoobe-3mr7n"><strong>Engine & Performance</strong></h4>
            <p className="my-4"><strong>Engine Size- </strong>{Sell.engineSize}</p>
            <p className="my-4"><strong>Induction - </strong>{Sell.induction}</p>
            <p className="my-4"><strong>Cylinders - </strong>{Sell.cylinders}</p>
            <p className="my-4"><strong>Engine Configuration - </strong>{Sell.engineConfiguration}</p>
            <p className="my-4"><strong>Power - </strong>{Sell.powerKW} kW {Sell.powerRPM} rpm</p>
            <p className="my-4"><strong>Torque - </strong>{Sell.torqueKW} kW {Sell.torqueRPM} rpm</p>
            <p className="my-4" id="whoobe-950fw"></p>
          </div>
        </div>

        <div id="whoobe-3fery" className="transition duration-500 ease-in-out bg-white-600 hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110 my-9 w-full md:w-80 justify-center items-center bg-white shadow-lg rounded-lg flex flex-row">
          <div id="whoobe-1okdg" className="w-full p-4 justify-start flex flex-col">
            <h4 className="border-b-4 text-3xl" id="whoobe-3mr7n"><strong>Ownership & Safety</strong></h4>
            <p className="my-4"><strong>ANCP Rating - </strong>{Sell.ancpRating}/5 ({Sell.ancpYear})</p>
            <p className="my-4"><strong>Doors - </strong>{Sell.door}</p>
            <p className="my-4"><strong>Seats - </strong>{Sell.seat}</p>
            <p className="my-4"><strong>Payload - </strong>{Sell.payload}</p>
            <p className="my-4"><strong>Towing - </strong>{Sell.towing}</p>
            <p className="my-4"><strong>Towing - </strong>{Sell.towingNo}</p>
            <p className="my-4"><strong>Warranty - </strong>{Sell.warrenty} Years</p>
            <p className="my-4"><strong>Roadside Assist - </strong>{Sell.roadSideAssist}</p>
            <p className="my-4"><strong>First Service - </strong>{Sell.firstServiceKM} km {Sell.firstServiceMonths} months</p>
            <p className="my-4"><strong>Regular Service - </strong>{Sell.firstServiceKM} km {Sell.firstServiceMonths} months</p>
            <p className="my-4"><strong>Torque - </strong>{Sell.torqueKW} kW {Sell.torqueRPM} rpm</p>
            <p className="my-4" id="whoobe-950fw"></p>
          </div>
        </div>

        <div id="whoobe-3fery" className="transition duration-500 ease-in-out bg-white-600 hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110 my-9 w-full md:w-80 justify-center items-center bg-white shadow-lg rounded-lg flex flex-row">
          <div id="whoobe-1okdg" className="w-full p-4 justify-start flex flex-col">
            <h4 className="border-b-4 text-3xl" id="whoobe-3mr7n"><strong>Transmission</strong></h4>
            <p className="my-4"><strong>Drive Type - </strong>{Sell.driveType}</p>
            <p className="my-4"><strong>Number of Gears - </strong>{Sell.gearNum}</p>
            <p className="my-4"><strong>Transmission - </strong>{Sell.gearTypeDescription}</p>
            <p className="my-4"><strong>Gear Location - </strong>{Sell.gearLocationDescription}</p>
            <p className="my-4" id="whoobe-950fw"></p>
          </div>
        </div>

        <div id="whoobe-3fery" className="transition duration-500 ease-in-out bg-white-600 hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110 my-9 w-full md:w-80 justify-center items-center bg-white shadow-lg rounded-lg flex flex-row">
          <div id="whoobe-1okdg" className="w-full p-4 justify-start flex flex-col">
            <h4 className="border-b-4 text-3xl" id="whoobe-3mr7n"><strong>Dimensions</strong></h4>
            <p className="my-4"><strong>Manufacturer Wheel Base Style- </strong>{Sell.manufacturerWheelBaseConfig}</p>
            <p className="my-4"><strong>Wheel Base Style - </strong>{Sell.wheelBaseConfig}</p>
            <p className="my-4"><strong>Wheel Base - </strong>{Sell.wheelBase}</p>
            <p className="my-4"><strong>Roofline - </strong>{Sell.vehicle_roofline}</p>
            <p className="my-4"><strong>Length   - </strong>{Sell.vehicle_length}</p>
            <p className="my-4"><strong>Width - </strong>{Sell.vehicle_width}</p>
            <p className="my-4"><strong>Front Wheels - </strong>{Sell.frontRimDesc}</p>
            <p className="my-4"><strong>Front Tyres - </strong>{Sell.frontTyreSize}</p>
            <p className="my-4"><strong>Rear Wheels - </strong>{Sell.rearRimDesc}</p>
            <p className="my-4"><strong>Rear Tyres - </strong>{Sell.rearTyreSize}</p>
            <p className="my-4"><strong>Kerb Weight - </strong>{Sell.kerbWeight}</p>
            <p className="my-4"><strong>Tare Mass - </strong>{Sell.tareMass}</p>
            <p className="my-4" id="whoobe-950fw"></p>
          </div>
        </div>
      </div>
    </div>
  )
};
export default Details;
