import Link from "next/link";
import { useCount, useDispatchCount } from "../components/Cart";
import { proxy, useSnapshot } from "valtio";
import { state } from "./state";
const AboutPage = () => {
  const count = useCount();
  const dispatch = useDispatchCount();

  const snap = useSnapshot(state);

  console.log("valtio about " + snap.demo);

  if (typeof window !== "undefined") {
    console.log("we are running on the client");
    console.log("local " + localStorage.getItem("prova"));
  } else {
    console.log("we are running on the server");
  }

  const handleIncrease = (event) =>
    dispatch({
      type: "INCREASE",
    });
  const handleIncrease15 = (event) =>
    dispatch({
      type: "INCREASE_BY",
      payload: 15,
    });

  return (
    <>
      <h1>ABOUT</h1>
      <p>Cart: {count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleIncrease15}>Increase By 15</button>
      <p>
        <Link href="/">
          <a>Home</a>
        </Link>
      </p>
    </>
  );
};

export default AboutPage;
