import { GET_FORM_FIELD } from './container/constants'

const sendForm = function(string) {
    for(let key in string){
        console.log(`${key}: ${string[key]}`)
    }
    return { type: GET_FORM_FIELD, string }
  }
export default sendForm