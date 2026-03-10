export default function FeatureSection() {
  return (
    <section className="bg-[#f3eaea] py-14">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
        
        <div>
          <h3 className="font-semibold text-lg">Free Delivery</h3>
          <p className="text-sm text-gray-600 mt-2">
            For all orders over $50, consectetur adipiscing elit.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">90 Days Return</h3>
          <p className="text-sm text-gray-600 mt-2">
            If goods have problems, consectetur adipiscing elit.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Secure Payment</h3>
          <p className="text-sm text-gray-600 mt-2">
            100% secure payment, consectetur adipiscing elit.
          </p>
        </div>

      </div>
    </section>
  )
}