import { Heart, Search, ShoppingCart, User } from "lucide-react"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

import AdminHeader from "./AdminHeader"
import { useSearchParams } from "react-router"

export default function Header() {
  const { user } = useSelector((state) => state.userSlice)
  const [isSearchOpen, setSearchOpen] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [params, setPrams] = useSearchParams()


  useEffect(() => {
    const existing = params.get('search') || ''
    setSearchValue(existing)
  }, [params])


  useEffect(() => {
    if (!isSearchOpen) return
    const handler = setTimeout(() => {
      if (searchValue) {
        setPrams({ search: searchValue, page: 1 })
      } else {
        setPrams({})
      }
    }, 500)
    return () => clearTimeout(handler)
  }, [searchValue, setPrams, isSearchOpen])

  const isAdmin = user?.role === "admin"

  return (
    <>
      <header className="bg-transparent">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-20 items-center justify-between">

            <div className="w-1/4" />

            {!isAdmin ? (
              <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-black">
                <NavLink to="/" className="hover:text-gray-500 transition">
                  Home
                </NavLink>
                <NavLink to="/shop" className="hover:text-gray-500 transition">
                  Shop
                </NavLink>
                <NavLink to="/about" className="hover:text-gray-500 transition">
                  About
                </NavLink>
                <NavLink to="/contact" className="hover:text-gray-500 transition">
                  Contact
                </NavLink>
              </nav>
            ) : (
              <AdminHeader />
            )}


            <div className="flex w-1/4 items-center justify-end gap-6 text-black">

              <NavLink
                to={user ? "/profile" : "/login"}
                className="hover:opacity-70 transition"
              >
                <User className="h-5 w-5" />
              </NavLink>

              <Search
                onClick={() => setSearchOpen((prev) => !prev)}
                className="h-5 w-5 cursor-pointer hover:opacity-70 transition"
              />


              {isSearchOpen && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setPrams({ search: searchValue, page: 1 })
                  }}
                  className="flex items-center ml-4"
                >
                  <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Search products..."
                    className="border px-2 py-1 rounded focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="ml-2 text-gray-600 hover:text-black"
                  >
                    Go
                  </button>
                </form>
              )}


              <NavLink
                to="/wishlist"
                className="hover:opacity-70 transition"
              >
                <Heart className="h-5 w-5" />
              </NavLink>


              <NavLink
                to="/cart-box"
                className="hover:opacity-70 transition"
              >
                <ShoppingCart className="h-5 w-5" />
              </NavLink>

            </div>
          </div>
        </div>
      </header>

    </>
  )
}