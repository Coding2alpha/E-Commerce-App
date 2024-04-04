import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="">
      <div className=" mt-20 bg-green-200 flex-col w-full max-w-md m-auto h-40 flex justify-center items-center font-semibold text-lg">
        <p>Payment Successfully done</p>
        <Link to="/home">
          <p className=" underline text-blue-800">Go To Home</p>
        </Link>
      </div>
    </div>
  );
};
export default Success;
