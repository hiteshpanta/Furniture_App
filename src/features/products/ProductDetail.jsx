import { useParams } from "react-router"
import { useGetProductQuery } from "./productApi";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { base } from "../../app/mainApi";
import AddToCart from "../carts/AddToCart";
import ReviewForm from "../reviews/ReviewForm";
import ReviewList from "../reviews/ReviewList";
import { useSelector } from "react-redux";
import StarRating from "../reviews/StarRating.jsx";
import { ProductBreadcrumb } from "./ProductBredcrumb";
import { ProductCarousel } from "./ProductCarosoul";
import CheckOutBilling from "../carts/CheckOutBilling";

export default function ProductDetail() {
  const { user } = useSelector((state) => state.userSlice);
  const { id } = useParams();
  const { isLoading, error, data } = useGetProductQuery(id);
  if (isLoading) return <DotLottieReact
    src="/loading.lottie"
    loop
    autoplay
  />
  if (error) return <h1 className="text-pink-500">{error?.error || error.data?.message}</h1>



  return (
    <div >
      <div className="px-15">
        <div>
        <ProductBreadcrumb title={data.product.title} />
      </div>
      <div className=" max-w-7xl mx-auto grid grid-cols-3 mt-11 gap-10">
        <div>
          <ProductCarousel />
        </div>
        <div>
          <img height={100} src={`${base}/${data.product.image}`} alt="" />
        </div>
        <div className="space-y-4 mt-5">
          <h1>{data.product.title}</h1>
          <StarRating value={data.product.rating} />
          <p className="text-zinc-500">Price:- {data.product.price}</p>
          <p className="text-zinc-500">Stock:- {data.product.stock}</p>
          <p className="text-zinc-700">{data.product.detail}</p>
          <hr />
          <div>
            {/* <CheckOutBilling product={data.product}/> */}
            <AddToCart product={data.product} />
          </div>
        </div>

      </div>
      <div className="p-5 mt-4">

        {user && user.role === 'user' && <ReviewForm id={id} user={user} />}


        <ReviewList id={id} />

      </div>
      </div>

      <hr className="mt-10 border"/>

      <div className="mt-10 px-10">
        <div className="flex space-x-10 justify-center">
          <h6 className="font-medium">Description</h6>
          <h6 className="font-medium text-gray-400">Addition Information</h6>
          <h6 className="font-medium text-gray-400">Reviews [{}]</h6>
        </div>
        <div className="mt-5 flex justify-center px-10">
          {data.product.detail}
        </div>


      </div>

      <hr className="mt-10 border"/>

      <div className="mt-8 px-10">
        <h1 className="font-medium flex justify-center">Related Products</h1>
        <div>

        </div>
      </div>


      

      



    </div>
  )
}
