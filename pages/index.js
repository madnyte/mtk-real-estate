import Link from "next/link"
import Image from "next/image"
import {Flex, Box, Text, Button} from "@chakra-ui/react"
import {url, fetchApi} from "../utils/fetchApi"

const Banner = ({purpose, title1, title2, desc1, desc2, imageUrl, linkName, buttonText}) => (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
        <Image src={imageUrl} width={500} height={300} alt="Banner"/>
        <Box p="5">
            <Text color="gray.500" fontSize="sm" fontWeight="medium">
                {purpose}
            </Text>
            <Text fontSize="3xl" fontWeight="bold">
                {title1}<br/>{title2}
            </Text>
            <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
                {desc1}
            </Text>
            <Button fontSize="xl">
                <Link href={linkName}>
                    {buttonText}
                </Link>
            </Button>
        </Box>
    </Flex>
)

export default function Home ({propertiesForSale,propertiesForHire}) {
    return (
        <Box>
            <h1>Hello World</h1>
            <Banner purpose={"For Sale"}/>
            <Flex flexWrap="wrap">

            </Flex>
            <Banner purpose={"For Hire"}/>

        </Box>
    )
}

export async function getStaticProps() {
    const propertyForSale = await fetchApi(`${url}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
    const propertyForHire = await fetchApi(`${url}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

    return {
        props: {
            propertyForSale:  propertyForSale?.hits,
            propertyForHire: propertyForHire?.hits
        }
    }
}