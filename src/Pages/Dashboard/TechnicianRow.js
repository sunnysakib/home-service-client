import React from 'react';
import { toast } from 'react-toastify';

const TechnicianRow = ({ technician, index, refetch, setDeletingTechnician }) => {
    const { name, specialty, img } = technician;
    
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-8 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>
                <label onClick={() => setDeletingTechnician(technician)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default TechnicianRow;