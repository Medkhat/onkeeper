import { connect } from "react-redux";
import Personal from "./Personal";

let mapStateToProps = state => ({
  personal: state.personalReducer.personal
})

let mapDispatchToProps = () => ({})

const PersonalContainer = connect(mapStateToProps, mapDispatchToProps)(Personal)

export default PersonalContainer