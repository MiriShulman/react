import React, { useState } from "react"

export const AddProducer = () => {
    const [producerData,setProducerData] = useState({
        name:'',
        email:'',
        phone:'',
        address:''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const {name,value} = e.target;
        setProducerData(p =>({
            ...p,
            [name]:value
        }))
    }
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //להוסיף כאן שליחת הנתונים
    }

    return <form onSubmit={handleSubmit}>
        <p>מלאי כאן פרטי מפיקה חדשה</p>
        <label>name </label>
        <input type="text" name="name" required placeholder="שם המפיקה" onChange={handleChange}/><br /><br />
        <label>email </label>
        <input type="email" name="email" id="" required onChange={handleChange}/><br /><br />
        <label>phone </label>
        <input type="number" onChange={handleChange}/><br /><br />
        <label>address </label>
        <input type="text" onChange={handleChange}/><br /><br />
        <button type="submit">הוסף מפיקה</button>
        
    </form>
}


