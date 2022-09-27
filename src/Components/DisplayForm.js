import React, { useEffect } from "react";
import { useForm } from "../Context/FormContext";
import DisplayFormComp from "./DisplayFormComp";

function DisplayForm() {
  const { list } = useForm();

  return (
    <div>
      {/* {list.map((item) => (
        <>{JSON.stringify(item, null, 2)}</>
      ))} */}
      {list.map((item, index) => (
        <DisplayFormComp key={index} data={item} />
      ))}
    </div>
  );
}

export default DisplayForm;
