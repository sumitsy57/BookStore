import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data); 
    };

    return (
        <>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    {/* Close Button */}
                    <Link
                        to="/"
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={() => {
                            const modal = document.getElementById("my_modal_3");
                            modal.close(); // Close the modal when the close button is clicked
                        }}
                    >
                        ✕
                    </Link>

                    <h3 className="underline text-center font-bold text-lg">Login</h3>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Email */}
                        <div className="mt-4 space-y-2">
                            <label>Email</label><br />
                            <input
                                type="email"
                                placeholder="Enter your Email"
                                className="w-80 px-3 py-1 border rounded-md outline-none"
                                {...register("email", { required: "Email is required" })}
                            />
                            <br />
                            {errors.email && (
                                <span className="text-sm text-red-500">
                                    {errors.email.message}
                                </span>
                            )}
                        </div>

                        {/* Password */}
                        <div className="mt-4 space-y-2">
                            <label>Password</label><br />
                            <input
                                type="password"
                                placeholder="Enter your Password"
                                className="w-80 px-3 py-1 border rounded-md outline-none"
                                {...register("password", { required: "Password is required" })}
                            />
                            <br />
                            {errors.password && (
                                <span className="text-sm text-red-500">
                                    {errors.password.message}
                                </span>
                            )}
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-around mt-4">
                            <button
                                type="submit"
                                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
                            >
                                Login
                            </button>
                            <p>
                                Not Registered?{" "}
                                <Link
                                    to="/signup"
                                    className="underline text-blue-500 cursor-pointer"
                                >
                                    Signup
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
}

export default Login;
