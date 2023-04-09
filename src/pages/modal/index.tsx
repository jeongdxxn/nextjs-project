import { useState, useRef } from "react";
import Modal from "../../components/modal/Modal";
import ModalBtn from "../../components/modal/ModalBtn";

export default function ModalIdx() {
  const modalRef = useRef<HTMLDivElement>(null);
  /// currentTarget을 지정하기 위한 useRef()
  console.log("modalRef:::::::", modalRef);
  const [modalDisplay, setModalDisplay] = useState(false);

  const modalOutSideClick = (e: any) => {
    if (modalRef.current === e.target) {
      setModalDisplay(false);
    }
  };
  ///앞에서 공부한 방법
  ///ref는 모달 밖 영역에 걸어줌 (여기에 onClick이 있기 때문에)
  ///taget은 눌린 요소를 말함. 즉 모달이 눌려도 Ref.current와 다르기때문에 모달이 안닫힘!

  return (
    <div className="flex justify-center items-center w-full h-full flex-col pt-20">
      <ModalBtn
        label="모달 열기"
        onClick={() => {
          setModalDisplay(!modalDisplay);
        }}
      />
      {modalDisplay && (
        <Modal modalRef={modalRef} modalOutSideClick={modalOutSideClick} />
      )}
    </div> /// ref와 modalOutSideClick 함수를 프롭스로 내려준다.
  );
}
