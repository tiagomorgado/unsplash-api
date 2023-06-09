import { useGlobalContext } from "../context"

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const searchValue = e.target.elements.search.value
    setSearchTerm(searchValue)
  }

  /*  === TODO ===
   * Add a kind of filter system, to select images of a specific
   * color palette. Follow unsplash Docs to find extra functionality to add
   */

  return (
    <section>
      <h1 className='title'>Unsplash Images</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input type='text' name='search' placeholder='Type what are you looking for...' className='form-input search-input'/>
        <button type='submit' className='btn'>Search</button>
      </form>
    </section>
    
  )
}
export default SearchForm
