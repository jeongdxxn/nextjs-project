import ExampleTheme from "../../themes/ExampleTheme";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import ToolbarPlugin from "../../plugins/ToolbarPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";

import ListMaxIndentLevelPlugin from "../../plugins/ListMaxIndentLevelPlugin";
import CodeHighlightPlugin from "../../plugins/CodeHighlightPlugin";
import AutoLinkPlugin from "../../plugins/AutoLinkPlugin";
import ImagePlugin from "../../plugins/ImagePlugin";
import { ImageNode } from "../../nodes/ImageNode";

function Placeholder() {
  return <div className="editor-placeholder">Enter some rich text...</div>;
}

const editorConfig = {
  namespace: "MyEditor",
  theme: ExampleTheme,
  onError(error: any) {
    throw error;
  },
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode,
    ImageNode,
  ],
};

export default function Editor() {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="max-w-900px text-black relative leading-5 font-normal text-left">
        <ToolbarPlugin />
        <div className="editor-inner">
          <RichTextPlugin
            contentEditable={<ContentEditable className="editor-input" />}
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          {/* <TreeViewPlugin /> */}
          <AutoFocusPlugin />
          <CodeHighlightPlugin />
          <ListPlugin />
          <LinkPlugin />
          <AutoLinkPlugin />
          <ImagePlugin />
          <ListMaxIndentLevelPlugin maxDepth={7} />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
        </div>
      </div>
    </LexicalComposer>
  );
}

// // function MyOnChangePlugin(props: {
// //   onChange: (editorState: EditorState) => void;
// // }): null {
// //   const [editor] = useLexicalComposerContext();
// //   const { onChange } = props;
// //   useEffect(() => {
// //     return editor.registerUpdateListener(({ editorState }) => {
// //       onChange(editorState);
// //     });
// //   }, [onChange, editor]);
// //   return null;
// // }

// // const onClick = (tag: HeadingTag): void => {
// //   editor.update{() => {
// //     const selection = $getSelection();
// //     if($isRangeSelection(selection)) {
// //       $setBlocksType_experimental(selection, () => $createHeadingNode(tag))
// //     }
// //   }}
// // }

// function HeadingPlugin(): JSX.Element {
//   const [editor] = useLexicalComposerContext();
//   const onClick = (e: React.MouseEvent): void => {
//     editor.update(() => {
//       const selection = $getSelection();
//       if ($isRangeSelection(selection)) {
//         //TODO 선택되어있는 블럭의 특성을 바꿔주는 코드
//         // $setBlocksType(selection, () => $createHeadingNode("h1"));
//         console.log("선택한 부분", selection);
//         console.log("이건 뭔지 궁금한 부분", $isRangeSelection(selection));
//       }
//     });
//   };
//   return (
//     <button
//       onClick={onClick}
//       className="flex items-center justify-center bg-slate-600 w-[40px] h-[40px] rounded-md text-white mb-[10px]"
//     >
//       H1
//     </button>
//   );
// }

// function onChange(editorState: { read: (arg0: () => void) => void }) {
//   editorState.read(() => {
//     // Read the contents of the EditorState here.
//     const root = $getRoot();
//     const selection = $getSelection();

//     console.log(root, selection);
//   });
// }

// function MyCustomAutoFocusPlugin() {
//   const [editor] = useLexicalComposerContext();

//   useEffect(() => {
//     // Focus the editor when the effect fires!
//     editor.focus();
//   }, [editor]);

//   return null;
// }

// function onError(error: Error): void {
//   console.error(error);
// }
