import { Card, CardContent } from "@/components/ui/card";
import { useGetTop5ProductQuery } from "../products/productApi.js";
import { base } from "../../app/mainApi.js";

export default function Top5Product() {
  const { data, isLoading, error } = useGetTop5ProductQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;

  return (
    <div className="px-10 py-12">

      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold">Top Picks For You</h2>
        <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
          Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
        </p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {data?.slice(0, 4).map((item) => (
          <Card key={item._id} className="border-none shadow-none text-center">
            <CardContent className="p-4">
              <img
                src={`${base}/${item.image}`}
                alt={item.name}
                className="w-full h-[220px] object-contain mx-auto"
              />
              <h3 className="mt-4 text-sm text-gray-700">{item.name}</h3>
              <p className="font-semibold mt-2 text-lg">Rs. {item.price}.00</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}