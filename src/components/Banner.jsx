import React from "react";

function Banner({ bannerImg, bannerTitle, page }) {
  return (
    <div className={`banner ${page}`}>
      <img src={bannerImg} alt={bannerTitle} className="banner-image" />
      <h1>{bannerTitle}</h1>
    </div>
  );
}

export default Banner;
