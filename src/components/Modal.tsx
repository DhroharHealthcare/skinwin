import React from 'react';
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  beforeImage: string;
  afterImage: string;
}

const Modal = ({ isOpen, onClose, beforeImage, afterImage }: ModalProps) => {
  if (!isOpen) return null;

  return (
    // Backdrop
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 transition-opacity"
    >
      {/* Modal Content */}
      <div
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the modal content
        className="relative mx-4 w-full max-w-4xl rounded-lg bg-white p-4 shadow-xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 z-10 h-10 w-10 rounded-full bg-white text-black shadow-lg"
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Image Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Before Image */}
          <div className="relative">
            <img
              src={beforeImage}
              alt="Before treatment"
              className="w-full rounded-lg object-contain"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { (e.target as HTMLImageElement).src = 'https://placehold.co/600x600/ef4444/ffffff?text=Before+Image'; }}
            />
            <div className="pointer-events-none absolute bottom-2 left-2 rounded bg-red-600 px-2 py-1 text-sm font-semibold text-white">
              BEFORE
            </div>
          </div>

          {/* After Image */}
          <div className="relative">
            <img
              src={afterImage}
              alt="After treatment"
              className="w-full rounded-lg object-contain"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { (e.target as HTMLImageElement).src = 'https://placehold.co/600x600/22c55e/ffffff?text=After+Image'; }}
            />
            <div className="pointer-events-none absolute bottom-2 right-2 rounded bg-green-600 px-2 py-1 text-sm font-semibold text-white">
              AFTER
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Modal;