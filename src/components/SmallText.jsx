import { getDefaultReactSlashMenuItems } from "@blocknote/react";
import { HiArrowCircleRight } from 'react-icons/hi'; // You can use any suitable icon

const insertSmallText = (editor) => {
  // Block that the text cursor is currently in.
  const currentBlock = editor.getTextCursorPosition().block;

  editor.forEachBlock((block) => {
    if (block.id === currentBlock.id) {
      // If the block is currently selected, change the font size of its text.
      const updatedContent = block.content.map((content) => {
        if (content.type === "text") {
          return {
            ...content,
            styles: { ...content.styles, fontSize: "12px" },
          };
        }
        return content;
      });

      editor.updateBlock(block, {
        content: updatedContent,
      });
    } else if (block.id !== currentBlock.id) {
      // If the block is not selected, reset the font size to a default value.
      const updatedContent = block.content.map((content) => {
        if (content.type === "text") {
          return {
            ...content,
            styles: { ...content.styles, fontSize: "16px" }, // Change "16px" to your default font size
          };
        }
        return content;
      });

      editor.updateBlock(block, {
        content: updatedContent,
      });
    }

    return true;
  });
};


const insertSmallTextItem = {
  name: "Small Text",
  execute: insertSmallText,
  aliases: ["smalltext", "st"],
  group: "Other",
  icon: <HiArrowCircleRight size={18} />, // You can use a suitable icon
  hint: "Used to insert a block with smaller text (12px).",
};

export const customSlashMenuItemList = [
    ...getDefaultReactSlashMenuItems(),
    insertSmallTextItem,
];