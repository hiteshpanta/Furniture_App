import React from "react";
import { useGetBlogsQuery } from "./blogApi";
import TopBanner from "@/components/account/TopBanner";
import { base } from "@/app/mainApi";
import { User2Icon, CalendarDays, Tag } from "lucide-react";
import FeatureSection from "@/components/account/FeatureSection";
import { Input } from "@/components/ui/input";

export default function BlogPage() {
  const { isLoading, error, data } = useGetBlogsQuery();

  if (isLoading) return <div className="p-10">Loading...</div>;
  if (error) return <div className="text-red-500 p-10">Something went wrong</div>;

  return (
    <div>
      <TopBanner
        title="Blog"
        paths={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />

      <div className="mt-16 px-16 grid grid-cols-3 gap-10">
        
        <div className="col-span-2">
          {data?.blogs?.map((item) => (
            <div key={item._id} className="mb-12">

              <img
                className="w-full rounded-lg"
                src={`${base}/${item.image}`}
                alt={item.title}
              />


              <div className="flex items-center gap-6 text-gray-500 text-sm mt-4">
                <div className="flex items-center gap-2">
                  <User2Icon size={16} />
                  <span>{item.username}</span>
                </div>

                <div className="flex items-center gap-2">
                  <CalendarDays size={16} />
                  <span>{new Date(item.createdAt).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        })}
                    </span>
                </div>

                <div className="flex items-center gap-2">
                  <Tag size={16} />
                  <span>{item.tags}</span>
                </div>
              </div>


              <h2 className="text-2xl font-semibold mt-4">
                {item.title}
              </h2>

              <p className="text-gray-500 mt-3 line-clamp-3">
                {item.content}
              </p>

              <div className="mt-4">
                <a
                  href={`/blog/${item._id}`}
                  className="font-medium text-black"
                >
                  Read more
                </a>
                <div className="w-16 border-b-2 border-black mt-1"></div>
              </div>
            </div>
          ))}
        </div>


        <div className="space-y-10">


          <div>
            <Input placeholder="Search..." />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>

            <ul className="space-y-3 text-gray-600">
              <li className="flex justify-between">
                <span>Crafts</span>
                <span>2</span>
              </li>

              <li className="flex justify-between">
                <span>Design</span>
                <span>8</span>
              </li>

              <li className="flex justify-between">
                <span>Handmade</span>
                <span>7</span>
              </li>

              <li className="flex justify-between">
                <span>Interior</span>
                <span>1</span>
              </li>

              <li className="flex justify-between">
                <span>Wood</span>
                <span>6</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>

            <div className="space-y-4">
              {data?.blogs?.slice(0, 5).map((post) => (
                <div key={post._id} className="flex gap-3">
                  <img
                    src={`${base}/${post.image}`}
                    className="w-16 h-16 object-cover rounded"
                  />

                  <div>
                    <p className="text-sm font-medium line-clamp-2">
                      {post.title}
                    </p>
                    <span className="text-xs text-gray-400">
                      {post.CreatedAt}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="mt-20">
        <FeatureSection />
      </div>
    </div>
  );
}