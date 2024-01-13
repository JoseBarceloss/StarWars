import { FilterTextProps } from '../type/type';

function FilterText({ value, onChange }: FilterTextProps) {
  return (
    <>
      <label htmlFor="search">Search: </label>
      <input
        data-testid="name-filter"
        id="search"
        type="text"
        value={ value }
        onChange={ onChange }
      />
    </>
  );
}

export default FilterText;