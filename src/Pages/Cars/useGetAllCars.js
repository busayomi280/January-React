import axios from "axios";
import { useState, useEffect } from "react"

 export const useGetAllcars = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(false)

    async function getAllCars(){
        setLoading(true)
        try {
            const res = await axios.get('http://localhost:3000/api/v1/cars')
            console.log(res.data);
            setCars(res.data)
        } catch (error) {
            console.log(error);
            
        }finally{
            setLoading(false)
        }
    }
    useEffect(() => {
    getAllCars()
}, []);
    return{
        cars, loading
    }
}
