import ReactDOM from "react-dom/client"
import "./index.css"
import "./styles/bootstrap.min.css"
import "./styles/owl.carousel.min.css"
import "./styles/gijgo.css"
import "./styles/slicknav.css"
import "./styles/animate.min.css"
import "./styles/magnific-popup.css"
import "./styles/fontawesome-all.min.css"
import "./styles/themify-icons.css"
import "./styles/slick.css"
import "./styles/nice-select.css"
import "./styles/style.css"
import "./styles/responsive.css"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Landing from "./pages/landing"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />)
