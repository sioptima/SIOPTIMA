export async function fetchSitesData({limit}){
    try {
      const res = await fetch(`/api/admin/site?limit=${limit}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
  
      const data = await res.json();
  
      if (!res.ok || !data.success) {
        alert(data.message || "Failed to fetch sites data");
        return;
      }
      
      return data.data;
    } catch (err) {
      console.log(err.message)
      return err;
    }
  }

export async function fetchUsersData({limit}){
    try {
      const res = await fetch(`/api/admin/user?limit=${limit}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
  
      const data = await res.json();
  
      if (!res.ok || !data.success) {
        alert(data.message || "Failed to fetch users data");
        return;
      }

      return data.data;
    } catch (err) {
      console.log(err.message)
      return err;
    }
}

export async function fetchDailyReportsData(){
    try {
      const res = await fetch(`/api/admin/report/daily-report`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
  
      const data = await res.json();
  
      if (!res.ok || !data.success) {
        alert(data.message || "Failed to fetch reports data");
        return;
      }
      
      return data.data;
    } catch (err) {
      console.log(err.message)
      return err;
    }
  }

export async function fetchReportsData({limit}){
    try {
      const res = await fetch(`/api/admin/report?limit=${limit}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
  
      const data = await res.json();
  
      if (!res.ok || !data.success) {
        alert(data.message || "Failed to fetch reports data");
        return;
      }
      
      return data.data;
    } catch (err) {
      console.log(err.message)
      return err;
    }
  }

export async function fetchTicketsData({limit}){
    try {
      const res = await fetch(`/api/admin/ticket?limit=${limit}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
  
      const data = await res.json();
  
      if (!res.ok || !data.success) {
        alert(data || "Failed to fetch tickets data");
        return;
      }
      
      return data.data;
    } catch (err) {
      console.log(err.message)
      return err;
    }
  }

  export async function fetchAttendanceData({limit}){
    try {
      const res = await fetch(`/api/hrd/attendance?limit=${limit}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
  
      const data = await res.json();
  
      if (!res.ok || !data.success) {
        alert(data || "Failed to fetch tickets data");
        return;
      }
      
      return data.data;
    } catch (err) {
      console.log(err.message)
      return err;
    }
  }

  export async function createNewSite(name, lat, lng, address, city, province, status){
    try {
      const res = await fetch("/api/admin/site", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          address: address.trim(),
          city: city.trim(),
          province: province.trim(),
          latitude: lat,
          longitude: lng,
          status: status
        }),
      });

      const data = await res.json();
 
      if (!res.ok) {
        alert(data.message || "Failed to create site");
        return;
      }
      return data.data
    } catch (err) {
      console.log("Error: ", err)
    }
  }

  export async function updateSite({name, lat, lng, address, city, province, status, id}){
    try {
      const res = await fetch(`/api/admin/site/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          address: address.trim(),
          city: city.trim(),
          province: province.trim(),
          latitude: lat,
          longitude: lng,
          status: status
        }),
      });

      const data = await res.json();
 
      if (!res.ok) {
        alert(data.message || "Failed to update site");
        return;
      }
      return data.data
    } catch (err) {
      console.log("Error: ", err)
    }
  }

  export async function deleteSite({id}){
    try {
      const res = await fetch(`/api/admin/site/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Failed to delete site");
        return;
      }
      return data
    } catch (err) {
      console.log("Error: ", err)
    }
  }

  export async function addNewUser({
    username,
    password,
    name,
    email,
    role,
    site,
    status}){
    try {
      const res = await fetch(`/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
          name: name,
          email: email,
          role: role,
          site: site,
          status: status,
        }),
      });

      const data = await res.json();
 
      if (!res.ok) {
        alert(data.message || "Failed to register user");
        return;
      }
      return data.data
    } catch (err) {
      console.log("Error: ", err)
    }
  }

  export async function editUser({
    id,
    name,
    email,
    role,
    site,
    status}){
    try {
      const res = await fetch(`/api/admin/user/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          email: email,
          role: role,
          site: site,
          status: status,
        }),
      });

      const data = await res.json();
 
      if (!res.ok) {
        alert(data.message || "Failed to edit user");
        return;
      }

      return data.data
    } catch (err) {
      console.log("Error: ", err)
    }
  }

  export async function deleteUser({id}){
    try {
      const res = await fetch(`/api/admin/user/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
 
      if (!res.ok) {
        alert(data.message || "Failed to delete user");
        return;
      }
      return data.success
    } catch (err) {
      console.log("Error: ", err)
    }
  }

  export async function approveReport({id}){
    try {
      const res = await fetch(`/api/admin/report/${id}/approve`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
 
      if (!res.ok) {
        alert(data.message || "Failed to approve a report");
        return;
      }
      return data.success
    } catch (err) {
      console.log("Error: ", err)
    }
  }

  export async function rejectReport({id}){
    try {
      const res = await fetch(`/api/admin/report/${id}/reject`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
 
      if (!res.ok) {
        alert(data.message || "Failed to reject a report");
        return;
      }
      return data.success
    } catch (err) {
      console.log("Error: ", err)
    }
  }

  export async function respondTicket({ticketId, feedback, ticketStatus}){
    try {
      const res = await fetch(`/api/admin/ticket/${ticketId}/respond`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          feedback: feedback,
          ticketStatus: ticketStatus,
        })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Failed to reject a report");
        return;
      }
      return data.data
    } catch (err) {
      console.log("Error: ", err)
    }
  }

