import * as React from 'react'; 
import SearchBar from "material-ui-search-bar";
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import TableHead from '@material-ui/core/TableHead';
import Link from '@material-ui/core/Link';
import axios from 'axios';
import Box from '@material-ui/core/Box';
import Image from 'react-bootstrap/Image'

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { page, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
    
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page > 100}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(title, year, poster, imdb, page) {
  return { title, year, poster, imdb, page };
}


const Search = () => {
  const apikey = "73f61f10";
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [pagesSeen, setPagesSeen] = React.useState({});
  const [overlapMap, setOverlapMap] = React.useState({});
  const [showList, setShowList] = React.useState(true);
  const [currentRow, setCurrentRow] = React.useState(null)
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  

  const handleChangePage = (event, newPage) => {
    if(pagesSeen[newPage + ""] !== true) {
      axios.get(`http://www.omdbapi.com/?s=${searchQuery}&page=${newPage + 1}&type=movie&apikey=${apikey}`)
      .then(res => {
        console.log(res)
        if(res !== null && res.data.Response === 'False') return;
        pagesSeen[newPage + ""] = true;
        var tempRows = [];
        if(res !== null && res.data !== null && res.data.Search !== null) {
          for(var i = 0; i < res.data.Search.length; i++) {
            if(overlapMap[res.data.Search[i].imdbID] !== true) {
              tempRows.push(createData(res.data.Search[i].Title, res.data.Search[i].Year, res.data.Search[i].Poster, res.data.Search[i].imdbID, 3 * i + newPage))
              overlapMap[res.data.Search[i].imdbID] = true;
            }
          }
        }
        setRows(rows.concat(tempRows));
        if(res !== null && res.data !== null && res.data.Search !== null) {
          setPage(newPage);
        }
      });
    } else {
      console.log("here")
      setPage(newPage);
    }
  };

  const handleSortResultsByYear = () => {
    var temp = rows.slice();
    temp.sort((a, b) => (a.year > b.year) ? 1 : -1)
    setRows(temp)
    setPage(0)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRowClick = (event, row) => {
    axios.get(`http://www.omdbapi.com/?i=${row.imdb}&apikey=${apikey}`)
    .then(res => {
      console.log(res.data)
      setCurrentRow(res.data);
      setShowList(false);
    });
  };
  const handleSearch = (value, num) => {
    axios.get(`http://www.omdbapi.com/?s=${searchQuery}&type=movie&page=${num}&apikey=${apikey}`)
    .then(res => {
      setPagesSeen({})
      setPage(0)
      setOverlapMap({})
      var tempRows = [];
      if(res !== null && res.data !== null && res.data.Search !== null) {
        for(var i = 0; i < res.data.Search.length; i++) {
          if(overlapMap[res.data.Search[i].imdbID] !== true) {
            tempRows.push(createData(res.data.Search[i].Title, res.data.Search[i].Year, res.data.Search[i].Poster, res.data.Search[i].imdbID, i + 10000 + page))
            overlapMap[res.data.Search[i].imdbID] = true;
          }
        }
      }
      setShowList(true);
      setCurrentRow(null);
      setRows(tempRows);
    });
  }


  const tableContainer = {
    width: '95%',
    borderWidth: 2, borderColor: 'orange',borderStyle: 'solid'
  }
  const container = {
    paddingTop: '20px',
    paddingBottom: '10px',
  }
  const boxContainer = {
    paddingTop: '20px',
    paddingBottom: '10px'
  }
  return (
    <div>
      <Box display="flex" flexDirection="row" justifyContent="center">
        <SearchBar
          value={searchQuery}
          onChange={(newValue) => {setSearchQuery(newValue);}}
          onRequestSearch={() => handleSearch(searchQuery, 1)}
          style={{
            width: '90%',
            marginTop: '5px',
            marginBottom: '5px',
            borderWidth: 2, 
            borderColor: 'orange',
            borderStyle: 'solid'

          }}
        />
      </Box>
      
      {(showList || currentRow == null) &&
        <Box style={boxContainer} display="flex" flexDirection="row" justifyContent="center">
          <TableContainer style={tableContainer}component={Paper}>
            <Table aria-label="custom pagination table">
              <TableHead>
                <TableRow>
                  <TableCell component="th" scope="row">Title</TableCell>
                  <TableCell style={{ width: 80 }} align="left">Year</TableCell>
                  <TableCell style={{ width: 80 }} align="left">IMDB ID</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : rows
                ).map((row) => (
                    <TableRow hover onClick={(event) => handleRowClick(event, row)} key={row.imdb + row.page}>
                      <TableCell component="th" scope="row">
                        {row.title}
                      </TableCell>
                      <TableCell style={{ width: 80 }} align="left">
                        {row.year}
                      </TableCell>
                      <TableCell style={{ width: 80 }} align="left">
                        {row.imdb}
                      </TableCell>
                    </TableRow>
                ))}

                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <td>
                    <p
                      style={{color: '#4b51b5', cursor: 'pointer'}}
                      onClick={handleSortResultsByYear}
                    >Sort seen results by year</p>
                  </td>
                  <TablePagination
                    rowsPerPageOptions={[5, 10]}
                    colSpan={3}
                    count={-1}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: { 'aria-label': 'rows per page' },
                      native: true,
                    }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
                
              </TableFooter>
            </Table>
          </TableContainer>
        </Box>
      }
      {!showList && currentRow != null &&
        <Box style={container} display="flex" flexDirection="column" justifyContent="center">
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              setShowList(true);
              setCurrentRow(null);
            }}
          >
            Return to search results
          </Link>
          <figure>
            <Image src={currentRow.Poster} fluid />
          </figure>
          <Box display="flex" flexDirection="row" justifyContent="center">
            <p style={{fontWeight: "bold"}}>Title:&nbsp;</p>
            <p>{currentRow.Title}</p>
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="center">
            <p style={{fontWeight: "bold"}}>Year:&nbsp;</p>
            <p>{currentRow.Year}</p>
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="center">
            <p style={{fontWeight: "bold"}}>Director:&nbsp;</p>
            <p>{currentRow.Director}</p>
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="center">
            <p style={{fontWeight: "bold"}}>Rated:&nbsp;</p>
            <p>{currentRow.Rated}</p>
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="center">
            <p style={{fontWeight: "bold"}}>Rating:&nbsp;</p>
            <p>{currentRow.imdbRating}</p>
          </Box>
        </Box>
      }
    </div>
  );
};



export default Search;