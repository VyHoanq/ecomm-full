'use client'

import React from 'react'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import SubmitButton from '@/components/form/SubmitButton';
import { TextInput } from '@/components/form/FormInput';


export default function RegisterForm({ role = "USER" }) {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [loading, setLoading] = useState(false);
    const [emailErr, setEmailErr] = useState("");
    async function onSubmit(data) {
        try {
            console.log(data);
            setLoading(true);
            const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
            const res = await fetch(`${baseUrl}/api/users`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const responseData = await res.json();
            if (res.ok) {
                console.log(responseData)
                setLoading(false);
                toast.success("User Created Successfully");
                reset();
                if (role === "USER") {
                    router.push("/")
                }
                else {
                    router.push(`/onboarding/${responseData.data.id}`)
                }
            } else {
                setLoading(false);
                if (res.status === 409) {
                    setEmailErr("User with this Email already exists");
                    toast.error("User with this Email already exists");
                } else {
                    console.error("Server Error:", responseData.error);
                    toast.error("Oops Something Went wrong");
                }
            }
        } catch (error) {
            setLoading(false);
            console.error("Network Error:", error);
            toast.error("Something Went wrong, Please Try Again");
        }
    }

    return (
        <div className="flex w-1/2 justify-around items-center bg-white">
            <form onSubmit={handleSubmit(onSubmit)} className="">
                <h1 className="text-gray-800 font-bold text-3xl uppercase mb-6 leading-6" >Create a new account</h1>
                <TextInput label="" name="role" register={register} errors={errors} type="hidden" className="sm:col-span-2 mb-3" defaultValue={role}/>
                <TextInput label="Your Name" name="name" register={register} errors={errors} type="text" className="sm:col-span-2 mb-3" />
                <TextInput label="Email Address" name="email" register={register} errors={errors} type='email' className="sm:col-span-2 mb-3" />
                {emailErr && <p className="text-red-500 text-sm">{emailErr}</p>}
                <TextInput label="Password" name="password" register={register} errors={errors} type='password' className="sm:col-span-2 mb-3" />

                {/* Submit Button */}
                <SubmitButton isLoading={loading} buttonTitle="Register" loadingButtonTitle="Registering Please Wait...." />

                <p className="text-sm font-light text-gray-500 dark:text-gray-400 py-4">
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="font-medium text-purple-600 hover:underline dark:text-purple-500"
                    >
                        Login
                    </Link>
                </p>
            </form>
        </div>
    )
}
