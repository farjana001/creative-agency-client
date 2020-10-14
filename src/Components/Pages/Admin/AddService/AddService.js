import React from "react";
import { useForm } from "react-hook-form";
import './AddService.css';


const AddService = () => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/addService', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                alert('New Service added successfully');
            }
        })
    };

    return (
        <main>
            <div className="form-body pt-5 ">
                <form className='' onSubmit={handleSubmit(onSubmit)}>
                    <div className="row bg-white admin-form p-5">
                        <div className="col-md-5">
                            <h6>Service Title</h6>
                            <input
                                className='form-control'
                                name="title"
                                // defaultValue={loggedInUser.name}
                                ref={register({ required: true })}
                                placeholder="Enter title" /> <br />
                            {errors.title && <span className='error'>Name is required</span>}

                            <h6>Description</h6>
                            <textarea
                                className='form-control'
                                rows="5"
                                name="details"
                                ref={register({ required: true })}
                                placeholder='Project details' /> <br />
                            {errors.details && <span className='error'>This field is required</span>}
                        </div>
                        <div className="col-md-5">
                            <h6>Icon</h6>
                            {/* <input
                                className='form-control' 
                                name="icon"
                                type="file"
                                // defaultValue={loggedInUser.email}
                                ref={register({ required: true })} placeholder="Upload image" /> <br />
                            {errors.icon && <span className='error'>Email is required</span>} */}
                           
                        </div>
                    </div>
                    <div className="addServiceBtn"><input className='btn btn-success' type="submit" value="Submit" /></div>
                </form>
            </div>
        </main>
    );
}
export default AddService;