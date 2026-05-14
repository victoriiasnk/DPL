// frontend/src/services/api.js

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// ======== 🌱 ФУНКЦІЇ ДЛЯ РОСЛИН ========

// Отримати всі рослини
export async function getPlants() {
  const response = await fetch(`${API_URL}/plants`);
  return response.json();
}

// Додати рослину
export async function addPlant(plantData) {
  const response = await fetch(`${API_URL}/plants`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(plantData),
  });

  return response.json();
}

// Видалити рослину
export async function deletePlant(id) {
  const response = await fetch(`${API_URL}/plants/${id}`, {
    method: "DELETE",
  });

  return response.json();
}

// Оновити рослину
export async function updatePlant(id, plantData) {
  const response = await fetch(`${API_URL}/plants/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(plantData),
  });

  return response.json();
}



// ======== 🔌 СЕНСОРНІ ДАНІ (ESP32) ========

// Отримати всі показники
export async function getSensorData() {
  const response = await fetch(`${API_URL}/sensor`);
  return response.json();
}

// Додати нові показники
export async function addSensorData(data) {
  const response = await fetch(`${API_URL}/sensor`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return response.json();
}



// ======== 🌍 ЗОВНІШНІ ДАНІ (Perenual API) ========

// Пошук рослин по назві
export async function searchPlantInPerenual(query) {
  const response = await fetch(`${API_URL}/external/search?query=${query}`);
  return response.json();
}

// Отримати детальну інформацію по ID
export async function getPlantFromPerenual(id) {
  const response = await fetch(`${API_URL}/external/details/${id}`);
  return response.json();
}
