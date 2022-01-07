import {useState, useEffect} from "react";
import {Flex,Box,Select, Text, Spinner, Icon, Input} from "@chakra-ui/react";
import {useRouter} from "next/router";
import Image from "next/image"
import {MdCancel} from "react-icons/md"

const SearchFilters = () => {
    const [filters, setFilters] = useState({})
    return (
        <Flex bg="gray.100" justifyContent="center" flexWrap="flex">

        </Flex>
    )
}

export default SearchFilters