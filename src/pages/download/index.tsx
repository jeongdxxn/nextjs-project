export default function DownloadIdx() {

  const onClickDownloadVideo = () => {
    const url = "/564x/12/8c/bb/128cbb4769e2e72b8a4b62d75bae5c98.jpg";
    // const url = "/watch?v=PrqwxkBB0DA";

    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "다운로드 파일명";
        document.body.appendChild(a);
        a.click();
        a.remove();
      });
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <button
          type="button"
          onClick={onClickDownloadVideo}
          className="p-2 border border-spacing-1 rounded-md m-2 hover:bg-slate-600 hover:text-white duration-200"
        >
          f.이미지 다운로드
        </button>
        <a
          href="/564x/ed/8d/f9/ed8df95cefce0ef60bb455799c402832.jpg"
          className="p-2 border border-spacing-1 rounded-md m-2 hover:bg-slate-600 hover:text-white duration-200"
          download="다운로드 파일명"
        >
          a.이미지 다운로드
        </a>
        <a
          href="/watch?v=PrqwxkBB0DA"
          className="p-2 border border-spacing-1 rounded-md m-2 hover:bg-slate-600 hover:text-white duration-200"
          download="다운로드 파일명"
        >
          a.동영상 다운로드
        </a>
      </div>
    </>
  );
}
