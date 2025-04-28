import { trpc } from "@/lib/trpc";
import { useQuery } from "@tanstack/react-query";

const RootLayout = () => {
    const healthCheck = useQuery(trpc.healthCheck.queryOptions());


    return (<section className="rounded-lg border p-4">
        <h2 className="mb-2 font-medium">API Status</h2>
        <div className="flex items-center gap-2">
            <div
                className={`h-2 w-2 rounded-full ${healthCheck.data ? "bg-green-500" : "bg-red-500"
                    }`}
            />
            <span className="text-sm text-muted-foreground">
                {healthCheck.isLoading
                    ? "Checking..."
                    : healthCheck.data
                        ? "Connected"
                        : "Disconnected"}
            </span>
        </div>

    </section>)
}

export default RootLayout