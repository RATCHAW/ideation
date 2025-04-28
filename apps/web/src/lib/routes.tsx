import RootLayout from "@/components/templates/root-layout";
import { RouteObject } from "react-router";


const routes: RouteObject[] = [
  {
    path: "/",
    element: (
        <RootLayout />
    ),
    
  },
];

export default routes;