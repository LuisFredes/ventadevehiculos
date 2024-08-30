document.addEventListener("DOMContentLoaded", () => {
  const vehiclesDetails = {
    1: {
      marca: "audi",
      modelo: "a3",
      año: "2022",
      kilometraje: "15,000 km",
      precio: "18000",
      descripcion:
        "Audi A3 en excelente estado, con todos los servicios al día.",
      ubicacion: "Ciudad de México, CDMX",
      whatsapp: "https://wa.me/1234567890",
      imagen: "./images/vehiculos/Prueba1.jpg",
    },
    2: {
      marca: "gol",
      modelo: "doblin",
      año: "2000",
      kilometraje: "25,000 km",
      precio: "5000000",
      descripcion: "Gol Doblin 1.9 modelo diesel.",
      ubicacion: "Fray Luis Beltran, Mendoza, Maipu",
      whatsapp: "https://wa.me/0987654321",
      imagen: "./images/vehiculos/GolDoblin1.jpg",
    },
    3: {
      marca: "mercedes",
      modelo: "c-class",
      año: "2023",
      kilometraje: "5,000 km",
      precio: "35000",
      descripcion:
        "Mercedes-Benz C-Class con las últimas características de tecnología.",
      ubicacion: "Monterrey, Nuevo León",
      whatsapp: "https://wa.me/1122334455",
      imagen: "./images/vehiculos/Prueba3.jpg",
    },
    4: {
      marca: "ford",
      modelo: "mustang",
      año: "2020",
      kilometraje: "10,000 km",
      precio: "30000",
      descripcion:
        "Ford Mustang con características de lujo y en perfecto estado.",
      ubicacion: "Guadalajara, Jalisco",
      whatsapp: "https://wa.me/1234567890",
      imagen: "./images/vehiculos/Mustang2020.jpg",
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
