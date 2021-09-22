import { useState } from 'react';
import linkedin from './linkedin.png'
import usersFromJson from './users.json';
import React from 'react';
import './App.css';

// const newUsers = {
//   firstName: "",
//   lastName: "",
//   campus: "",
//   role: "",
//}


function App() {
  const [users, setUser] = useState(usersFromJson)
  //const [linkedin, setLinkedin] = useState(linkedin)
  const [search, setSearch] = useState("")
  //const [serchFilter, setSearchFilter] = useState("")
  const [teacher, setTeacher] = useState(false)
  const [student, setStudent] = useState(false)
  const [campus, setCampus] = useState('campus')



  const searchHandler = event => {
    console.log(event)
    setSearch(event.target.value)
  }

  // const teacherCheckboxHandler = event => {
  //   console.log(event)
  //   setTeacher(event.target.value)
  // }

  let filteredUsers = users.filter(user => {
    //console.log(filteredUsers)
    return `${user.firstName} ${user.lastName}`.toLowerCase().includes(search)
  }) 

  const handleTeacherChange = event => {
    setTeacher(event.target.checked)
  }
  if (teacher) {
    filteredUsers = filteredUsers.filter(user => {
      return user.role === 'teacher';
    })
  }


  const handleStudentChange = event => {
    setStudent(event.target.checked)
  }
  if (student) {
    filteredUsers = filteredUsers.filter(user => {
      return user.role === 'student';
    })
  }


  const handleCampusChange = event => {
    setCampus(event.target.value)
  }
  if (campus !== 'campus') {
    filteredUsers = filteredUsers.filter(user => {
      return campus === user.campus;
    })
  }
  
  const userList = filteredUsers.map(user => {
      return (
      <tr>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.campus}</td>
        <td>{user.role}</td>
        <td>{user.linkedin && <img src={linkedin} alt="linkedin" width="40" height="40"/>}</td>
      </tr>
      )
  

})

 
  return (
    <div class="App">
      <h1>all the users</h1>
      <label htmlFor="search"></label>
          <input type="text" name="search" id="search" value = {search} onChange={searchHandler}/>

      <label htmlFor="teacher">Teacher</label>
          <input type="checkbox" name="teacher" id="teacher" checked={teacher} onChange={handleTeacherChange} /> 

      <label htmlFor="student">Student</label>
          <input type="checkbox" name="Student" id="student"
          checked={student} onChange={handleStudentChange}/> 



      <label htmlFor="campus">Campus:</label>
          <select name="campus" id="campus" onChange={handleCampusChange}>
              <option value="All Campuses">Campus</option>
              <option value="Berlin">Berlin</option>
              <option value="Lisbon">Lisbon</option>
              <option value="Paris">Paris</option>
          </select>    
    

      <table className="tableMain">
        <thead>
          <tr>
            <td>Firstname</td>
            <td>Lastname</td>
            <td>Campus</td>
            <td>Role</td>
          </tr>
        </thead>

        <tbody>
            {userList}
        </tbody>

      </table>
    </div>
  );
}

export default App;