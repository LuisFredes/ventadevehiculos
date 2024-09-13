document.addEventListener("DOMContentLoaded", () => {
  const vehiclesDetails = {
    1: {
      marca: "Audi",
      modelo: "A3",
      año: "2022",
      kilometraje: "15,000 km",
      precio: "18000",
      descripcion:
        "Audi A3 en excelente estado, con todos los servicios al día.",
      ubicacion: "Ciudad de México, CDMX",
      whatsapp1: "https://wa.me/+5492614168330",
      whatsapp2: "https://wa.me/+5492615088877",
      imagenes: ["./Images/vehiculos/Prueba1.jpg"],
    },
    2: {
      marca: "Gol",
      modelo: "Doblin 1.9",
      año: "2000",
      kilometraje: "25,000 km",
      precio: "5000000",
      descripcion: "Gol Doblin 1.9 modelo diesel.",
      ubicacion: "Fray Luis Beltran, Mendoza, Maipu",
      whatsapp1: "https://wa.me/+5492614168330",
      whatsapp2: "https://wa.me/+5492615088877",
      imagenes: [
        "./Images/vehiculos/GolDoblin1.jpg",
        "./Images/vehiculos/golDoblin2.jpg",
        "./Images/vehiculos/GolDoblin3.jpg",
      ],
    },
    3: {
      marca: "Mercedes-Benz",
      modelo: "C-Class",
      año: "2023",
      kilometraje: "5,000 km",
      precio: "35000",
      descripcion:
        "Mercedes-Benz C-Class con las últimas características de tecnología.",
      ubicacion: "Monterrey, Nuevo León",
      whatsapp1: "https://wa.me/+5492614168330",
      whatsapp2: "https://wa.me/+5492615088877",
      imagenes: ["./Images/vehiculos/Prueba3.jpg"],
    },
    4: {
      marca: "Ford Mustang",
      modelo: "C",
      año: "2023",
      kilometraje: "5,000 km",
      precio: "35000",
      descripcion:
        "Ford Mustang con las últimas características de tecnología.",
      ubicacion: "Monterrey, Nuevo León",
      whatsapp1: "https://wa.me/+5492614168330",
      whatsapp2: "https://wa.me/+5492615088877",
      imagenes: ["./Images/vehiculos/fordmustang.jpg"],
    },
  };

  const urlParams = new URLSearchParams(window.location.search);
  const vehicleId = urlParams.get("id");
  const vehicle = vehiclesDetails[vehicleId];

  if (vehicle) {
    // Carrusel de imágenes
    const carouselInner = document.querySelector(
      "#vehicleCarousel .carousel-inner"
    );
    const images = vehicle.imagenes
      .map(
        (img, index) => `
          <div class="carousel-item${index === 0 ? " active" : ""}">
            <img src="${img}" class="d-block w-100" alt="${vehicle.marca} ${
          vehicle.modelo
        } ${index + 1}" />
          </div>
        `
      )
      .join("");
    carouselInner.innerHTML = images;

    // Información del vehículo
    const vehicleInfo = document.getElementById("vehicleInfo");
    vehicleInfo.innerHTML = `
      <h3>${vehicle.marca} ${vehicle.modelo}</h3>
      <p><strong>Año:</strong> ${vehicle.año}</p>
      <p><strong>Kilometraje:</strong> ${vehicle.kilometraje}</p>
      <p><strong>Precio:</strong> $${vehicle.precio}</p>
      <p><strong>Descripción:</strong> ${vehicle.descripcion}</p>
      <p><strong>Ubicación:</strong> ${vehicle.ubicacion}</p>
      <h3>Contacto</h3>
      <div class="whatsapp-links">
        <a href="${vehicle.whatsapp1}" target="_blank">
          <i class="fab fa-whatsapp"></i> Contactar por WhatsApp
        </a>
        <a href="${vehicle.whatsapp2}" target="_blank">
          <i class="fab fa-whatsapp"></i> Contactar por WhatsApp 2
        </a>
      </div>
    `;
  } else {
    document.getElementById("vehicleInfo").innerHTML =
      "<p>Vehículo no encontrado.</p>";
  }
});
