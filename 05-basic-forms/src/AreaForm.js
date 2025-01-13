import React, { useState } from "react";

export default function AreaForm() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const updateWidth = (event) => {
    setWidth(event.target.value);
  };

  const updateHeight = (event) => {
    setHeight(event.target.value);
  };

  const area = width * height;

  return (
    <React.Fragment>
      <div>
        <label>Width:</label>
        <input className="width" type="text" onChange={updateWidth} />
      </div>
      <div>
        <label>Height:</label>
        <input type="text" onChange={updateHeight} />
      </div>
      <div>Area = {area} </div>
    </React.Fragment>
  );
}
