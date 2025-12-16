export async function fetchSummaryData() {
  try {
      const res = await fetch("/api/admin/dashboard/summary", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
 
      if (!res.ok || !data.success) {
        console.log(data.error || "Failed to fetch summary data");
        return;
      }
      
      return data.data;
    } catch (err) {
      console.log(err.message)
      return err;
    }
}
