import React, {useState} from 'react';
import "@blocknote/core/style.css";
import { BlockNoteView, useBlockNote, ReactSlashMenuItem } from "@blocknote/react";
import './style.css'
import { customSlashMenuItemList } from './SmallText'

const Pages = ({page}) => {

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
        slashMenuItems: customSlashMenuItemList,
        domAttributes: {
            // Adds a class to all `blockContainer` elements.
            blockContainer: {
            class: "block-container",
            },
        },
        initialContent: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: page.title, // Set the text content to the page title
                  styles: {}, // You can add any desired styles here
                },
              ],
            },
          ],
    });

  return (
    <div style={containerStyle}>
        <div style={editorStyle}>
            {/* <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{page.title}</h2> */}
            <BlockNoteView editor={editor} />
        </div>
    </div>
  )
}

export default Pages
