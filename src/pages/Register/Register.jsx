import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post("http://localhost:5000/register", data);
      const { token } = response.data;
      localStorage.setItem('token', token);
      console.log(response);
      reset();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'User registration completed ',
        showConfirmButton: false,
        timer: 1500
      })
    } catch (error) {
      console.error("Registration error", error);
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: `Registration error: ${error.response.data.message}`,
        showConfirmButton: false,
        timer: 1500
      })
    }
  };

  return (
    <div className="bg-gray-500 py-5">
      <h3 className="text-5xl font-semibold text-center mb-10">
        Please Register
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-1/2 mx-auto bg-gray-800 p-20 rounded-lg"
      >
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block mb-2 font-medium text-white"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="role" className="block mb-2 font-medium text-white">
            Role
          </label>
          <select
            id="role"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("role", { required: true })}
          >
            <option value="Owner">House Owner</option>
            <option value="Renter">House Renter</option>
          </select>
          {errors.role && (
            <span className="text-red-500">{errors.role.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block mb-2 font-medium text-white"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("number", {
              required: "Phone number is required",
              pattern: {
                value: /^(\+880|0)1\d{9}$/,
                message: "Please enter a valid Bangladeshi phone number.",
              },
            })}
          />
          {errors.number && (
            <span className="text-red-500">{errors.number.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-medium text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block mb-2 font-medium text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                message:
                  "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>

        <div className="text-center">
          <input
            className="bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 mt-3"
            type="submit"
            value="Register"
          />
          <button type="submit">Register</button>
        </div>
      </form>
      <p className="text-center py-5 text-lg font-medium text-white">
        Already Registered User?{" "}
        <span className="text-primary">
          <Link to="/login">Please Login</Link>
        </span>
      </p>
    </div>
  );
};

export default Register;
