interface ModalBtnProps {
  label: string;
  onClick: () => void;
}
export default function ModalBtn({ label, onClick }: ModalBtnProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mb-10 text-lg border-2 p-4 rounded"
    >
      {label}
    </button>
  );
}
