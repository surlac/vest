import { connect } from "react-redux";
import { getRepos, getStats } from '../actions/side'
import Example from '../components/Datepick'


const mapDispatchToProps = { getRepos, getStats };
const ExampleContainer = connect(null, mapDispatchToProps)(Example);

export default ExampleContainer;