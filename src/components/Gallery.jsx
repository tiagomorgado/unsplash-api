import { QueryClient, useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useGlobalContext } from "../context"

const url = 'https://api.unsplash.com/search/photos?client_id=-CcwTW0elrR--7MpgybhqKJo6xoAZK0_F8n8NP4HHj4'

const Gallery = () => {
  const {searchTerm} = useGlobalContext()
  const response = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`)
      return result.data
    }
  })
  console.log(response);

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
