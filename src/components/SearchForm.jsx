import { useState } from "react"

const SearchForm = () => {
  const [searchInput, setSearchInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const searchValue = e.target.elements.search.value
    if(searchValue) {
      setSearchInput(searchValue)
    }
  }

  return (
    <section>
      <h1 className='title'>Unsplash Images</h1>
      <form className='search-form' onSubmit={() => handleSubmit}>
        <input type='text' name='search' placeholder='cat' className='form-input search-input'/>
        <button type='submit' className='btn'>Search</button>
      </form>
    </section>
    
  )
}
export default SearchForm