import React from 'react';
import Editor from 'components/Editor';

export default function CodeView() {
  return (
    <div className="editorContainer">
      <Editor mode="html" />
      <Editor mode="css" />
      <Editor mode="javascript" />
    </div>
  );
}