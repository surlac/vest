import { connect } from "react-redux";
import Cumulative from '../components/Cumulative'

const mapStateToProps = state => ({ repos: state.chart });
const CumulativeContainer = connect(mapStateToProps)(Cumulative);

export default CumulativeContainer;