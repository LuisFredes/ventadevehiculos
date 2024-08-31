document.addEventListener("DOMContentLoaded", () => {
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
