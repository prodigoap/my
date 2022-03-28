import { proxy, useSnapshot } from 'valtio';
const state = proxy({ demo: 22, demo2: 'hello' });

if (typeof window !== 'undefined') {
    console.log('we are running on the client');
    console.log("prova "+localStorage.getItem("prova"))
} else {
    console.log('we are running on the server');
}
export {state};