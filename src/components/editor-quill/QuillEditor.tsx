import dynamic from "next/dynamic";
import Quill from "quill";
import { useRef, useEffect, useState, useMemo } from "react";
import "react-quill/dist/quill.snow.css";

// 이미지 사이즈 조절을 위한 모듈
// if (typeof window !== "undefined") {
//   const QuillImageResize = dynamic(() => import("quill-image-resize-module"), {
//     ssr: false,
//   });
//   Quill.register("modules/imageResize", QuillImageResize);
// }

const QuillWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

interface UploadedImage {
  url: string;
}

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "align",
  "color",
  "background",
];

export default function QuillEditor() {
  const quillRef = useRef<any>(null);

  const [inputValue, setInputValue] = useState<string>();

  const handleInputValue = (e: string) => {
    setInputValue(e);
    console.log(inputValue);
  };

  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.setAttribute("multiple", "multiple");
    input.click();

    input.onchange = async () => {
      if (input.files) {
        const files = input.files;
        let uploadedImages: UploadedImage[] = [];

        for (let i = 0; i < files.length; i++) {
          const formData = new FormData();
          formData.append("file", files[i]);

          try {
            const response = await fetch("http://localhost:5000/upload", {
              method: "POST",
              body: formData,
            });

            const data = await response.json();
            uploadedImages.push(data);
            const quill = quillRef.current?.getEditor();
            const range = quill.getSelection(true);
            const position = range.index + range.length;
            uploadedImages.forEach((image) => {
              quill.insertEmbed(position, "image", image.url);
              quill.setSelection(position + 1);
            });
          } catch (error) {
            console.log(error);
          }
        }
      }
    };
  };

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      [{ align: [] }, { color: [] }, { background: [] }],
      ["clean"],
    ],
    // handlers: {
    //   image: imageHandler,
    // },
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
    // imageResize: {
    //   displaySize: true,
    //   modules: ["Resize", "DisplaySize", "Toolbar"],
    // },
  };

  console.log(inputValue);
  return (
    <QuillWrapper
      modules={modules}
      formats={formats}
      theme="snow"
      placeholder="Enter some text..."
      style={{
        width: "100%",
        height: "50vh",
        margin: "20px 0",
        padding: "0px 0 40px 0",
        background: "white",
        borderRadius: "16px",
      }}
      value={inputValue}
      onChange={handleInputValue}
    />
  );
}
