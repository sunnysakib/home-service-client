import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import TechnicianRow from './TechnicianRow';

const ManageTechnician = () => {
    const [deletingTechnician, setDeletingTechnician] = useState(null);

    const { data: technicians, isLoading, refetch } = useQuery('technicians', () => fetch('http://localhost:5000/technician', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mr-5'>
            <h2 className="text-2xl mb-2"> Total Technicians: {technicians.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            technicians.map((technician, index) => <TechnicianRow
                                key={technician._key}
                                technician={technician}
                                index={index}
                                refetch={refetch}
                                setDeletingTechnician={setDeletingTechnician}
                            ></TechnicianRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingTechnician && <DeleteConfirmModal
                deletingTechnician={deletingTechnician}
                refetch={refetch}
                setDeletingTechnician={setDeletingTechnician}
            ></DeleteConfirmModal>}
        </div>
    );
};

export default ManageTechnician;