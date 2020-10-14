import React from "react";
import { useForm } from "react-hook-form";


const ReviewForm = () => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="form-body pt-5">
            <form className='' onSubmit={handleSubmit(onSubmit)}>

                <input
                    className='field-input'
                    name="name"
                    // defaultValue={loggedInUser.name}
                    ref={register({ required: true })}
                    placeholder="Your name" /> <br />
                {errors.name && <span className='error'>Name is required</span>}


                <input
                    className='field-input' name="companyName"
                    // defaultValue={loggedInUser.email}
                    ref={register({ required: true })} placeholder="Company's name, designation" /> <br />
                {errors.companyName && <span className='error'>Email is required</span>}
                
                <textarea
                    className='field-input'
                    rows="5"
                    name="details"
                    ref={register({ required: true })}
                    placeholder='Project details' /> <br />
                {errors.details && <span className='error'>This field is required</span>}

                <input className='btn-brand' type="submit" value="Submit" />
            </form>
        </div>
    );
}
export default ReviewForm;