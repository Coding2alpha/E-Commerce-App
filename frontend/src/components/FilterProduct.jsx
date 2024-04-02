import { PiForkKnife } from "react-icons/pi";

const FilterProduct = ({ category, onClick, selected }) => {
  // console.log(selected);
  return (
    <div onClick={onClick}>
      <div className="flex-row md:justify-center md:items-center  md:min-h-[30px] min-w-[75px]   mb-30 cursor-pointer">
        <div
          className={`md:text-4xl md:min-w-[0px] min-w-[85px] ${
            selected ? "text-yellow-500" : "text-black"
          }  hover:text-yellow-500`}
        >
          <PiForkKnife
            className={`${
              selected ? " bg-black" : "bg-yellow-500"
            } h-full w-full rounded-full p-6 hover:bg-black `}
          />
        </div>
        <div className="flex justify-center items-center ">
          <p className={`font-semibold ${selected ? "font-bold " : ""}`}>
            {category.toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
};
export default FilterProduct;
