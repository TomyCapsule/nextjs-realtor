import Head from 'next/head';
import { Flex, Box } from '@chakra-ui/react';
import Banner from '@/components/Banner/Banner';
import { baseEndpointUrl, fetchAPI } from '@/utils/fetchAPI';
import { APIResponse, Hit } from '@/utils/APIResponse.model';
import Property from '@/components/Property/Property';

export default function Home({propertiesForSale, propertiesForRent} : {propertiesForSale: Hit[], propertiesForRent: Hit[]}) {
  console.log(propertiesForSale, propertiesForRent)
  return (
    <>
      <Box>
        <Banner 
          purpose='RENT A HOME'
          title1='Rental Homes for'
          title2='Everyone'
          desc1=' Explore from Apartments, builder floors, villas'
          desc2='and more'
          buttonText='Explore Renting'
          linkName='/search?purpose=for-rent'
          imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
        />
        <Flex flexWrap="wrap">
          {propertiesForRent.map((property: Hit) => <Property property={property} key={property.id}/>)}
        </Flex>
        <Banner 
          purpose='BUY A HOME'
          title1=' Find, Buy & Own Your'
          title2='Dream Home'
          desc1=' Explore from Apartments, land, builder floors,'
          desc2=' villas and more'
          buttonText='Explore Buying'
          linkName='/search?purpose=for-sale'
          imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
        />
        <Flex flexWrap="wrap">
          {propertiesForSale.map((property: Hit) => <Property property={property} key={property.id}/>)}
        </Flex>
      </Box>
    </>
  )
}

export async function getStaticProps(){
  const propertyForSale = await fetchAPI(`${baseEndpointUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`) as APIResponse;
  const propertyForRent = await fetchAPI(`${baseEndpointUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`) as APIResponse;

  return {
    props: {
      propertiesForSale: propertyForSale?.hits, 
      propertiesForRent: propertyForRent?.hits
    }
  }
}
