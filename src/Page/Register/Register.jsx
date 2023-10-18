import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import Navbar from "../Home/Navbar/Navbar";
import { updateProfile } from "firebase/auth";


const Register = () => {
  const { googleSignIn, createUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const handleSocialSign = (media) => {
    media()
      .then((res) => {
        console.log(res.user);
        navigate(location?.state ? location.state : "/");
        Swal.fire({
            title: 'Registered!',
            text: 'Register successfully!',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const name = form.get("name");
    const url = form.get("url");
    console.log(email, password, name, url);

    if (password.length < 6) {
        Swal.fire({
            title: 'Error!',
            text: 'Password must have 6 character',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
      return;
    } else if (!/[A-Z]/.test(password)) {
        Swal.fire({
            title: 'Error!',
            text: 'Need one capital later',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
      return;
    } else if (!/[\W_]/.test(password)) {
        Swal.fire({
            title: 'Error!',
            text: 'Need special character',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
      return;
    }
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        Swal.fire({
            title: 'Success!',
            text: 'User created',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        navigate(location?.state ? location.state : "/");
        updateProfile(res.user, { 
            displayName: name,
            photoURL: url,
            }).then(() => {});
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({ 
            title: 'Error!',
            text: err.message,
            icon: 'error',
            confirmButtonText: 'Cool'
          })
      });
  };
  return (
    <div>
        <Navbar></Navbar>
        <div className="flex items-center justify-center my-12">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={handleRegister} className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Register in to our platform
          </h5>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="John bodis"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Img URL
            </label>
            <input
              type="text"
              name="url"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="https://example.com/jane-q-user/profile.jpg"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Lost Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register a new account
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Already registered?{" "}
            <Link
              className="text-blue-700 hover:underline dark:text-blue-500"
              to="/login"
            >
              Login here
            </Link>
          </div>
        </form>
        <button
          onClick={() => handleSocialSign(googleSignIn)}
          className="w-full mx-auto btn my-10"
        >
          <FaGoogle></FaGoogle>Sign In With Google
        </button>
      </div>
    </div>
    </div>
  );
};

export default Register;
