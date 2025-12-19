export async function fetchUsersWithRoleData({limit, role}){
    try {
      const res = await fetch(`/api/hrd/user?limit=${limit}&role=${role}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
  
      const data = await res.json();
  
      if (!res.ok || !data.success) {
        console.log(data.message || "Failed to fetch users data");
        return;
      }

      return data.data;
    } catch (err) {
      console.log(err.message)
      return err;
    }
}

export async function fetchAllShifts({limit=50}){
    try {
      const res = await fetch(`/api/hrd/shift/all?limit=${limit}`, {
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

export async function fetchAttendance({limit=50}){
    try {
      const res = await fetch(`/api/hrd/attendance?limit=${limit}`, {
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

export async function fetchHrdSummary(){
    try {
      const res = await fetch(`/api/hrd/dashboard`, {
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

export async function fetchLeaveRequest(){
    try {
      const res = await fetch(`/api/hrd/leave`, {
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

export async function addShift({
  date,
  time,
  end,
  userId,
  siteId
}){
  try {
    const res = await fetch(`/api/hrd/shift`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        date,
        time,
        end,
        userId,
        siteId
      })
    });

    const data = await res.json();

    if (!res.ok) {
      console.log(data.message || "Failed to approve a report");
      return;
    }
    return data.success
  } catch (err) {
    console.log("Error: ", err)
  }
}

export async function approveAttendance({id}){
  try {
    const res = await fetch(`/api/hrd/attendance/${id}/approve`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });

    const data = await res.json();

    if (!res.ok) {
      console.log(data.message || "Failed to approve a report");
      return;
    }
    return data.success
  } catch (err) {
    console.log("Error: ", err)
  }
}

export async function rejectAttendance({id}){
  try {
    const res = await fetch(`/api/hrd/attendance/${id}/reject`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });

    const data = await res.json();

    if (!res.ok) {
      console.log(data.message || "Failed to reject a report");
      return;
    }
    return data.success
  } catch (err) {
    console.log("Error: ", err)
  }
}

export async function approveLeave({id, type}){
  try {
    const res = await fetch(`/api/hrd/${type}/${id}/approve`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    if (!res.ok) {
      console.log(data.message || "Failed to approve leave");
      return;
    }
    return data.success
  } catch (err) {
    console.log("Error: ", err)
  }
}

export async function rejectLeave({id, type}){
  try {
    const res = await fetch(`/api/hrd/${type}/${id}/reject`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    if (!res.ok) {
      console.log(data.message || "Failed to reject leve");
      return;
    }
    return data.success
  } catch (err) {
    console.log("Error: ", err)
  }
}