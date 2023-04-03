import { useState } from "react";
import { useRouter } from "next/router";
import Image from 'next/image';
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';
import SearchFilters from "@/components/SearchFilters/SearchFilters";
import Property from "@/components/Property/Property";
import { Hit } from "@/utils/APIResponse.model";
import noresult from "public/noresult.svg";
import { baseEndpointUrl, fetchAPI } from "@/utils/fetchAPI";
import { GetServerSideProps } from "next";

const Search = ({ properties } : { properties : Hit[] }) => {
    const [searchFilters, setSearchFilters] = useState(false);
    const router = useRouter();

    return (
        <>
            <Box>
                <Flex
                    cursor="pointer"
                    bg="gray.100"
                    borderBottom="1px"
                    borderColor="gray.200"
                    p="2"
                    fontWeight="black"
                    fontSize="lg"
                    justifyContent="center"
                    alignItems="center"
                    onClick={() => setSearchFilters(prevFilters => !prevFilters)}
                >
                    <Text>Search Property by Filters</Text>
                    <Icon paddingLeft="2" w="7" as={BsFilter}/>
                </Flex>
                {searchFilters && <SearchFilters /> }
                <Text fontSize="2xl" p="4" fontWeight="bold">
                    Properties {router.query.purpose}
                </Text>
                <Flex flexWrap="wrap">
                    {properties.map((property : Hit) => <Property property={property} key={property.externalID}/>)}
                </Flex>
                {properties.length === 0 && (
                    <Flex justifyContent="center" alignItems="center" flexDirection={"column"} marginTop="5" marginBottom="5">
                        <Image alt="No result" src={noresult} />
                        <Text fontSize="2xl" marginTop="3">No results found</Text>
                    </Flex>
                )}
            </Box>
        </>
    )
}

export default Search;

export const getServerSideProps : GetServerSideProps<{properties : Hit[]}> = async ({query}) => {
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';

    const data = await fetchAPI(`${baseEndpointUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}&hitsPerPage=6`);
    return {
      props: {
        properties: data?.hits
      }
    }
  }