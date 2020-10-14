import React from 'react';


const AdminServiceTable = () => {
    return (
        <div className="form-body pt-4">
            <div className="bg-white p-4 admin-form">
                <table className="table table-borderless">
                    <thead style={{backgroundColor:'#F5F6FA'}} className="table-head">
                        <tr>
                            <th className="text-secondary text-left" scope="col">Sr No</th>
                            <th className="text-secondary" scope="col">Name</th>
                            <th className="text-secondary" scope="col">Email ID</th>
                            <th className="text-secondary" scope="col">Service</th>
                            <th className="text-secondary" scope="col">Project Details</th>
                            <th className="text-secondary" scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>1</td>
                            <td>Farjana Islam</td>
                            <td>nipa.farzana@gmail.com</td>
                            <td>Graphic Design</td>
                            <td>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. </td>
                            <td>done</td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminServiceTable;