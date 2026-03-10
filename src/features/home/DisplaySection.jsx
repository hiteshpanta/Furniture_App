export default function DisplaySection() {
  return (
    <section className="w-full bg-[#e8d8a8]">

      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          <div className="max-w-xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-semibold text-black leading-tight">
              Rocket single <br /> seater
            </h1>

            <button className="relative text-black font-medium group">
              Shop Now
              <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-black transition-transform duration-300 scale-x-100 group-hover:scale-x-0 origin-left"></span>
            </button>
          </div>

          <div className="md:mt-0">
            <img
              src="src/assets/disp-chair.jpg" 
              alt="Rocket single seater"
              className="w-[400px] md:w-[500px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}