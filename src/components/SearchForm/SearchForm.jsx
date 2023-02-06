import { FormInput, FormBtn, Form } from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <FormInput type="text" name="searchName" />
      <FormBtn type="submit">Search</FormBtn>
    </Form>
  );
};

export default SearchForm;
