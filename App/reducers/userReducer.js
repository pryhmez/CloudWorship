import { CLEAR_USER, LOGIN_USER, LOGIN_USER_FAILED, LOGIN_USER_SUCCESS, SET_USER, SIGNUP_USER, SIGNUP_USER_FAILED, SIGNUP_USER_SUCCESS} from '../actions/type'
import { AsyncStorage } from "react-native";

const initialState = {
    userId: 'hello!',
    email: "",
    name: "",
    password: "",
    profilePix: "",
    loginSuccess: false,
    signupSuccess: false,
    token: ""
};

export default (state = initialState,  action) => {
    switch(action.type) {
        case CLEAR_USER:
            consol
            return {...state, userName: " "};
        case LOGIN_USER:
            let email = action.payload.user.email;
            let userId = action.payload.user._id;
            let token = action.payload.user.token;
            let name = action.payload.user.last_name + " "+ action.payload.user.first_name;
            let cover_image = action.payload.user.cover_image;
            // AsyncStorage.setItem("USER_KEY", JSON.stringify({email: email, userId: userId, token: token, name: name, cover_image: cover_image}))
            return {...state, email: email, userId: userId, token: token, signupSuccess: true};
        case LOGIN_USER_FAILED:
            return {...state, userName: " "};
        case LOGIN_USER_SUCCESS:
            return {...state, userName: " "};
        case SET_USER:
            // console.warn(action.payload)
            return {...state, email: action.payload.user.email, userId: action.payload.user._id, token: action.payload.user.token, signupSuccess: true};
        case SIGNUP_USER:
            return {...state, userName: " "};
        case SIGNUP_USER_FAILED:
            return {...state, userName: " "};
        case SIGNUP_USER_SUCCESS:
            return {...state, signupSuccess: true};
        default:
            return state;    
    } 
}