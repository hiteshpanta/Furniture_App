import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Formik } from "formik"
import * as Yup from "yup"
import { useNavigate } from "react-router"
import { useSelector } from "react-redux"
import { payWithEsewa } from "./EsewaPaymentfunction"

const checkoutSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  province: Yup.string().required("Required"),
  zip: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
})

export default function CheckoutForm() {

  const nav = useNavigate()

  const { carts } = useSelector((state) => state.cartSlice)

  const total = carts.reduce((acc, item) => acc + item.price, 0)

  return (

    <div className="max-w-7xl mx-auto px-6 py-16">

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          country: "",
          address: "",
          city: "",
          province: "",
          zip: "",
          phone: "",
          email: "",
          notes: "",
          payment: "bank",
        }}

        validationSchema={checkoutSchema}

        onSubmit={async (val) => {

          try {

            const formData = new FormData()

            formData.append("firstname", val.firstName)
            formData.append("lastname", val.lastName)
            formData.append("country", val.country)
            formData.append("address", val.address)
            formData.append("city", val.city)
            formData.append("province", val.province)
            formData.append("zip", val.zip)
            formData.append("phone", val.phone)
            formData.append("email", val.email)
            formData.append("notes", val.notes)
            formData.append("payment", val.payment)

            console.log(val)


            nav("/checkout")

          } catch (err) {

            console.log(err)

          }

        }}
      >

        {({
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          setFieldValue
        }) => (

          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-16"
          >

            {/* LEFT SIDE FORM */}

            <div className="space-y-6">

              <h2 className="text-2xl font-semibold mb-6">
                Billing details
              </h2>

              <div className="grid grid-cols-2 gap-4">

                <div>
                  <Label>First Name</Label>
                  <Input
                    name="firstName"
                    type="text"
                    value={values.firstName}
                    onChange={handleChange}
                    className="h-12 mt-2"
                  />
                  {errors.firstName && touched.firstName && (
                    <p className="text-red-500 text-sm">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <Label>Last Name</Label>
                  <Input
                    name="lastName"
                    type="text"
                    value={values.lastName}
                    onChange={handleChange}
                    className="h-12 mt-2"
                  />
                  {errors.lastName && touched.lastName && (
                    <p className="text-red-500 text-sm">{errors.lastName}</p>
                  )}
                </div>

              </div>

              <div>
                <Label>Country / Region</Label>
                <Input
                  name="country"
                  type="text"
                  value={values.country}
                  onChange={handleChange}
                  className="h-12 mt-2"
                />
              </div>

              <div>
                <Label>Street address</Label>
                <Input
                  name="address"
                  type="text"
                  value={values.address}
                  onChange={handleChange}
                  className="h-12 mt-2"
                />
              </div>

              <div>
                <Label>Town / City</Label>
                <Input
                  name="city"
                  type="text"
                  value={values.city}
                  onChange={handleChange}
                  className="h-12 mt-2"
                />
              </div>

              <div>
                <Label>Province</Label>
                <Input
                  name="province"
                  type="text"
                  value={values.province}
                  onChange={handleChange}
                  className="h-12 mt-2"
                />
                {touched.province && errors.province && (
                  <p className="text-red-500 text-sm">{errors.province}</p>
                )}
              </div>

              <div>
                <Label>ZIP code</Label>
                <Input
                  name="zip"
                  type="text"
                  value={values.zip}
                  onChange={handleChange}
                  className="h-12 mt-2"
                />
                {touched.zip && errors.zip && (
                  <p className="text-red-500 text-sm">{errors.zip}</p>
                )}
              </div>

              <div>
                <Label>Phone</Label>
                <Input
                  name="phone"
                  type="text"
                  value={values.phone}
                  onChange={handleChange}
                  className="h-12 mt-2"
                />
              </div>

              <div>
                <Label>Email address</Label>
                <Input
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  className="h-12 mt-2"
                />
              </div>

              <div>
                <Textarea
                  name="notes"
                  placeholder="Additional information"
                  value={values.notes}
                  onChange={handleChange}
                  className="min-h-[100px] mt-2"
                />
              </div>

            </div>




            <Card className="h-fit p-6">

              <CardContent className="space-y-6">

                <div className="flex justify-between">
                  <span className="font-medium">Product</span>
                  <span className="font-medium">Subtotal</span>
                </div>

                {carts.map((item) => (

                  <div key={item.id}>

                    <div className="flex justify-between text-muted-foreground">
                      <span>{item.title}</span>
                      <span>${item.price}</span>
                    </div>

                  </div>

                ))}

                <div className="flex justify-between font-semibold text-yellow-600 text-lg">
                  <span>Total</span>
                  <span>${total}</span>
                </div>


                <div className="space-y-4 pt-4 border-t">

                  <RadioGroup
                    value={values.payment}
                    onValueChange={(val) => setFieldValue("payment", val)}
                  >

                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cod" id="cod" />
                      <Label htmlFor="cod">Cash On Delivery</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="esewa" id="esewa" />
                      <Label htmlFor="esewa">Pay with eSewa</Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button
                  type="submit"
                  className="w-full mt-6 rounded-full"
                >
                  Place order
                </Button>

              </CardContent>

            </Card>

          </form>

        )}

      </Formik>

    </div>

  )
}