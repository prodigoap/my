import { proxy, useSnapshot } from "valtio";

var qtytotal=0;
var cartproductlist="";
if (typeof window !== "undefined") {
    
    if(localStorage.getItem("qtytotal")!=""){
        
        qtytotal=localStorage.getItem("qtytotal");
    
    }
    
    
    if(localStorage.getItem("cartproductlist")!=""){
        
        cartproductlist=localStorage.getItem("cartproductlist");
   
    }

}



const state = proxy({ skus: cartproductlist, qtytotal: qtytotal, boxsignupopened: 0 });

if (typeof window !== "undefined") {
} else {
}
export { state };
