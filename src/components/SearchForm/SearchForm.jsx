const SearchForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="searchName" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
