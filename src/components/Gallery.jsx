import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useGlobalContext } from "../context"

/* URL gets API key from ENV variable */
const url = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}`

const Gallery = () => {
  const {searchTerm} = useGlobalContext()

  /* 
   * By passing the second argument, we are telling ReactQuery to 
   * update the search according to the searchTerm 
   */
  const response = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`)
      return result.data
    }
  })

  if(response.isLoading) {
    return (
      <section className='image-container'>
        <h4>Loading...</h4>
      </section>
    )
  }

  if(response.isError) {
    return (
      <section className='image-container'>
        <h4>There has been an error...</h4>
      </section>
    )
  }

  const results = response.data.results
  if(results.length < 1) {
    return (
      <section className='image-container'>
        <h4>No results found...</h4>
      </section>
    )
  }

  return (
    <section className='image-container'>
      {
        /* Using conditional to check if fields exist in API call */
        results.map((item) => {
          const url= item?.urls?.regular
          return(
            <img key={item.id} src={url} alt={item.alt_description} className='img'/>
          )
        })
      }
    </section>
  )
}
export default Gallery
