import React from "react";

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-96 p-6 rounded-2xl shadow-xl animate-fadeIn">

        {/* Заголовок */}
        {title && (
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {title}
          </h2>
        )}

        {/* Контент модалки */}
        <div className="mb-4">{children}</div>

        {/* Кнопка закриття */}
        <button
          onClick={onClose}
          className="w-full bg-gray-300 text-gray-800 py-2 rounded-xl hover:bg-gray-400 transition"
        >
          Закрити
        </button>

      </div>
    </div>
  );
}

export default Modal;