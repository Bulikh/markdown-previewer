import React from "react";

const Editor = props => {
  return (
    <textarea
      type="text"
      id="editor"
      value={props.markedText}
      onChange={props.onChange}
    />
  );
};

export default Editor;
