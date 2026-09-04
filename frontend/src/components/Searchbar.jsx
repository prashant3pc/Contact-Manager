function SearchBar({ search, setSearch }) {


  return (

    <input

      className="
bg-gray-800
border
border-gray-600
p-3
rounded
w-full
md:w-96
outline-none
"

      placeholder="Search contacts..."

      value={search}


      onChange={(e) => setSearch(e.target.value)}


    />

  )


}


export default SearchBar;