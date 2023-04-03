import Editor from "../../components/editor/Editor";

export default function EditorIdx() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col bg-slate-200">
      <div className="flex justify-center items-center h-[100px]">
        <h1 className="text-[24px]">Hello Editor!</h1>
      </div>
      <div className="relative flex flex-col">
        <Editor />
      </div>
    </div>
  );
}
