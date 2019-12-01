import { GET_FORM_FIELD } from './container/constants'

const initialState = {
    name: '',
    email: '',
    message:''

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_FORM_FIELD:
        return { name: action.string }
      default:
        return state      
    }
  }
export default reducer