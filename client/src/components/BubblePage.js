import React, { useState, useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  // const getColors = () => {
  //   axiosWithAuth()
  //       .get('/colors')
  //       .then(res => {
  //         console.log(res.data)
  //       })
  //       .catch(err => {
  //         console.log(err)
  //       })
  // }

  useEffect(() => {
    axiosWithAuth()
        .get('/colors')
        .then(res => {
          console.log(res.data)
          setColorList(res.data)
        })
        .catch(err => {
          console.log(err)
        })
      // getColors()
  })

  
    
  

  return (
    <>
      {colorList.map(color => {
        console.log('color', color)
        return (
          <div>
            <p>{color.color}</p>
          </div>
        )
      })}
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
