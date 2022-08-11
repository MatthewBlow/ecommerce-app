
const SearchResults = (results) => {
  return(
  <div>
    {results.map(result => (<p>{result}</p>))}
  </div>)
}

export default SearchResults