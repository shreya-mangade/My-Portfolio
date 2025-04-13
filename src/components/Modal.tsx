import { useEffect } from "react";

type ModalProps = {
  message: string;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ message, onClose }) => {
  // Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-md text-center animate-fade-in">
        <p className="mb-4">{message}</p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-[var(--color-cyan-dark)] text-white rounded hover:bg-[var(--color-cyan-light)] transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
