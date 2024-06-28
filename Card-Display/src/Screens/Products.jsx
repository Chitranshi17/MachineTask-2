import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import Card from "../Components/Card";
import { getProductData } from "../feature/products/productSlice";
import Pagination from "../Components/Pagination/Pagination";

const Products = () => {

  
  const { allProduct, isLoading, isSuccess, isError } = useSelector(
    (state) => state.products
  );

  const [currentPage, setCurrentPage] = useState(1);

  const [perPageData, setPerPageData] = useState(6);

  const lastCardIndex = currentPage * perPageData;

  const firstCardIndex = lastCardIndex - perPageData;

  const CurrentCards = allProduct.slice(firstCardIndex, lastCardIndex)



  console.log(allProduct);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductData());
  }, []);

  return (
    <div className="xl:w-full xl:h-auto flex items-center justify-center bg-blue-50 py-3 flex-col md:w-full md:h-auto  lg:w-full lg:h-auto sm:w-full sm:h-auto xs:w-full xs:h-auto">
      <div className="xl:w-[95%] xl:h-auto flex items-center justify-around flex-wrap my-9 md:w-[95%] md:h-auto lg:w-[95%] lg:h-auto xs:w-[95%] xs:h-auto sm:w-[95%] sm:h-auto ">
        {CurrentCards.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>

      <Pagination
        totalCard={allProduct.length}
        perPageData={perPageData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Products;
