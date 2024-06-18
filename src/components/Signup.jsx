import React,{useState} from 'react'
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import AppServices from '../services/index';


  

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    fullNames: Yup.string().required("Full Names is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    class:Yup.string().required('class is required')
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      setLoading(true);
      setError('');
      const response = await AppServices.studentRegister(values);
      if (response?.status === 201) {
        setLoading(false);
        navigate('/studentLogin');
        resetForm();
      } else {
        setLoading(false);
        setError(response?.message || 'Error occurred while logging in');
      }
    } catch (submissionError) {
      setLoading(false);
      setError(submissionError?.message || 'An error occurred');
    }
  };

  const formik = useFormik({
    initialValues: { email: '', password: '',fullNames:"",class:""},
    validationSchema,
    onSubmit: handleSubmit,
  });

  const { handleChange, handleBlur, handleSubmit: submitForm, values, errors, touched } = formik;
  return (
    <section className="bg-blue-500 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign Up 
            </h1>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <form className="space-y-4 md:space-y-6  gap-4 w-full h-fit " onSubmit={submitForm}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Full Names
                </label>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fullNames}
                  type=""
                  name="fullNames"
                  id="fullNames"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John Doe"
                  required=""
                />
                {touched.fullNames && errors.fullNames && <div className="text-red-500 text-sm">{errors.fullNames}</div>}
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
                {touched.email && errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
              </div>

             

              
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
                {touched.password && errors.password && <div className="text-red-500 text-sm">{errors.password}</div>}
              </div>
           
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Class
                </label>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.class}
                  type=""
                  name="class"
                  id="class"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Year ... B"
                  required=""
                />
                {touched.nationalId && errors.nationalId && <div className="text-red-500 text-sm">{errors.nationalId}</div>}
              </div>


              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                      Remember me
                    </label>
                  </div>
                </div>
                <a href="/" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                {loading ? 'Signing In...' : 'Sign in'}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account yet?{' '}
                <a href="/studentLogin" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Sign in
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup