'use client'

import React from 'react'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import SubmitButton from '@/components/form/SubmitButton';


export default function RegisterForm() {
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
            const response = await fetch(`${baseUrl}/api/user`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const responseData = await response.json();

            if (response.ok) {
                setLoading(false);
                toast.success("User Created Successfully");
                reset();
                router.push("/login");
            } else {
                setLoading(false);
                if (response.status === 409) {
                    setEmailErr("User with this Email already exists");
                    toast.error("User with this Email already exists");
                } else {
                    console.error("Server Error:", responseData.message);
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
                <div className='mb-4'>
                    <label
                        htmlFor="name"
                        className="text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your name
                    </label>
                    <input
                        {...register("name", { required: true })}
                        type="text"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                        placeholder="Your Name"
                        required
                    />
                    {errors.name && (
                        <small className="text-red-600 text-sm ">
                            This field is required
                        </small>
                    )}
                </div>
                <div className='mb-4'>
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your email
                    </label>
                    <input
                        {...register("email", { required: true })}
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                        placeholder="name@company.com"
                        required
                    />
                    {errors.email && (
                        <small className="text-red-600 text-sm ">
                            This field is required
                        </small>
                    )}
                    <small className="text-red-600 text-sm ">{emailErr}</small>
                </div>
                <div className='mb-4'>
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Password
                    </label>
                    <input
                        {...register("password", { required: "Password is required" })}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                        required
                    />
                    {errors.password && (
                        <small className="text-red-600 text-sm ">
                            {errors.password.message}
                        </small>
                    )}
                </div>

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
