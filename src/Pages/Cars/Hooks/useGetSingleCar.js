import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export const useGetSingleCar = () => {
    const [car, setCar] = useState(null);
    const [loading, setloading] = useState(false);

    async function getSingleCar(id){
        setloading(true);
        try {
            const car = await axios.get(`http://localhost:3000/api/v1/cars/${id}`)
            setCar(car.data)
        } catch (error) {
            console.log("Error fetching car:", error);
            
        }finally{
            setloading(false)
        }
    }
    const id = useParams().id;
    useEffect(() => {
        getSingleCar(id)
    }, [id]);

    return{
    car, loading, getSingleCar
    }
}
