import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";
import { useGetSingleCar } from "./useGetSingleCar";

export const useUpdateCars = () => {
  const { car } = useGetSingleCar();
  const navigate = useNavigate();

  const [carData, setCarData] = useState({
    image: "",
    brand: "",
    model: "",
    year: "",
    color: "",
    transmission: "",
    price: "",
  });
  console.log(car);

  useEffect(() => {
    if (car) {
      setCarData({
        image: car.image,
        brand: car.brand,
        model: car.model,
        year: car.year,
        color: car.color,
        transmission: car.transmission,
        price: car.price,
      });
    }
  }, [car]);

   async function handleSubmit(e) {
    e.preventDefault();
    try {
        const res = await axios.patch(`http://localhost:3000/api/v1/cars/${car._id}`, carData);
        alert('Car updated successfully');
        navigate('/cars/'+car._id);
    } catch (error) {
        console.log(error)
    }
   }

      return { carData, setCarData , handleSubmit};

};
