import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const Routers = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <h1>Not Found</h1>,
            children: [
                {
                    path: "/",
                    element: null,
                    loader: async () => {
                        return null;
                    },
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};
export default Routers;
