
export const Fetch =()=>{async function getProfile(){
  try {
    const response = await fetch(`http://103.20.213.190/eaudit/webservices/serverdataforapp.asmx?op=GetReportingSupervisors`,{
      method: 'GET',  
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TestBm}`
      },
    })
    const data = await response.json();
    console.log(data)
    return data.profile
  } catch (error) {
    console.log('Oops Something Went Wrong! Could not get that user profile.');
  }
}
}