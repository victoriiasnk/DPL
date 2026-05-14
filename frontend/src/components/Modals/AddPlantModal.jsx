function AddPlantModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Додати рослину</h2>
        <button onClick={onClose} className="mt-4 bg-gray-200 px-4 py-2 rounded">
          Закрити
        </button>
      </div>
    </div>
  );
}

export default AddPlantModal;