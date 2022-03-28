import Link from 'next/link'
import { useCount, useDispatchCount } from '../components/Counter'
import { state } from './state'
import { subscribe } from 'valtio'
import { watch } from 'valtio/utils'
import Minicart from './minicart'
const IndexPage = () => {
  const count = useCount()
  const dispatch = useDispatchCount()


  const handleIncrease = (event) =>
    dispatch({
      type: 'INCREASE',
    })
  const handleDecrease = (event) =>
    dispatch({
      type: 'DECREASE',
    })
   const  addProductCart = (event) =>
   dispatch({
     type: 'ADDCART',
     payload: "##",
   })
   
   const updatevaltio = (prodid,qty) => {
      console.log(qty);
      state.demo=state.demo+"#"+prodid+"-"+qty;
      localStorage.setItem("prova", state.demo);


   }
const stop = watch((get) => {
  console.log('[index] state has changed to', get(state)) // auto-subscribe on use
})
  return (
    <>
      <h1>HOME</h1>
      <p>Counter: {count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={addProductCart}>addProductCart</button>
      <button onClick={() => updatevaltio('112233',2)}>updatevaltio</button>
      <button onClick={() => updatevaltio('115533',1)}>updatevaltio</button>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <Minicart />
    </>
  )
}

export default IndexPage
