
const ErrorPage = ({ errorCode, errorMessage }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full md:w-2/3 lg:w-1/2">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Error {errorCode}</h1>
        <p className="text-lg text-gray-700 mb-4">{errorMessage}</p>
        <a
          href="/"
          className="text-blue-500 hover:underline transition duration-300"
        >
          Go back to the homepage
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
