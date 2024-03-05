import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function UserLogin() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Getting User Data from Login form
  function inputHandler(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  async function postData(e) {
    e.preventDefault(); 
  
    try {
      const res = await fetch('/user/login', {
        method: "POST",
        headers:{
          'Content-Type' : "application/json"
        },
        body: JSON.stringify({
          email: user.email,
          password: user.password 
        })
      });
  
      const data = await res.json();
      console.log(data);
      
    } catch (error) {
      console.error("Error:", error);
    }
  }
  

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="flex justify-center">
        <div className="text-2xl font-bold text-white">Vehi-X-World</div>
      </div>
      <section>
        <div className="mx-auto flex flex-col items-center justify-center px-6 py-2 md:h-screen lg:py-0">
          <div className="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0 dark:border dark:border-gray-700 dark:bg-gray-800">
            <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="name@company.com"
                    required=""
                    value={user.email}
                    onChange={inputHandler}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    required=""
                    value={user.password}
                    onChange={inputHandler}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a href="#" className="text-primary-600 dark:text-primary-500 text-sm font-medium hover:underline">
                    Forgot password?
                  </a>
                </div>

                <button onClick={postData}
                    className="w-full rounded-lg bg-blue-500 px-4 py-2 text-center text-xl font-medium text-white transition 
                   duration-300 ease-in-out transform hover:bg-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500 
                   focus:ring-opacity-50 active:bg-blue-700"
                >
                Sign in
              </button>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link to="/user/signup" className="text-primary-600 dark:text-primary-500 font-medium hover:underline">
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserLogin;



// async function postData(e) {
//   e.preventDefault(); // Prevent the default form 

//   try {
//     // const res = await axios.post("user/login", {
//     //   email: user.email,
//     //   password: user.password,
//     // });
//     const res = await fetch('/user/login', {
//       method: "POST",
//       headers:{
//         'Content-Type' : "application/json"
//       },
//       body: JSON.stringify({
//         email, password
//       })
//     })

//     const data = await res.json();
//     console.log(data);
    
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
