import { connect } from "react-redux";
import Personal from "./Personal";
import { getEmployeeData } from "../../redux/personal-reducer";

let mapStateToProps = state => ({
  personal: state.personalReducer.personal
})

let mapDispatchToProps = {
  getEmployeeData
}

const PersonalContainer = connect(mapStateToProps, mapDispatchToProps)(Personal)

export default PersonalContainer