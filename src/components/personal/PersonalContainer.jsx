import { connect } from "react-redux";
import Personal from "./Personal";
import { getEmployeeDataAC } from "../../data/personal-reducer";

let mapStateToProps = state => ({
  personal: state.personalReducer.personal
})

let mapDispatchToProps = (dispatch) => {
  return {
    getEmployeeData: (userId) => {
      dispatch(getEmployeeDataAC(userId))
    }
  }
}

const PersonalContainer = connect(mapStateToProps, mapDispatchToProps)(Personal)

export default PersonalContainer