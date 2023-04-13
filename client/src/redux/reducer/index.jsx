const initialState={
  products:[],
  allProducts:[],
  category:[],
  marca:[],
  userLogged:[],
  error:[],
  loginUser:'',
  precio:[],
}

function rootReducer (state=initialState, action){

  let productSort =
    action.payload === 'asc'
      ? state.products.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase()
          ? 1
          : a.name.toLowerCase() < b.name.toLowerCase()
            ? -1
            : 0,
      )
      : state.products.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase()
          ? -1
          : a.name.toLowerCase() < b.name.toLowerCase()
            ? 1
            : 0,
      )

  switch (action.type){
    case LOGIN_GOOGLE:
      return{
        ...state,
        loginUser:action.payload,
      }
      case LOGIN_LOCAL:
        return {
          ...state,
          loginUser: action.payload,
        }
  
      case LOGOUT:
        return {
          ...state,
          loginUser: '',
        }
  
      case LOGIN:
        return {
          ...state,
          loginUser: action.payload,
        }
  
      case REGISTER_LOCAL: {
        return {
          ...state,
        }
      }

      case GET_USERS:
      return {
        ...state,
        users: action.payload,
      }

      case GET_USER_BY_ID:
      return {
        ...state,
        oneUser: action.payload,
      }
      
      case ERROR:
      return {
        ...state,
        error: action.payload,
      }

      case GET_PRODUCTS:
        return{
          ...state,
          products: action.payload,
          allProducts: action.payload,
        }

      case 'GET_ALL_CATEGORYS':
        return{
          ...state,
          category:action.payload,
        }
      
      case 'ORDER_ALF':
        return{
          ...state,
          products: productSort,
        }



    default:
      return{...state}
  }

} 

export default rootReducer