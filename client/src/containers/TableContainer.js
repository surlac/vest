import { connect } from "react-redux";
import Table from '../components/Table'

const mapStateToProps = state => ({ data: state.patterns });
const TableContainer = connect(mapStateToProps)(Table);

export default TableContainer;