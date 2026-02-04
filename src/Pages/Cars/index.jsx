import React from "react";
import { useGetAllcars } from "./Hooks/useGetAllCars";
import { Link } from "react-router-dom";    

const Cars = () => {
  const { cars, loading } = useGetAllcars();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg font-medium text-gray-600">Loading cars...</p>
      </div>
    );
  }

  if (!cars || cars.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">No cars available</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          Available Cars
        </h1>
        <Link to={'/cars/create'}><button className="py-1 px-3 text-black border border-indigo-600">Add car</button></Link>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <div
              key={car._id}
              className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-800">
                  {car.brand} {car.model}
                </h2>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    car.isAvailable
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {car.isAvailable ? "Available" : "Unavailable"}
                </span>
              </div>
                <img src={car.image} alt={car.model} />

              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  <span className="font-medium text-gray-700">Transmission:</span>{" "}
                  {car.transmission}
                </p>
                <p>
                  <span className="font-medium text-gray-700">Year:</span>{" "}
                  {car.year}
                </p>
                <p>
                  <span className="font-medium text-gray-700">Price:</span>{" "}
                  ₦{Number(car.price).toLocaleString()}
                </p>
              </div>

             <Link to={`/cars/${car._id}`}>
              <button
                className="mt-6 w-full rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-gray-400"
                disabled={!car.isAvailable}
              >
                {car.isAvailable ? "Book Car" : "Not Available"}
              </button>
             </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cars;
