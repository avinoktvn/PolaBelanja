import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gray-100">
      {/* <Link href="/" className="absolute left-0 top-0 ml-12 mt-14 rounded-md border-2 border-slate-400 bg-transparent px-5 py-2 text-slate-200 hover:text-slate-200">
        Back to Home
      </Link> */}
      <div className="w-full max-w-md rounded-lg bg-white bg-opacity-60 p-8 shadow-lg">
        <div className="mb-4 flex justify-center">
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">REGISTER</h2>
        </div>
        <form className="space-y-4">
          <div>
            <input type="text" placeholder="Username" className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600" />
          </div>
          <div>
            <input
              type="email"
              name="email"
              //   value={email}
              //   onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan Email"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              //   value={password}
              //   onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan Password"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>
          <button type="submit" className="w-full rounded-md bg-gray-800 py-2 text-white transition duration-200 hover:bg-gray-600">
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center text-gray-800">
          <p>
            Have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Login here!
            </Link>
          </p>
        </div>
      </div>
    </div>
    // <div className="flex justify-center items-center h-screen bg-gray-100">
    //   <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
    //     <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>
    //     <form>
    //       <div className="mb-4">
    //         <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
    //           Username
    //         </label>
    //         <input type="text" id="username" name="username" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-500" placeholder="Enter your username" required />
    //       </div>
    //       <div className="mb-4">
    //         <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
    //           Email
    //         </label>
    //         <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-500" placeholder="Enter your email" required />
    //       </div>
    //       <div className="mb-4">
    //         <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
    //           Password
    //         </label>
    //         <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-500" placeholder="Enter your password" required />
    //       </div>
    //       <div className="mb-6">
    //         <label className="block text-gray-700 font-bold mb-2" htmlFor="confirm-password">
    //           Confirm Password
    //         </label>
    //         <input type="password" id="confirm-password" name="confirm-password" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-500" placeholder="Confirm your password" required />
    //       </div>
    //       <button type="submit" className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-600 focus:outline-none">
    //         Register
    //       </button>
    //       <button type="button" className="w-full mt-4 bg-gray-100 border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded hover:bg-gray-200 focus:outline-none">
    //         Sign Up with Google
    //       </button>
    //     </form>
    //   </div>
    // </div>
  );
}
