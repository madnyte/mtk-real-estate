export const url = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
    const {data} = await fetch(url, {
        method: "GET",
        headers: {
            "x-rapidapi-host": "bayut.p.rapidapi.com",
            "x-rapidapi-key": "ce90fc468fmshf53d29d768b06f5p1b550fjsn661b20185864"
        }
    })

}