function SearchBar({ search, setSearch }) { 
return ( 
<input 
className="input" 
placeholder="Search movies..." 
value={search} 
onChange={(e) => setSearch(e.target.value)} 
/> 
); 
} 
export default SearchBar;