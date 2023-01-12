import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layouts/RootLayout";
import Home from "../views/homepage";
import Rooms from "../views/rooms";
import Contact from "../views/contact";
import Reservation from "../views/reservation";
import AboutHotel from "../views/about";
import RoomDetail from "../views/roomdetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutHotel />,
      },
      {
        path: "/rooms",
        element: <Rooms />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/roomdetail",
        element: <RoomDetail />,
      },
      {
        path: "/reservation",
        element: <Reservation />,
      },
    ],
  },
]);

export default router;
