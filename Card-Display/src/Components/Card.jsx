import React from 'react'
import { RxCross2 } from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import { deleteData } from '../feature/products/productSlice';

const Card = ({product}) => {
  
  const {id, title, description, img, body} = product;
  
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log("Delete is Done");
    console.log(id);
    dispatch(deleteData(id));
  }

  return (
    <div className="xl:w-[25%] xl:h-[45rem]  mx-2 my-4 flex items-center justify-center flex-col px-3 shadow-md rounded-lg bg-white lg:w-[37%] lg:h-[48rem] md:w-[35%] md:h-[45rem] sm:w-[95%] sm:h-[40rem] xs:w-[90%] xs:h-[50rem] p-3">
      <div className="xl:w-full xl:h-[55%] flex items-start justify-around flex-col md:w-full md:h-[55%] lg:w-full lg:h-[55%] xs:w-full xs:h-[55%] sm:w-full sm:h-[55%]">
        <div className="w-full h-[20%] flex items-center justify-end pt-2">
          <button
            className="text-red-700 font-bold text-center text-4xl"
            onClick={() => handleDelete(id)}
          >
            <RxCross2 />
          </button>
        </div>
        <div className="w-full h-[80%] flex items-start justify-around flex-col px-4">
          <h2 className="text-5xl font-bold">
            {/* Sed Volutpat vitae id eleifend.... */}
            {title}
          </h2>
          <p className="text-xl font-semibold">
            {/* Lorem, ipsum dolor. lorem... */}
            {body}
          </p>
          {/* <h6 className="text-lg font-bold text-slate-400">
            Mon, 21 Dec 2020 14:57 GMT

            </h6> */}
        </div>
      </div>
      <div className="xl:w-full xl:h-[45%] flex items-center justify-center px-4 ">
        <img
          src="https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp"
          // src={img}
          className="xl:w-[100%] xl:h-[90%] rounded-lg"
          alt="noImg"
        />
      </div>
    </div>
  );
}

export default Card