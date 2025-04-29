import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NuqsAdapter } from "nuqs/adapters/react";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/providers/theme-provider.tsx";
import routes from "./lib/routes.tsx";
import { queryClient } from "./lib/trpc.ts";

const router = createHashRouter(routes);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				<NuqsAdapter fullPageNavigationOnShallowFalseUpdates>
					<div lang="en" className="grid grid-rows-[auto_1fr] h-svh">
						<RouterProvider router={router} />
					</div>
				</NuqsAdapter>
				<Toaster richColors />
			</ThemeProvider>
			<ReactQueryDevtools position="bottom" buttonPosition="bottom-right" />
		</QueryClientProvider>
	</StrictMode>,
);
