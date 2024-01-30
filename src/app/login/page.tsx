"use client";
import Link from "next/link";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  rememberMe: Yup.boolean().required("Please indicate your preference"), // Add validation for rememberMe
});

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: true,
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log("Values: ", values);
      signIn("credentials", {
        email: values.email,
        password: values.password,
        callbackUrl: "/dashboard",
      });
    },
  });
  return (
    <div className="flex w-full py-8 items-center justify-center text-gray-600">
      <div className="relative">
        <div className="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
          <div className="flex-auto p-6">
            <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
              <a
                href="#"
                className="flex cursor-pointer items-center gap-2 text-indigo-500 no-underline hover:text-indigo-500"
              >
                <span className="flex-shrink-0 text-3xl font-black uppercase tracking-tight opacity-100">
                  Mi6.
                </span>
              </a>
            </div>
            <h4 className="mb-2 font-medium text-gray-700 xl:text-xl">
              Welcome to Mi6!
            </h4>
            <p className="mb-6 text-gray-500">
              Please sign-in to access your account
            </p>
            <form className="mb-4" onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <button className="mt-8 flex w-full items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition hover:border-transparent hover:bg-black hover:text-white focus:ring-2">
                  <img
                    className="mr-2 h-5"
                    src="/assets/icons/google.svg"
                    alt="Google"
                  />{" "}
                  Get started with Google
                </button>
              </div>
              <div className="relative mt-8 mb-8 flex h-px place-items-center bg-gray-200">
                <div className="absolute left-1/2 h-6 -translate-x-1/2 bg-white px-4 text-center text-sm text-gray-500">
                  Or use email instead
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between">
                  <label
                    className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                    htmlFor="email"
                  >
                    Email
                  </label>
                </div>
                <div className="relative flex w-full flex-wrap items-stretch">
                  <input
                    type="email"
                    id="email"
                    className={`relative block flex-auto cursor-text appearance-none rounded-md border ${
                      formik.touched.email && formik.errors.email
                        ? "border-red-500"
                        : "border-gray-400"
                    } py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow`}
                    name="email"
                    placeholder="ali@example.com"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </div>
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-600">{formik.errors.email}</div>
                )}
              </div>
              <div className="mb-4">
                <div className="flex justify-between">
                  <label
                    className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                    htmlFor="password"
                  >
                    Password
                  </label>
                </div>
                <div className="relative flex w-full flex-wrap items-stretch">
                  <input
                    type="password"
                    id="password"
                    className={`relative block flex-auto cursor-text appearance-none rounded-md border ${
                      formik.touched.password && formik.errors.password
                        ? "border-red-500"
                        : "border-gray-400"
                    } py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow`}
                    name="password"
                    placeholder="••••••••"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                </div>
                {formik.touched.password && formik.errors.password && (
                  <div className="text-red-600">{formik.errors.password}</div>
                )}
                <div className="flex justify-end">
                  <a
                    href="auth-forgot-password-basic.html"
                    className="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500"
                  >
                    <small className=" ">Forgot Password?</small>
                  </a>
                </div>
              </div>
              <div className="mb-4">
                <div className="block">
                  <input
                    className="mt-1 mr-2 h-5 w-5 appearance-none rounded border border-gray-300 bg-contain bg-no-repeat align-top text-black shadow checked:bg-indigo-500 focus:border-indigo-500 focus:shadow"
                    type="checkbox"
                    id="remember-me"
                    name="rememberMe"
                    checked={formik.values.rememberMe}
                    onChange={formik.handleChange}
                  />
                  <label className="inline-block" htmlFor="remember-me">
                    {" "}
                    Remember Me{" "}
                  </label>
                  {formik.touched.rememberMe && formik.errors.rememberMe && (
                    <div className="text-red-600">
                      {formik.errors.rememberMe}
                    </div>
                  )}
                </div>
              </div>
              <div className="mb-4">
                <button
                  className="grid w-full cursor-pointer select-none rounded-md border border-indigo-500 bg-indigo-500 py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                  type="submit"
                >
                  Sign in
                </button>
              </div>
            </form>
            <p className="mb-4 text-center">
              New on Mi6?
              <Link
                href="/signup"
                className="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500"
              >
                {" "}
                Create an account{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
