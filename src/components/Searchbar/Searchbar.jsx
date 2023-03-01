
function Searchbar({ form, input }) {
    return (
        <header className="Searchbar">
  <form className="SearchForm" onSubmit={form}>
    <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label">Search</span>
    </button>

    <input name="search"
        onChange={input}
      className="SearchForm-input"
      type="text"
    //   autocomplete="off"
    //   autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
    )
}

export default Searchbar