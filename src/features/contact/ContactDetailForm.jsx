import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Formik } from "formik"
import * as Yup from "yup"
import toast from "react-hot-toast"

const contactSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  subject: Yup.string(),
  message: Yup.string().required("Message is required"),
})

export default function ContactDetailForm() {
  return (
    <div className="flex   bg-gray-50">
      <Card className="w-full max-w-xl shadow-none border-none bg-transparent">
        {/* <CardHeader className="px-0">
          <CardTitle className="text-2xl font-semibold">
            Contact Us
          </CardTitle>
          <CardDescription>
            Have questions? We'd love to hear from you.
          </CardDescription>
        </CardHeader> */}

        <CardContent className="px-0">
          <Formik
            initialValues={{
              name: "",
              email: "",
              subject: "",
              message: "",
            }}
            validationSchema={contactSchema}
            onSubmit={(values, { resetForm }) => {
              console.log(values)
              toast.success("Message sent successfully!")
              resetForm()
            }}
          >
            {({
              values,
              handleChange,
              handleSubmit,
              errors,
              touched,
            }) => (
              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="space-y-2">
                  <Label>Your name</Label>
                  <Input
                    name="name"
                    placeholder="Abc"
                    value={values.name}
                    onChange={handleChange}
                    className="h-12 rounded-lg"
                  />
                  {errors.name && touched.name && (
                    <p className="text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Email address</Label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="abc@gmail.com"
                    value={values.email}
                    onChange={handleChange}
                    className="h-12 rounded-lg"
                  />
                  {errors.email && touched.email && (
                    <p className="text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Subject</Label>
                  <Input
                    name="subject"
                    placeholder="This is optional"
                    value={values.subject}
                    onChange={handleChange}
                    className="h-12 rounded-lg"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label>Message</Label>
                  <Textarea
                    name="message"
                    placeholder="Hi! I'd like to ask about"
                    value={values.message}
                    onChange={handleChange}
                    className="min-h-[120px] rounded-lg"
                  />
                  {errors.message && touched.message && (
                    <p className="text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  className="mt-4 rounded-full px-10"
                  variant="outline"
                >
                  Submit
                </Button>

              </form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  )
}