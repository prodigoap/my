import Link from 'next/link'
import { useCount, useDispatchCount } from '../components/Cart'
import { state } from './state'
import { subscribe } from 'valtio'
import { watch } from 'valtio/utils'

import CryptoJS from 'crypto-js';

const IndexPage = () => {
  const count = useCount()
  const dispatch = useDispatchCount()

console.log("# "+encryptData("prova","key"));
console.log("# "+decryptData(encryptData("prova","key"),"key"));
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
     payload: "#",
   })
   
   const updatevaltio = (prodid,qty) => {

      state.skus=state.skus+"#"+prodid+"-"+qty;

      state.qtytotal= parseInt(state.qtytotal)  + parseInt(qty);

      
      localStorage.setItem("cartproductlist", state.skus);
      localStorage.setItem("qtytotal", state.qtytotal);

   }
const stop = watch((get) => {
  console.log('[index] state has changed to', get(state)) // auto-subscribe on use
})
  return (
    <>
     
      <p>Cart: {count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={addProductCart}>addProductCart</button>
      <button onClick={() => updatevaltio('abcde',2)}>updatevaltio</button>
      <button onClick={() => updatevaltio('zvuts',1)}>updatevaltio</button>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      
    </>
  )
}
export const encryptData = (data, salt) =>
                                CryptoJS.AES.encrypt(JSON.stringify(data), salt).toString();
                                
                                
                                export const decryptData = (ciphertext, salt) => {
                                const bytes = CryptoJS.AES.decrypt(ciphertext, salt);
                                try {
                                    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
                                }
                                catch(err){
                                    return null;
                                }
                                }

export default IndexPage
