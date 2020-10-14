import React from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../AdminSideBar/AdminSidebar';
import logo from '../../../../images/logos/logo.png';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <main>
            <div className="sticky">
                <AdminSidebar />
                <div className="row">
                    <div className="col-md-3 py-3">
                        <Link to="/home"><img className="logo ml-5" src={logo} alt="" /></Link>
                    </div>
                    <div className="col-md-9">
                        <h4 className="order-heading">Order</h4>
                    </div>
                </div>
                <div className="order-body">
                    <div className="form-body pt-5">
                        <form style={{borderRadius:'15px', padding:'20px 0 100px 50px'}} className='bg-white w-75' onSubmit={handleSubmit(onSubmit)}>
                            <h6>Email</h6>
                          <div className="row">
                          <input
                                style={{width:'60%', marginLeft:'10px', marginRight:'10px'}}
                                className='form-control'
                                name="email"
                                ref={register({ required: true })}
                                placeholder="john@gmail.com" /> <br />
                            {errors.email && <span className='error'>Name is required</span>}
                            <input className='btn btn-success' type="submit" value="Submit" />
                          </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MakeAdmin;