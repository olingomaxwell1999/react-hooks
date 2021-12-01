import { useEffect, useState } from "react";

function HookUseEffect() {
  const [count, setCount] = useState({
    num: 1,
    id: "abcd",
  });

  const handleAdd = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num + 1,
      };
    });
  };

  const handleSubstract = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num - 1,
      };
    });
  };

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    //this is to find the width everyime we resize the browser
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });

    //If you log this without the dependency array, it will run everytime the app updates but with the dependency array it will only run once and if you add anything in the dependency array(in this case i used the count state) it is going to run everytime the state updates.(for every time i click on the plus or minus button the log will always run)
    console.log("ran");

    return () => {
      //this will run first before the first console log since it is unmounting the useEffect everytime the state updates.
      console.log("ran returned");
    };
  }, [count]);

  return (
    <div className="state-container">
      <div className="title">
        <h1>useEffect Hook</h1>
      </div>

      <div className="buttons">
        <button onClick={handleSubstract}>-</button>
        <span>{count.num}</span>
        <span>{count.id}</span>
        <button onClick={handleAdd}>+</button>
        <span>{screenWidth}</span>
      </div>
    </div>
  );
}

export default HookUseEffect;

