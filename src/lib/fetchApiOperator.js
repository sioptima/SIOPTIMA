export async function fetchOperatorDashboardData(){
    try {
      const res = await fetch(`/api/operator/dashboard/summary`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
  
      const data = await res.json();
  
      if (!res.ok || !data.success) {
        console.log(data.message || "Failed to fetch dashboard data");
        return;
      }
      return data.data;
    } catch (err) {
      console.log(err.message)
      return err;
    }
}

export async function fetchOperatorReports({limit}){
    try {
      const res = await fetch(`/api/operator/report?limit=${limit}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
  
      const data = await res.json();
  
      if (!res.ok || !data.success) {
        console.log(data.message || "Failed to fetch reports data");
        return;
      }

      return data.data;
    } catch (err) {
      console.log(err.message)
      return err;
    }
}

export async function fetchOperatorShifts({limit}){
    try {
      const res = await fetch(`/api/operator/shift?limit=${limit}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
  
      const data = await res.json();
  
      if (!res.ok || !data.success) {
        console.log(data.message || "Failed to fetch shifts data");
        return;
      }
      return data.data;
    } catch (err) {
      console.log(err.message)
      return err;
    }
}

export async function fetchOperatorAttendance({limit}){
    try {
      const res = await fetch(`/api/operator/attendance?limit=${limit}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
  
      const data = await res.json();
  
      if (!res.ok || !data.success) {
        console.log(data.message || "Failed to fetch attendance data");
        return;
      }

      return data.data;
    } catch (err) {
      console.log(err.message)
      return err;
    }
}

export async function fetchOperatorActiveAttendance(){
    try {
      const res = await fetch(`/api/operator/attendance/active`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
  
      const data = await res.json();
  
      if (!res.ok || !data.success) {
        console.log(data.message || "Failed to fetch attendance data");
        return;
      }

      return data.data;
    } catch (err) {
      console.log(err.message)
      return err;
    }
}

export async function createOperatorLibur({start, end, reason}){
    try {
      const res = await fetch("/api/operator/libur", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          start,
          end,
          reason
        }),
      });

      const data = await res.json();
 
      if (!res.ok) {
        console.log(data.message || "Failed to create libur submission");
        return;
      }
      return data.data
    } catch (err) {
      console.log("Error: ", err)
    }
  }

export async function createOperatorIjin({start, end, reason}){
    try {
      const res = await fetch("/api/operator/ijin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          start,
          end,
          reason
        }),
      });

      const data = await res.json();
 
      if (!res.ok) {
        console.log(data.message || "Failed to create ijin submission");
        return;
      }
      return data.data
    } catch (err) {
      console.log("Error: ", err)
    }
  }

  export async function fetchOperatorLibur({limit}){
    try {
      const res = await fetch(`/api/operator/libur?limit=${limit}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
  
      const data = await res.json();
  
      if (!res.ok || !data.success) {
        console.log(data.message || "Failed to fetch libur submission data");
        return;
      }

      return data.data;
    } catch (err) {
      console.log(err.message)
      return err;
    }
}

  export async function fetchOperatorTicket({limit}){
    try {
      const res = await fetch(`/api/operator/tickets?limit=${limit}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
  
      const data = await res.json();
  
      if (!res.ok || !data.success) {
        console.log(data.message || "Failed to fetch libur ticket data");
        console.log(data)
        return;
      }

      return data.data;
    } catch (err) {
      console.log(err.message)
      return err;
    }
}

  export async function fetchCurrentUser(){
    try {
      const res = await fetch(`/api/auth/current`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
  
      const data = await res.json();
  
      if (!res.ok || !data.success) {
        console.log(data.message || "Failed to fetch current user data");
        return;
      }

      return data.data;
    } catch (err) {
      console.log(err.message)
      return err;
    }
}

  export async function fetchOperatorIjin({limit}){
    try {
      const res = await fetch(`/api/operator/ijin?limit=${limit}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
  
      const data = await res.json();
  
      if (!res.ok || !data.success) {
        console.log(data.message || "Failed to fetch ijin submission data");
        return;
      }

      return data.data;
    } catch (err) {
      console.log(err.message)
      return err;
    }
}

export async function createOperatorReport(body){
  try {
    const formData = new FormData;
    Object.entries(body).forEach(([key, value]) => {
      if (value == null) return;
      // Handle files
      if (key === "images" && Array.isArray(value)) {
        value.forEach(file => {
          formData.append("images", file);
        });
        return;
      }
  
      // Everything else (string, number, etc.)
      formData.append(key, value);
    });
    const res = await fetch("/api/operator/report", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      console.log(data.message || "Failed to create report");
      return;
    }
    return data.data
  } catch (err) {
    console.log("Error: ", err)
  }
}

export async function checkIn(body){
  try {
    const res = await fetch("/api/operator/attendance/check-in", {
      method: "POST",
      body: body,
    });

    const data = await res.json();

    if (!res.ok) {
      console.log(data.message || "Failed checkin");
      return;
    }
    return data.data.transformedResult
  } catch (err) {
    console.log("Error: ", err)
  }
}

export async function checkOut(body){
  try {
    const res = await fetch("/api/operator/attendance/check-out", {
      method: "POST",
      body: body,
    });

    const data = await res.json();

    if (!res.ok) {
      console.log(data.message || "Failed checkout");
      return;
    }
    return data.data
  } catch (err) {
    console.log("Error: ", err)
  }
}

export async function createTicket(body){
  try {
    const formData = new FormData;
    Object.entries(body).forEach(([key, value]) => {
      if (value == null) return;
      // Handle files
      if (key === "images" && Array.isArray(value)) {
        value.forEach(file => {
          formData.append("images", file);
        });
        return;
      }
  
      // Everything else (string, number, etc.)
      formData.append(key, value);
    });
    const res = await fetch("/api/operator/tickets", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      console.log(data.message || "Failed checkout");
      return;
    }
    return data.data
  } catch (err) {
    console.log("Error: ", err)
  }
}
