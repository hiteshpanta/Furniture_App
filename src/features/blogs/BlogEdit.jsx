import { useParams } from "react-router"
import BlogEditForm from "./BlogEditForm";
import { useGetBlogQuery } from "./blogApi";

export default function BlogEdit() {
  const { id } = useParams();
  const { isLoading, error, data } = useGetBlogQuery(id);
  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h1 className="text-pink-950">{error}</h1>

  return (
    <>

      <h1 className="text-2xl font-bold">Product Edit</h1>
      <BlogEditForm blog={data.blog} />



    </>
  )
}
