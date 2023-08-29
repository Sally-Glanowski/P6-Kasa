import React from "react";

 function Tag({ tagName }) {
  return (
    <div class="tag">
      <span className="tag-name">{tagName}</span>
    </div>
  );
}
export default Tag;