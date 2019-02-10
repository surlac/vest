import {connect} from 'react-redux'
import Chart from '../components/Chart'

const mapStateToProps = state => ({ repos: state.chart });
const ChartContainer = connect(mapStateToProps)(Chart);

export default ChartContainer;