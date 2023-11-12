import { getDefaultReactSlashMenuItems } from "@blocknote/react";

const insertHelloWorld = (editor) => {
    // Block that the text cursor is currently in.
    const currentBlock= editor.getTextCursorPosition().block;
  
    // New block we want to insert.
    const helloWorldBlock = {
      type: "paragraph",
      content: [{ type: "text", text: "Hello World", styles: { bold: true } }],
    };
    editor.insertBlocks([helloWorldBlock], currentBlock, "after");
}

const insertHelloWorldItem = {
    name: "Insert Hello World",
    execute: insertHelloWorld,
    aliases: ["helloworld", "hw"],
    group: "Other",
    icon: <HiOutlineGlobeAlt size={18} />,
    hint: "Used to insert a block with 'Hello World' below.",
  };

export const customSlashMenuItemList = [
    ...getDefaultReactSlashMenuItems(),
    insertHelloWorldItem,
];