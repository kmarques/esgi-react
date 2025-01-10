import { useEffect, useState } from "react";
import Button from "./Button";
import useNotify from "../hooks/useNotify";

export default function Dummy() {
  const [count, setCount] = useState(0);
  const notify = useNotify();

  useEffect(() => {
    console.log("After Update - count: %d", count);

    return () => {
      console.log("Before Update - count: %d", count);
    };
  }, [count]);

  useEffect(() => {
    console.log("On mount");
    return () => {
      console.log("Before Unmount");
    };
  }, []);

  return (
    <>
      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
      <Button onClick={() => notify("success", "Coucou")}>
        Test Toast success
      </Button>
    </>
  );
}

//const hooks = [
//  {
//    type: "useState",
//    value: 0,
//    setValue: function(newValue) {
//        this.value = newValue;
//        window.dispatchEvent("rerender");
//    }
//  },
//  {
//    type: "useEffect",
//    deps: [count],
//    beforeUpdate: ...,
//  },
//  {
//    type: "useEffect",
//    deps: [],
//    beforeUpdate: ...,
//  },
//];
//
//function useEffect(callback, newDeps) {
//  if (
//    !listeners.deps ||
//    listeners?.deps.some((currentDep, index) => currentDep !== newDeps[index])
//  ) {
//    if (listeners.beforeUpdate) {
//      listeners.beforeUpdate();
//    }
//    const onUpdate = callback();
//    listeners.deps = newDeps;
//    listeners.beforeUpdate = onUpdate;
//  }
//}
//
//function React.unmount(ReactElement) {
//    ReactElement.hooks.forEach(hookData => hookData.type==="useEffect" && hookData?.beforeUpdate())
//}
