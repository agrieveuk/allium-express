import { Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SortOption = ({ sortBy, setSortBy }) => {
  const handleSortBy = ({ target }) => {
    setSortBy(target.value);
  };
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor='sort-by'>Sort By</InputLabel>
        <Select native value={sortBy} id='sort-by' onChange={handleSortBy}>
          <option disabled={sortBy} aria-label='None' value='' />
          <option value='created_at'>Date Created</option>
          <option value='comment_count'>Comments</option>
          <option value='votes'>Votes</option>
        </Select>
      </FormControl>
    </div>
  );
};

export default SortOption;
