import React, { useState } from "react";

function AddForm(){
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        description: '',
        recipe: '',
        serve: ''
    });

    

    const handleSubmit = (e) => {
        e.preventDefault();
        const buttonId = e.target.id;
    // depending on the button clicked will determine which route the formdata needs posted to
        if(buttonId === 'snack'){
            fetch('http://localhost:5000/snacks',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                 },
                body: JSON.stringify(formData)
            })
        }else if(buttonId === 'drink'){
            fetch('http://localhost:5000/drinks',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                 },
                body: JSON.stringify(formData)
            })
        }
        

        setFormData({
            id: '',
            name: '',
            description: '',
            recipe: '',
            serve: ''
        });
    };


    

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                name='name'
                placeholder="Name of food or drink"
                value={formData.name}
                onChange={(e) => setFormData({...formData,name: e.target.value,id: e.target.value})}
            /><br/>
            <textarea
                name='description'
                placeholder="Describe your food or drink"
                value={formData.description}
                onChange={(e) => setFormData({...formData,description: e.target.value})}
            /><br/>
            <textarea
                name='recipe'
                placeholder="Recipe Instructions"
                value={formData.recipe}
                onChange={(e) => setFormData({...formData,recipe: e.target.value})}
            /><br/>
            <textarea
                name='serve'
                placeholder="How do you serve it?"
                value={formData.serve}
                onChange={(e) => setFormData({...formData,serve: e.target.value})}
            /><br/>
            <button type="submit" onClick={handleSubmit} id="snack">Add Snack</button>
            <button type="submit" onClick={handleSubmit} id="drink">Add Drink</button>
        </form>
    )
}

export default AddForm;