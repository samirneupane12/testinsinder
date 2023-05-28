import axios from "axios";
import { useState, useEffect } from "react";
import style from "../../styles/component/header.module.css";
const Banner = () => {
  const source = `<iframe data-aa='2217992' src='//ad.a-ads.com/2217992?size=728x90' style='width:728px; height:90px; border:0px; padding:0; overflow:hidden; background-color: transparent;'></iframe>
 `;
  return (
    <>
      <div className={style.banner_area}>
        <div  dangerouslySetInnerHTML={{ __html: source }}></div>
      </div>
    </>
  );
};

export default Banner;
