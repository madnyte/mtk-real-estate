import {useState} from "react";
import {useRouter} from "next/router";
import Image from "next/image"
import {Flex, Box, Text, Icon} from "@chakra-ui/react"
import {BsFilter} from "react-icons/bs"

const Search = () => {
    const [searchFilters, setSearchFilters] = useState(false)
    const router = useRouter()

    return (
        <Box>
            <Flex onClick={() => setSearchFilters((prevState => !prevState))} cursor="pointer" bg="gray.100"
                  borderBottom="1px" borderColor="gray.200" padding="2" fontWeight="back" fontSize="l"
                  justifyContent="center" alignItems="center">
                <Text>Search Property By Filter</Text>
                <Icon paddingLeft="2" w="7" as={<BsFilter/>}/>
            </Flex>
            {searchFilters && <SearchFilters/>>}
        </Box>
    )
}

export default Search