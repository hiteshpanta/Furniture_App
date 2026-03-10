import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Formik } from "formik"
import * as Yup from "yup"
import { Spinner } from "@/components/ui/spinner"
import toast from "react-hot-toast"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { useUpdateBlogMutation } from "./blogApi"
import TopBanner from "@/components/account/TopBanner"
import { base } from "@/app/mainApi"

const valSchema = Yup.object({
  title: Yup.string().min(4).required(),
  content: Yup.string().min(10).required(),
  tags: Yup.string().required(),
  image: Yup.mixed()
})

export default function BlogAddForm({blog}) {

  const nav = useNavigate()
  const { user } = useSelector((state) => state.userSlice)
  const [updateBlog, { isLoading }] = useUpdateBlogMutation()

  return (
    <div className="max-w-7xl mx-auto p-6">

        <TopBanner 
        title="Blog"
        paths={[
            { label: "Admin", href: "/" },
            { label: "Blog" }
        ]}/>

      <Formik
        initialValues={{
          title: blog.title,
          slug: blog.slug,
          content: blog.content,
          tags: blog.tags,
          image: "",
          imagePreview: blog.image
        }}
        validationSchema={valSchema}

        onSubmit={async (val) => {
            try {

                const formData = new FormData()

                formData.append("title", val.title)
                formData.append("content", val.content)
                formData.append("tags", val.tags)
                formData.append("slug", val.slug)

                if (val.image) {
                formData.append("image", val.image)
                }

                await updateBlog({
                token: user.token,
                body: formData,
                id: blog._id
                }).unwrap()

                toast.success("Blog updated successfully")
                nav(-1)

            } catch (err) {
                toast.error(err.data.message)
            }
            }}
      >

        {({ handleChange, handleSubmit, values, setFieldValue, errors, touched }) => (

          <form onSubmit={handleSubmit} className="mt-5 grid grid-cols-3 gap-6">


            <div className="col-span-2 space-y-6">

                <Card>
                    <CardContent className="p-6 space-y-4">

                    <div>
                        <Label>Title *</Label>
                        <Input
                        name="title"
                        value={values.title}
                        onChange={handleChange}
                        id="title"
                        className={"mt-1"}
                        />
                        {touched.title && errors.title && (
                        <p className="text-red-500 text-sm">{errors.title}</p>
                        )}
                    </div>

                    <div>
                        <Label>Slug *</Label>
                        <Input
                        name="slug"
                        value={values.slug}
                        onChange={handleChange}
                        id="slug"
                        className={"mt-1"}
                        />
                    </div>

                    <div>
                        <Label>Content *</Label>
                        <Textarea
                        name="content"
                        rows={10}
                        value={values.content}
                        className={"mt-1"}
                        onChange={handleChange}
                        />
                        {touched.content && errors.content && (
                        <p className="text-red-500 text-sm">{errors.content}</p>
                        )}
                    </div>


                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <div>
                            <Label>Tags *</Label>
                            <Input
                            name="tags"
                            value={values.tags}
                            onChange={handleChange}
                            className={"mt-1"}
                            placeholder="#fyp"
                            />
                            {touched.tags && errors.tags && (
                            <p className="text-red-500 text-sm">{errors.tags}</p>
                            )}
                        </div>
                    </CardContent>
                </Card>
                

                </div>

            
            <div className="space-y-6">

              <Card>
                <CardHeader>
                  <CardTitle>Featured Image</CardTitle>
                </CardHeader>

                <CardContent>

                  <Input
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files[0]
                      setFieldValue("image", file)
                      setFieldValue(
                        "imagePreview",
                        URL.createObjectURL(file)
                      )
                    }}
                  />

                    {values.imagePreview && !errors.image && <img className="p-2 w-full h-36" src={!values.image ? `${base}/${values.imagePreview}` : values.imagePreview} alt="" />}
                  

                </CardContent>
              </Card>

              {/* <Card>
                <CardHeader>
                  <CardTitle>Author</CardTitle>
                </CardHeader>

                <CardContent>
                  <Input value={user?.name} disabled />
                </CardContent>
              </Card> */}


              <Card>
                <CardHeader>
                  <CardTitle>Update</CardTitle>
                </CardHeader>

                <CardContent>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? <Spinner /> : "Update Blog"}
                  </Button>

                </CardContent>
              </Card>

            </div>

          </form>

        )}

      </Formik>

    </div>
  )
}