import { useEffect, useState } from "react";
import LogoutButton from "../../components/Navigation/LogoutButton";

export const DashBoard = () => {
  const [saldo, setSaldo] = useState(null);

  useEffect(() => {
    const fetchSaldo = async () => {
      try {
        const token = localStorage.getItem("access_token"); // Asegúrate que el token esté almacenado ahí

        const response = await fetch("http://localhost:8000/api/saldo/", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("No se pudo obtener el saldo");
        }

        const data = await response.json();
        setSaldo(data.saldo);
      } catch (error) {
        console.error("Error al obtener el saldo:", error);
      }
    };

    fetchSaldo();
  }, []);

  return (
    <div className="p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Bienvenido a BetPolix</h1>
        <LogoutButton />
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Tarjetas resumen */}
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-semibold">Saldo actual</h2>
          <p>
            {saldo !== null ? `$${Number(saldo).toLocaleString("es-CO")}` : "Cargando..."}
          </p>
        </div>

        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-semibold">Apuestas activas</h2>
          <p>3 apuestas en curso</p>
        </div>

        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-semibold">Historial</h2>
          <p>Última apuesta: Ganada</p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold mb-4">Tus Apuestas Recientes</h2>
        <ul className="space-y-2">
          <li className="bg-gray-100 p-3 rounded">Real Madrid vs. Barcelona - Apostaste $10.000</li>
          <li className="bg-gray-100 p-3 rounded">Nacional vs. Millonarios - Apostaste $20.000</li>
        </ul>
      </section>
    </div>
  );
};
