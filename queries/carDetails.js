//Car details graphql query
import { gql } from "@apollo/client"


const CAR_DETAILS = gql`
    query carDetails($id: String!) {
      RedbookVehicle(id: $id) {
        # Overall
        RedbookMake {
          make: make_description
        }
        RedbookFamily {
          model: family_description
        }
        #key features
    year: vehicle_year_group
    makeCode: vehicle_make_code
    makeName: vehicle_make_code
    familyCode: vehicle_family_code
    modelCode: vehicle_model_code
    modelName: vehicle_model_code
    yearGroup: vehicle_year_group
    seriesModelYear: vehicle_series_model_year
    badgeDescription: vehicle_badge_description
    badgeSecondaryDescription: vehicle_badge_secondary_description
    badgeCode: vehicle_badge_code
    manufacturerBodyStyle: vehicle_manufacturer_body_style
    bodyStyleDescription: vehicle_body_style_description
    manufacturerBodyConfig: vehicle_manufacturer_body_config
    bodyConfigDescription: vehicle_body_config_description
    limitedEdition: vehicle_limited_edition
    buildCountryOriginDescription: vehicle_build_country_origin_description
    seriesPublic: vehicle_series_public

    #Engine & Performace Section
    engineDescription: vehicle_engine_description
    inductionDescription: vehicle_induction_description
    engineConfigurationDescription: vehicle_engine_configuration_description
    cylinders: vehicle_cylinders
    camDescription: vehicle_cam_description
    fuelDeliveryDescription: vehicle_fuel_delivery_description
    power: vehicle_power
    powerRpmFrom: vehicle_power_rpmfrom
    powerRpmTo: vehicle_power_rpmto
    acceleration: vehicle_acceleration
    altEngTorque: vehicle_alt_eng_torque
    engineLocation: vehicle_engine_location
    torqueRpmFrom: vehicle_torque_rpmfrom
    vechicleDescription: vehicle_description

    # Transmission
    driveCode: vehicle_drive_code
    gearNum: vehicle_gear_num
    gearTypeDescription: vehicle_gear_type_description
    gearLocationDescription: vehicle_gear_location_description
    driveType:vehicle_drive_description

    # Dimenssions
    manufacturerWheelBaseConfig: vehicle_manufacturer_wheel_base_config
    wheelBaseConfig: vehicle_wheel_base_config
    wheelBase: vehicle_wheel_base
    vehicle_roofline
    vehicle_height
    vehicle_length
    vehicle_width
    frontRimDesc: vehicle_front_rim_desc
    frontTyreSize: vehicle_front_tyre_size
    rearRimDesc: vehicle_rear_rim_desc
    rearTyreSize: vehicle_rear_tyre_size
    kerbWeight: vehicle_kerb_weight
    tareMass: vehicle_tare_mass
    grossVehicleMass: vehicle_gross_vehicle_mass
    grossCombinationMass: vehicle_gross_combination_mass

    #Fuel
    fuel_capacity: vehicle_fuel_capacity
    ethanolBlend: vehicle_max_ethanol_blend
    ronRating: vehicle_ron_rating
    fuelType: vehicle_fuel_type_description
    fuelCombined: vehicle_fuel_combined
    fuelUrban: vehicle_fuel_urban
    fuelExtraUrban: vehicle_fuel_extra_urban
    COCombined: vehicle_co2combined
    emissionStd: vehicle_emission_standard

    #Ownership and Safety
    ancpRating: vehicle_ancaprating
    ancpYear: vehicle_ancapyear
    door: vehicle_door_num
    seat: vehicle_seat_capacity
    payload: vehicle_pay_load
    towing: vehicle_towing_brakes
    towingNo: vehicle_towing_no_brakes
    warrenty: vehicle_warranty_years
    roadSideAssist: vehicle_warranty_cust_assist
    firstServiceKM: vehicle_first_service_km
    firstServiceMonths: vehicle_first_service_months
    
    #Engine
    engineSize:vehicle_engine_size
    induction:vehicle_induction_description
    cylinders:vehicle_cylinders
    engineConfiguration:vehicle_engine_configuration_description
    powerKW:vehicle_power
    powerRPM:vehicle_power_rpmto
    torqueKW:vehicle_torque
    torqueRPM:vehicle_torque_rpmto
    engineLocation:vehicle_engine_location
    acceleration:vehicle_acceleration
    
      }
    }
  `;


export default CAR_DETAILS;