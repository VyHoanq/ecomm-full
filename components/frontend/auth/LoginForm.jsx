'use client'

import React from 'react'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import SubmitButton from '@/components/form/SubmitButton';
import { TextInput } from '@/components/form/FormInput';


export default function LoginForm() {
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
        <div className="flex w-1/2 justify-around items-center bg-white dark:bg-gradient-to-tr dark:from-slate-700 dark:to-slate-200 ">
            <form onSubmit={handleSubmit(onSubmit)} className="">
                <h1 className="text-gray-800 font-bold text-3xl uppercase mb-6 leading-6" >Login to account</h1>
                <TextInput label="Email Address" name="email" register={register} errors={errors} type='email' className="sm:col-span-2 mb-3" />
                {emailErr && <p className="text-red-500 text-sm">{emailErr}</p>}
                <TextInput label="Password" name="password" register={register} errors={errors} type='password' className="sm:col-span-2 mb-3" />

                {/* Submit Button */}
                <SubmitButton isLoading={loading} buttonTitle="Login account" loadingButtonTitle="Signing Please Wait...." />

                <p className="text-sm font-light text-gray-500 dark:text-gray-400 py-4">
                    Don&apos;t have an account?{" "}
                    <Link
                        href="/register"
                        className="font-medium text-purple-600 hover:underline dark:text-black "
                    >
                        Register
                    </Link>
                </p>
            </form>
        </div>
    )
}
