import React from "react";
import { useForm } from "react-hook-form";
import './OrderForm.css'

const OrderForm = () => {

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
                    placeholder="Your name / company's name" /> <br />
                {errors.name && <span className='error'>Name is required</span>}


                <input
                    className='field-input' name="email"
                    // defaultValue={loggedInUser.email}
                    ref={register({ required: true })} placeholder='Your email' /> <br />
                {errors.email && <span className='error'>Email is required</span>}


                <input
                    className='field-input'
                    name="title"
                    type="text"
                    ref={register({ required: true })}
                    placeholder='Service title' /> <br />
                {errors.date && <span className='error'>Date is required</span>}


                <textarea
                    className='field-input'
                    rows="5"
                    name="details"
                    ref={register({ required: true })}
                    placeholder='Project details' /> <br />
                {errors.description && <span className='error'>This field is required</span>}

                <input
                    className='field-input'
                    name="price"
                    // defaultValue={cardTitle}
                    ref={register({ required: true })}
                    placeholder='price' /> <br/>

                <input className='btn-brand' type="submit" value="Send" />
            </form>
        </div>
    );
}
export default OrderForm;