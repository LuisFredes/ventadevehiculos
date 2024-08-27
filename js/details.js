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
      imagenes: [
        "./images/vehiculos/prueba1_1.jpg",
        "./images/vehiculos/prueba1_2.jpg",
        "./images/vehiculos/prueba1_3.jpg",
      ],
    },
    2: {
      marca: "Gol",
      modelo: "Doblin 1.9",
      año: "2000",
      kilometraje: "25,000 km",
      precio: "5.000.000",
      descripcion: "Gol Doblin 1.9 modelo diesel.",
      ubicacion: "Fray Luis Beltran,Mendoza,Maipu",
      whatsapp1: "https://wa.me/+5492614168330",
      whatsapp2: "https://wa.me/+5492615088877",
      imagenes: [
        "Images/vehiculos/GolDoblin1.jpg",
        "images/vehiculos/GolDoblin2.jpg",
        "images/vehiculos/GolDoblin3.jpg",
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
      imagenes: [
        "./images/vehiculos/prueba3_1.jpg",
        "./images/vehiculos/prueba3_2.jpg",
        "./images/vehiculos/prueba3_3.jpg",
      ],
    },
  };

  const urlParams = new URLSearchParams(window.location.search);
  const vehicleId = urlParams.get("id");
  const vehicle = vehiclesDetails[vehicleId];

  if (vehicle) {
    const vehicleDetail = document.getElementById("vehicle-detail");
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

    vehicleDetail.innerHTML = `
      <div class="col-md-6">
        <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-inner">
            ${images}
          </div>
          <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-md-6">
        <h3>${vehicle.marca} ${vehicle.modelo}</h3>
        <p><strong>Año:</strong> ${vehicle.año}</p>
        <p><strong>Kilometraje:</strong> ${vehicle.kilometraje}</p>
        <p><strong>Precio:</strong> $${vehicle.precio}</p>
        <p><strong>Descripción:</strong> ${vehicle.descripcion}</p>
        <p><strong>Ubicación:</strong> ${vehicle.ubicacion}</p>
        <a href="index.html" class="btn btn-primary mb-2">
          Volver a la Galería
        </a>
        <div>
          <a href="${vehicle.whatsapp1}" class="btn btn-success mr-2" target="_blank">
            Contactar por WhatsApp
          </a>
          <a href="${vehicle.whatsapp2}" class="btn btn-success" target="_blank">
            Contactar por WhatsApp 2
          </a>
        </div>
      </div>
    `;
  } else {
    document.getElementById("vehicle-detail").innerHTML =
      "<p>Vehículo no encontrado.</p>";
  }
});
