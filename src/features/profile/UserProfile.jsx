import { useDispatch, useSelector } from "react-redux";
import OrderList from "../orders/OrderList";
import UpdateUser from "./UpdateUser";
import { Button } from "@/components/ui/button";
import { href, useNavigate } from "react-router";
import { removeUser } from "../user/userSlice";
import AccountBanner from "@/components/account/TopBanner";
import TopBanner from "@/components/account/TopBanner";

export default function UserProfile() {
  const { user } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(removeUser());
    navigate("/"); 
  };

  return (
    <div>

      <TopBanner 
        title={'My Account'}
        paths={[
          {label: 'home', href: '/'},
          {label: 'My Account'}
        ]}/>
      <div className="grid grid-cols-[1fr_1.5fr] mt-5">

      

      <div>
        <UpdateUser user={user} />



        
      </div>
      <OrderList user={user} />

      <div className="justify-center">
        <Button
          onClick={handleLogout}
          className="mt-6 bg-black text-white rounded hover:opacity-80 transition"
        >
          Logout
        </Button>

      </div>


    </div>

    </div>
    
  )
}
