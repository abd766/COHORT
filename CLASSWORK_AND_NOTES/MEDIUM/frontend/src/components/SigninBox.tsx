import { Link } from "react-router-dom";

export function SigninBox() {
  return (
    
      <div className=" flex justify-center flex-col items-center">
        <div className="bg-slate-100 flex flex-col justify-center items-center p-10 drop-shadow-2xl rounded-xl">
          <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center flex-col">
                <div className="text-black font-extrabold text-4xl">
                  Login to an Account
                </div>
                <div className="text-slate-500 text- text-lg pt-2 px-2">
                  Don't have an account? 
                  <Link className="text-slate-500 text-base underline pl-1" to={"/signup"}>
                    Signup
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-col p-2">
            

            <div className="text-black text-lg font-bold pt-2">Email</div>
            <div className="pt-2">
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                placeholder="me@example.com"
                required
              />
            </div>
            <div className="pb-4">
              <div className="text-black text-lg font-bold pt-2 pb-2">
                Password
              </div>
              <input type="password"
                className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-3"
                placeholder="Enter your Password"></input>
            </div>

            <button className="flex items-center justify-center bg-black text-white text-xl font-normal rounded-lg py-2 px-36">
              Signin
            </button>
          </div>
        </div>
      </div>
  );
}
