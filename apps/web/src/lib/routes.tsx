import { Home } from "@/components/pages/home";
import RootLayout from "@/components/templates/root-layout";
import type { RouteObject } from "react-router";

const routes: RouteObject[] = [
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
		],
	},
];

export default routes;
