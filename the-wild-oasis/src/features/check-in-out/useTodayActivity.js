import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

export function useTodayActivity() {
  const { isLoading, data: activities } = useQuery({
    queryFn: getStaysTodayActivity,
    queryKey: ["today-activity"],
    staleTime: 5 * 60 * 1000, // Optional: Cache data for 5 minutes
    cacheTime: 10 * 60 * 1000, // Optional: Keep data in cache for 10 minutes
  });
  return { activities, isLoading };
}
