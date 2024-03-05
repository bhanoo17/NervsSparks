import React from "react";

function UserSignup() {

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
    <>
      <div className="bg-gray-50 pt-10 pb-6 dark:bg-gray-900">
        <div className="flex justify-center">
          <div className="text-2xl font-bold text-gray-900">Vehi-X-World</div>
        </div>
        <section>
          <div className="mx-auto flex flex-col items-center justify-center px-6 py-1 lg:py-0">
            <div className="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0 dark:border dark:border-gray-700 dark:bg-gray-800">
              <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Join Us Now !
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input onChange={inputHandler}
                      type="email"
                      name="email"
                      id="email"
                      className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg 
                      border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:border-gray-600
                       dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500
                        dark:focus:ring-blue-500"
                      placeholder="name@company.com"
                      required=""
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input onChange={inputHandler}
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border
                       border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:border-gray-600
                        dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500
                         dark:focus:ring-blue-500"
                      required=""
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="location"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Location
                    </label>
                    <input onChange={inputHandler}
                      type="text"
                      name="location"
                      id="location"
                      placeholder="Location"
                      className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border
                       border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:border-gray-600
                        dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500
                         dark:focus:ring-blue-500"
                      required=""
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="UserInfo"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      User-Info
                    </label>
                    <input onChange={inputHandler}
                      type="password"
                      name="User-Info"
                      id="User-Info"
                      placeholder="User-Info"
                      className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border
                       border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:border-gray-600
                        dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500
                         dark:focus:ring-blue-500"
                      required=""
                    />
                  </div>

                  <div className="flex items-center mb-4">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 
                      w-4 rounded border border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700
                       dark:ring-offset-gray-800"
                      required=""
                    />
                    <label
                      htmlFor="remember"
                      className="ml-2 text-sm text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>

                  <button onClick={postData}
                    type="submit"
                    className="w-full rounded-lg bg-blue-500 px-4 py-2 text-center text-xl font-medium text-white transition 
                   duration-300 ease-in-out transform hover:bg-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500 
                   focus:ring-opacity-50 active:bg-blue-700"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default UserSignup;
