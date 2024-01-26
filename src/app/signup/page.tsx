import Link from "next/link";

const Signup = () => {
  return (
    <div className="flex w-screen flex-wrap text-slate-800">
      <div className="relative hidden h-screen select-none flex-col justify-center bg-blue-600 text-center md:flex md:w-1/2">
        <div className="mx-auto py-16 px-8 text-white xl:w-[40rem]">
          <p className="my-6 text-3xl font-semibold leading-10">
            Create and find channels to{" "}
            <span className="mx-auto block w-56 whitespace-nowrap rounded-lg text-white">
              get connected
            </span>
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            necessitatibus nostrum repellendus ab totam.
          </p>
          <a
            href="#"
            className="font-semibold tracking-wide text-white underline underline-offset-4"
          >
            Learn More
          </a>
        </div>
        <img
          className="mx-auto w-11/12 max-w-lg rounded-lg object-cover"
          src="/images/SoOmmtD2P6rjV76JvJTc6.png"
          alt="Demo Img"
        />
      </div>
      <div className="flex w-full flex-col md:w-1/2 bg-white">
        <div className="flex justify-center pt-12 md:justify-start md:pl-12">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            {" "}
            MI6.{" "}
          </Link>
        </div>
        <div className="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
          <p className="text-center text-3xl font-bold md:text-left md:leading-tight">
            Create your free account
          </p>
          <p className="mt-6 text-center font-medium md:text-left">
            Already using MI6?{" "}
            <Link
              href="/login"
              className="whitespace-nowrap font-semibold text-indigo-500"
            >
              Login here
            </Link>
          </p>
          <button className="mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition hover:border-transparent hover:bg-black hover:text-white focus:ring-2">
            <img
              className="mr-2 h-5"
              src="/assets/icons/google.svg"
              alt="Google"
            />{" "}
            Get started with Google
          </button>
          <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
            <div className="absolute left-1/2 h-6 -translate-x-1/2 bg-white px-4 text-center text-sm text-gray-500">
              Or use email instead
            </div>
          </div>
          <form className="flex flex-col items-stretch pt-3 md:pt-8">
            <div className="flex flex-col pt-4">
              <div className="relative flex overflow-hidden">
                <input
                  type="text"
                  id="login-name"
                  className="block w-full cursor-text appearance-none rounded-md border border-gray-400 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="flex flex-col pt-4">
              <div className="relative flex overflow-hidden">
                <input
                  type="email"
                  id="login-email"
                  className="block w-full cursor-text appearance-none rounded-md border border-gray-400 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col pt-4">
              <div className="relative flex overflow-hidden">
                <input
                  type="password"
                  id="login-password"
                  className="block w-full cursor-text appearance-none rounded-md border border-gray-400 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                  placeholder="Password (minimum 8 characters)"
                />
              </div>
            </div>
            <div className="block">
              <input
                className="mr-2 h-5 w-5 appearance-none rounded border border-gray-300 bg-contain bg-no-repeat align-top text-black shadow checked:bg-blue-600 focus:border-blue-600 focus:shadow"
                type="checkbox"
                id="remember-me"
                style={{
                  backgroundImage: `url(&quot;data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 10l3 3l6-6'/%3e%3c/svg%3e&quot;)`,
                }}
                defaultChecked
              />
              <label className="inline-block" htmlFor="remember-me">
                {" "}
                I agree to the{" "}
                <a className="underline" href="#">
                  Terms and Conditions
                </a>
              </label>
            </div>
            <button
              className="mt-6 grid w-full cursor-pointer select-none rounded-md border border-indigo-500 bg-indigo-500 py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
              type="submit"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
