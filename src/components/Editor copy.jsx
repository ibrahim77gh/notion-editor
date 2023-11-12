import React from 'react';
import "@blocknote/core/style.css";
import { BlockNoteView, useBlockNote } from "@blocknote/react";

const Editor = () => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const editorStyle = {
    background: '#ffffff',
    height:'50rem',
    width:'100rem',
    padding: '1rem',
    borderRadius: '10px',
    boxShadow: '8px 8px 8px 8px rgba(0, 0, 0, 0.1)',
  };

  const editor = useBlockNote({
    onEditorContentChange: (editor) => {
      // Log the document to console on every update
      console.log(editor,'editor');
    },
    
  });

  return (
    <div style={containerStyle}>
      <div style={editorStyle}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Document</h2>
        <BlockNoteView editor={editor} />
      </div>
    </div>
  );
}

export default Editor;
