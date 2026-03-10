import { mainApi } from "../../app/mainApi";




const blogApi = mainApi.injectEndpoints({

  endpoints: (builder) => ({


    getBlog: builder.query({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: 'GET'
      }),
      providesTags: ['blog']
    }),

    getBlogs: builder.query({
      query: (query) => ({
        url: '/blogs',
        method: 'GET',
        params: query
      }),
      providesTags: ['blog']
    }),
    
    createBlog: builder.mutation({
      query: (data) => ({
        url: '/blogs',
        method: 'POST',
        headers: {
          Authorization: data.token
        },
        body: data.body
      }),
      invalidatesTags: ['blog']
    }),

    updateBlog: builder.mutation({
      query: (data) => ({
        url: `/blogs/${data.id}`,
        method: 'PATCH',
        headers: {
          Authorization: data.token
        },
        body: data.body
      }),
      invalidatesTags: ['blog']
    }),

    removeBlog: builder.mutation({
      query: (data) => ({
        url: `/blogs/${data.id}`,
        method: 'DELETE',
        headers: {
          Authorization: data.token
        },
      }),
      invalidatesTags: ['blog']
    }),
    // addReview: builder.mutation({
    //   query: (data) => ({
    //     url: `/products/reviews/${data.id}`,
    //     method: 'POST',
    //     headers: {
    //       Authorization: data.token
    //     },
    //     body: data.body
    //   }),
    //   invalidatesTags: ['Product']
    // }),

    // getReviews: builder.query({
    //   query: (id) => ({
    //     url: `/products/reviews/${id}`,
    //     method: 'GET'
    //   }),
    //   providesTags: ['Product']
    // }),


  })
});

export const { useGetBlogQuery, useGetBlogsQuery,useCreateBlogMutation, useUpdateBlogMutation, useRemoveBlogMutation } = blogApi;