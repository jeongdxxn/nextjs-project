interface propsType {
  modalRef: React.ForwardedRef<HTMLDivElement>;
  modalOutSideClick: (e: any) => void;
}

export default function Modal({ modalRef, modalOutSideClick }: propsType) {
  return (
    <div
      ref={modalRef}
      onClick={(e) => modalOutSideClick(e)}
      className="border-4 w-[200px] h-[100px] flex justify-center items-center"
    >
      <div>Modal Display@!@!</div>
    </div>
  );
}

//  <Modal modalRef={modalRef} modalOutSideClick={modalOutSideClick} />
