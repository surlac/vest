import { connect } from "react-redux";
import Sidebar from '../components/Sidebar'

const mapStateToProps = state => ({ data: state.stats });
const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;