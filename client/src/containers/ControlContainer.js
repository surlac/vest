import { connect } from "react-redux";
import { getRepos, getStats } from '../actions/main'
import Control from '../components/Control'


const mapDispatchToProps = { getRepos, getStats };
const ControlContainer = connect(null, mapDispatchToProps)(Control);

export default ControlContainer;