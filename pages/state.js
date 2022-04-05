import { proxy, useSnapshot } from 'valtio';
const state = proxy({ skus: "", qtytotal: 0, boxsignupopened: 0 });

if (typeof window !== 'undefined') {
   
   
} else {
   
}
export {state};