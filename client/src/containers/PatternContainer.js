import { connect } from "react-redux";
import Pattern from '../components/Pattern'

const mapStateToProps = state => ({ repos: state.chart });
const PatternContainer = connect(mapStateToProps)(Pattern);

export default PatternContainer;