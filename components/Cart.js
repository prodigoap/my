import { useReducer, useContext, createContext } from 'react'

const CartStateContext = createContext()
const CartDispatchContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE':
      return state + 1
    case 'DECREASE':
      return state - 1
    case 'INCREASE_BY':
      return state + action.payload
    case 'ADDCART':
    return state + "##|" + action.payload
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, 0);
  if (typeof window !== 'undefined') {
    console.log('we are running on the client');

    
    if(state){
      console.log("reset locale");
      localStorage.setItem("prova", state);
    }



} else {
    console.log('we are running on the server');
}
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  )
}

export const useCount = () => useContext(CartStateContext)
export const useDispatchCount = () => useContext(CartDispatchContext)
