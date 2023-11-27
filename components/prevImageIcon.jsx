import React, { useContext } from "react";
import { UrlContext } from "../context/UrlContext";

function PrevImageIcon() {
  const { url, ProfileIconDefault } = useContext(UrlContext);

  return (
    <div className="content-preview">
      <img
        src={url || ProfileIconDefault}
        alt="Preview image"
        className="preview-image"
      />
    </div>
  );
}

export default PrevImageIcon;
