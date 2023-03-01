import React, { useEffect, useState } from "react"

const PassParam = () => {
  const [user, setUser] = useState([])
  const value = 'TestBm'

  const fetchData = () => {
    fetch(`http://103.20.213.190/eaudit/webservices/serverdataforapp.asmx/GetReportingSupervisors?loginID=TestBm`)
      .then(response => {
        return response.json()
      })
      .catch(err=>{
        console.log(err);
    })
      .then(res => {
          var  parsedData = JSON.parse(res);
          setUser(parsedData[0].id)
         console.log(setUser)
      })
      
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <div>
    {user.map((item,index)=>(
      <div key={index}>
      <select >
      <option>
       {item.data}</option></select>
       <h1>
         {user.supervisor_list}
       </h1>
</div>
    ))}
    </div>
}
export default PassParam