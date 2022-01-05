import Link from "next/link"
import Image from "next/image"
import {Flex, Box, Text, Button} from "@chakra-ui/react"

const Banner = ({purpose}) => (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
        <Image src={imageUrl} width={500} height={300} alt="Banner"/>

    </Flex>
)

const Home = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <Banner purpose={"For Sale"}/>
            <Banner purpose={"For Hire"}/>
        </div>
    )
}

export default Home