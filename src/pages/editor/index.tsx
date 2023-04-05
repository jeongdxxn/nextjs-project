import Editor from "../../components/editor-lexical/Editor";
import QuillEditor from "../../components/editor-quill/QuillEditor";

export default function EditorIdx() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col bg-slate-200">
      <div className="flex justify-center items-center h-[100px]">
        <h1 className="text-[24px]">Hello Editor!</h1>
      </div>
      <div className="relative flex flex-col">
        <Editor />
        <QuillEditor />
      </div>
    </div>
  );
}
