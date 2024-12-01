import FarmerForm from '@/components/frontend/forms/FarmerForm';
import { getData } from '@/lib/getData';
import React from 'react';

export default async function page({ params }) {
    const { id } = await params;
    const user = await getData(`users/${id}`)

    return (
        <div className="flex flex-col gap-6 p-16">
            <div className="max-w-4xl p-4 mx-auto">
                <p className="text-3xl font-bold text-black uppercase dark:text-white mb-1">
                    Welcome Back {user.name}
                </p>
            </div>
            <FarmerForm user={user} />
        </div>
    );
}
