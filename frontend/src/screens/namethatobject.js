import React, {useState,useEffect} from 'react'
import Timer from '../components/timer.js'
import axios from 'axios'
import {Button} from 'react-bootstrap'

const Namethatobject = () => {
    const[products, setproducts] = useState([])
    const no_correct = []

    useEffect(()=>{
        const fetchproducts = async()=>{
            const {data} = await axios.get('/namethatobjectstart');
            console.log(data);
            setproducts(data);
        }
        fetchproducts()
    },[])
    function handleclick(){
        console.log('clicked')
    }
    
    return (
        <div>
            <Timer />
            <input type="text" maxlength="7" />
            <Button onClick={handleclick}>Submit</Button>
        </div>

    )
}

export default Namethatobject


