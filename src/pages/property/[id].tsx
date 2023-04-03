import { Flex, Box, Spacer, Text, Avatar } from '@chakra-ui/react';
import {FaBed, FaBath} from 'react-icons/fa';
import {BsGridFill} from 'react-icons/bs';
import {GoVerified} from 'react-icons/go';
import millify from 'millify';
import { baseEndpointUrl, fetchAPI } from '@/utils/fetchAPI';
import { GetServerSideProps } from 'next';
import { Hit } from '@/utils/APIResponse.model';
import { APIResponseDetails } from '@/utils/APIResponseDetails.model';
import ImageScrollbar from '@/components/ImageScrollbar/ImageScrollbar';

const PropertyDetails = ({ 
        propertyDetails: { 
            price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos 
        }} : { propertyDetails : APIResponseDetails}) => (
    <>
        <Box maxW="1000px" margin="auto" p="4">
            {photos && <ImageScrollbar data={photos}/>}
        </Box>
    </>
);

export default PropertyDetails;

export const getServerSideProps : GetServerSideProps<{propertyDetails : APIResponseDetails}> = async ({params}) => {
    const data = await fetchAPI(`${baseEndpointUrl}/properties/detail?externalID=${params?.id}`)
    return {
        props: {
            propertyDetails: data as APIResponseDetails
        }
    }
}
