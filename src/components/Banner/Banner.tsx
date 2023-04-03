import { Box, Flex, Text, Button } from "@chakra-ui/react"
import Image from "next/image";
import Link from "next/link";

interface BannerProps {
    purpose: string,
    title1: string,
    title2: string,
    desc1: string,
    desc2: string,
    linkName: string,
    buttonText: string,
    imageUrl: string
}

const Banner = (props : BannerProps) => {
    return (
        <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
            <Image src={props.imageUrl} width={500} height={300} alt="banner"/>
            <Box>
                <Text color="gray.500" fontSize="sm" fontWeight="medium">{props.purpose}</Text>
                <Text fontSize="3xl" fontWeight="bold">{props.title1}<br/>{props.title2}</Text>
                <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{props.desc1}</Text>
                <Button fontSize="xl">
                    <Link href={props.linkName}>{props.buttonText}</Link>
                </Button>
            </Box>
        </Flex>
    )
}

export default Banner;