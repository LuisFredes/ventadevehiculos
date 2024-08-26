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
      whatsapp: "https://wa.me/1234567890",
      imagen: "./images/vehiculos/prueba1.jpg",
    },
    2: {
      marca: "BMW",
      modelo: "X5",
      año: "2021",
      kilometraje: "25,000 km",
      precio: "22000",
      descripcion: "BMW X5 con características de lujo y en perfecto estado.",
      ubicacion: "Guadalajara, Jalisco",
      whatsapp: "https://wa.me/0987654321",
      imagen: "./images/vehiculos/prueba2.jpg",
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
      whatsapp: "https://wa.me/1122334455",
      imagen: "./images/vehiculos/prueba3.jpg",
    },
  };

  const applyFilters = () => {
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const anio = document.getElementById("anio").value;
    const precio = document.getElementById("precio").value;

    document.querySelectorAll(".vehicle").forEach((vehicle) => {
      const vehicleMarca = vehicle.getAttribute("data-marca");
      const vehicleModelo = vehicle.getAttribute("data-modelo");
      const vehicleAnio = vehicle.getAttribute("data-anio");
      const vehiclePrecio = vehicle.getAttribute("data-precio");

      const matchesMarca = !marca || vehicleMarca === marca;
      const matchesModelo = !modelo || vehicleModelo === modelo;
      const matchesAnio = !anio || vehicleAnio === anio;
      const matchesPrecio =
        !precio || parseInt(vehiclePrecio) <= parseInt(precio);

      if (matchesMarca && matchesModelo && matchesAnio && matchesPrecio) {
        vehicle.style.display = "block";
      } else {
        vehicle.style.display = "none";
      }
    });
  };

  document
    .getElementById("apply-filters")
    .addEventListener("click", applyFilters);
});
