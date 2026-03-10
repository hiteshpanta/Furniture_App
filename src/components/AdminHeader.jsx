import { NavLink } from "react-router-dom"
import { LayoutDashboard, Package, Users, Settings } from "lucide-react"

export default function AdminHeader() {
  return (
    <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-black">
      
      <NavLink
        to="/admin-panel"
        className="flex items-center gap-2 hover:text-gray-500 transition"
      >
        <LayoutDashboard className="h-4 w-4" />
        Dashboard
      </NavLink>

      <NavLink
        to="/blog"
        className="flex items-center gap-2 hover:text-gray-500 transition"
      >
        <Package className="h-4 w-4" />
        Blog
      </NavLink>

      <NavLink
        to="/users"
        className="flex items-center gap-2 hover:text-gray-500 transition"
      >
        <Users className="h-4 w-4" />
        Users
      </NavLink>

      

    </nav>
  )
}