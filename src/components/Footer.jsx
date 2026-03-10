export default function Footer() {
  return (
    <footer className="px-15 w-full bg-[#f5f5f5] text-gray-700">
      <div className="mx-auto max-w-7xl px-6 py-16">
        
       
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          

          <div className="text-sm leading-6">
            <p>400 University Drive Suite 200</p>
            <p>Coral Gables,</p>
            <p>FL 33134 USA</p>
          </div>


          <div>
            <h3 className="text-sm font-semibold mb-6 text-gray-500">Links</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="/" className="hover:text-black">Home</a></li>
              <li><a href="/shop" className="hover:text-black">Shop</a></li>
              <li><a href="/about" className="hover:text-black">About</a></li>
              <li><a href="/contact" className="hover:text-black">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-6 text-gray-500">Help</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="/contact" className="hover:text-black">Payment Options</a></li>
              <li><a href="#" className="hover:text-black">Returns</a></li>
              <li><a href="#" className="hover:text-black">Privacy Policies</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-6 text-gray-500">Newsletter</h3>
            <div className="flex items-center border-b border-gray-400 pb-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="bg-transparent outline-none text-sm flex-1 placeholder-gray-400"
              />
              <button className="text-sm font-semibold text-black ml-4">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        <div className="border-t mt-16 pt-6 text-sm text-gray-600">
          2022 Meubel House. All rights reserved
        </div>

      </div>
    </footer>
  )
}