import React from "react";
import { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { ImageToBase64 } from "../utility/ImageToBase64";
import { toast } from "react-hot-toast";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: "",
  });

  const handleOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setProduct((product) => {
      return {
        ...product,
        [name]: value,
      };
    });
  };

  const uploadImage = async (e) => {
    e.preventDefault();
    // console.log(e.target.files[0]);
    const data = await ImageToBase64(e.target.files[0]);
    // console.log(data);
    setProduct((product) => {
      return {
        ...product,
        image: data,
      };
    });
  };

  const handleOnsubmit = async (e) => {
    e.preventDefault();
    // console.log(product);
    const { name, category, image, price, description } = product;
    if (name && category && image && price && description) {
      const token = localStorage.getItem("token");
      // console.log(token);
      const res = await fetch(
        `${import.meta.env.VITE_APP_SERVER_DOMAIN}/product/addProduct`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(product),
        }
      );
      const data = await res.json();
      console.log(data.msg);
      setProduct({
        name: "",
        category: "",
        image: "",
        price: "",
        description: "",
      });
    } else {
      toast("Please Provide Required Fields");
    }
  };

  const role = localStorage.getItem("role");
  if (!role) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="items-center text-4xl">You Are Not An Admin</h1>
      </div>
    );
  }

  return (
    <div className="margin:auto justify-center items-center flex flex-col my-3">
      <h1 className="text-4xl text">Only Admin Can Add Product</h1>
      <div className="margin:auto justify-center max-w-md w-full flex flex-col bg-slate-200 my-3 shadow-md">
        <form
          className="flex flex-col mx-2 my-2 text-xl"
          onSubmit={handleOnsubmit}
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="h-8"
            onChange={handleOnChange}
            value={product.name}
          />
          <label htmlFor="category" className="mt-2">
            Category
          </label>
          <select
            name="category"
            onChange={handleOnChange}
            value={product.category}
            className="h-8"
          >
            <option value={"other"}>select category</option>
            <option value={"fruits"}>Fruits</option>
            <option value={"vegetable"}>Vegetable</option>
            <option value={"iceCream"}>Icream</option>
            <option value={"dosa"}>Dosa</option>
            <option value={"pizza"}>Pizza</option>
            <option value={"rice"}>rice</option>
            <option value={"cake"}>Cake</option>
            <option value={"burger"}>Burger</option>
            <option value={"panner"}>Panner</option>
            <option value={"sandwich"}>Sandwich</option>
          </select>
          <label htmlFor="image" className="mt-2">
            Image
            <div className="h-40 w-full bg-slate-100 flex justify-center items-center shadow-md rounded">
              {product.image ? (
                <img
                  src={product.image}
                  className="h-full"
                  alt="Product Image"
                />
              ) : (
                <div className="text-6xl">
                  <IoCloudUploadOutline />
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                name="image"
                id="image"
                className="h-8 hidden"
                onChange={uploadImage}
              />
            </div>
          </label>
          <label htmlFor="name" className="mt-2">
            Price
          </label>
          <input
            type="text"
            name="price"
            className="h-8"
            value={product.price}
            onChange={handleOnChange}
          />
          <label htmlFor="description" className="mt-2">
            Description
          </label>
          <textarea
            onChange={handleOnChange}
            value={product.description}
            name="description"
            className="h-15 rows={2} resize-none bg-slate-100 flex justify-center items-center drop-shadow-sm"
          ></textarea>
          <button className="bg-red-500 hover:bg-red-600 text-white text-lg font-medium my-2 drop-shadow">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddProduct;
