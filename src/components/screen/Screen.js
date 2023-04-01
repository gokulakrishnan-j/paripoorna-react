import React, { useEffect,useState } from 'react'
import "./screen.css"
import MonitorIcon from '@mui/icons-material/Monitor';
import RefreshIcon from '@mui/icons-material/Refresh';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { API } from '../../global/connect';

function Screen() {
    const [user,setUser] = useState([])
    const [student,setStudent] = useState([])
    const [glopal,setGlobal] = useState()
    const [glopalFilter,setGlobalFilter] = useState()
    const [screen,setScreen] = useState(true)
    const [pagination,setPagination] = useState(1)

var userData = [];
var studentData = []

    useEffect(()=>{
    fetch(`${API}/data/user`)
    .then((data)=>data.json())
    .then((values)=>setUser(values))

        fetch(`${API}/data/student`)
        .then((data)=>data.json())
        .then((values)=>setStudent(values))

},[])

if(user.length>0 || student.length>0){
userData = user.filter((u,index)=>{
    if(parseInt(pagination) === 1 && index <6){
        return u 
    }
    else if(parseInt(pagination) === 2 && index>5 && index<10){
        return u
    }
    else if(parseInt(pagination) === 3 && index>9 && index<14){
        return u
    }
    else if(parseInt(pagination) === 4 && index>13 && index<18){
        return u
    }
    else if(parseInt(pagination) === 5 && index>17 && index<22){
        return u
    }
    else if(parseInt(pagination) === 6 && index>21 && index<26){
        return u
    }
    else if(parseInt(pagination) === 7 && index>25 && index<30){
        return u
    }
    else if(parseInt(pagination) === 8 && index>29 && index<34){
        return u
    }
    else if(parseInt(pagination) === 9 && index>33 && index<38){
        return u
    }
    else if(parseInt(pagination) === 10 && index>37 && index<42){
        return u
    }
})
studentData = student.filter((u,index)=>{
    if(parseInt(pagination) === 1 && index <6){
        return u 
    }
    else if(parseInt(pagination) === 2 && index>5 && index<10){
        return u
    }
    else if(parseInt(pagination) === 3 && index>9 && index<14){
        return u
    }
    else if(parseInt(pagination) === 4 && index>13 && index<18){
        return u
    }
    else if(parseInt(pagination) === 5 && index>17 && index<22){
        return u
    }
    else if(parseInt(pagination) === 6 && index>21 && index<26){
        return u
    }
    else if(parseInt(pagination) === 7 && index>25 && index<30){
        return u
    }
    else if(parseInt(pagination) === 8 && index>29 && index<34){
        return u
    }
    else if(parseInt(pagination) === 9 && index>33 && index<38){
        return u
    }
    else if(parseInt(pagination) === 10 && index>37 && index<42){
        return u
    }
})

}

if(glopal){
  userData =  user.filter((n)=> n.name.startsWith(glopal[0].toUpperCase()+glopal.slice(1))||n.company.startsWith(glopal[0].toUpperCase()+glopal.slice(1))||n.salary.startsWith(glopal[0].toUpperCase()+glopal.slice(1))||n.country.startsWith(glopal[0].toUpperCase()+glopal.slice(1)))
  studentData = student.filter((n)=>n.name.startsWith(glopal[0].toUpperCase()+glopal.slice(1))||n.number.startsWith(glopal[0].toUpperCase()+glopal.slice(1))||n.city.startsWith(glopal[0].toUpperCase()+glopal.slice(1)))
}
if( glopal && glopalFilter){
    setGlobalFilter(null)
}
if(glopalFilter){


    if(glopalFilter === "Sorting"){
        userData = user.filter((u,index)=>{
            if(parseInt(pagination) === 1 && index <6){
                return u 
            }
            else if(parseInt(pagination) === 2 && index>5 && index<10){
                return u
            }
            else if(parseInt(pagination) === 3 && index>9 && index<14){
                return u
            }
            else if(parseInt(pagination) === 4 && index>13 && index<18){
                return u
            }
            else if(parseInt(pagination) === 5 && index>17 && index<22){
                return u
            }
            else if(parseInt(pagination) === 6 && index>21 && index<26){
                return u
            }
            else if(parseInt(pagination) === 7 && index>25 && index<30){
                return u
            }
            else if(parseInt(pagination) === 8 && index>29 && index<34){
                return u
            }
            else if(parseInt(pagination) === 9 && index>33 && index<38){
                return u
            }
            else if(parseInt(pagination) === 10 && index>37 && index<42){
                return u
            }
        })
        studentData = student.filter((u,index)=>{
            if(parseInt(pagination) === 1 && index <6){
                return u 
            }
            else if(parseInt(pagination) === 2 && index>5 && index<10){
                return u
            }
            else if(parseInt(pagination) === 3 && index>9 && index<14){
                return u
            }
            else if(parseInt(pagination) === 4 && index>13 && index<18){
                return u
            }
            else if(parseInt(pagination) === 5 && index>17 && index<22){
                return u
            }
            else if(parseInt(pagination) === 6 && index>21 && index<26){
                return u
            }
            else if(parseInt(pagination) === 7 && index>25 && index<30){
                return u
            }
            else if(parseInt(pagination) === 8 && index>29 && index<34){
                return u
            }
            else if(parseInt(pagination) === 9 && index>33 && index<38){
                return u
            }
            else if(parseInt(pagination) === 10 && index>37 && index<42){
                return u
            }
        })
    }else{
   
   if(screen){
    
     userData = user.sort((a,b)=>{
       
        if(glopalFilter === "Name"){
            var fa = a.name.toLowerCase()
        var fb =b.name.toLowerCase()
        }
        if(glopalFilter === "Company"){
            var fa = a.company.toLowerCase()
        var fb =b.company.toLowerCase()
        }
        if(glopalFilter === "Salary"){
            var fa = a.salary.toLowerCase()
        var fb =b.salary.toLowerCase()
        }
        if(glopalFilter === "Country"){
            var fa = a.country.toLowerCase()
        var fb =b.country.toLowerCase()
        }

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;

    })}else{

    studentData = student.sort((a,b)=>{
       
        if(glopalFilter === "Name"){
            var fa = a.name.toLowerCase()
        var fb =b.name.toLowerCase()
        }
        if(glopalFilter === "Number"){
            var fa = a.number
        var fb =b.number
        }
        if(glopalFilter === "City"){
            var fa = a.city.toLowerCase()
        var fb =b.city.toLowerCase()
        }
        

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;

    })
}
    }
}
const refresh=()=>{
    window.location.reload()
}

  return (
    <div>
        <nav className='navBar'>
            <div className='navFirst' style={{justifyContent:screen?'flex-end':null}}>
            {screen?null:<button className='refreshButton' onClick={()=>refresh()}><RefreshIcon/></button>}
        {screen?<button className='screenButton'   onClick={()=>setScreen(false)}>Screen 1 <MonitorIcon /></button>:<button className='screenButton'   onClick={()=>setScreen(true)}>Screen 2 <MonitorIcon/></button>}
       
        </div>
        <div className='navSecond'>
            <div>
            <label htmlFor="globalInput" className='globalFilterLabel'>Global Filter : </label>
          
            <input id='globalInput' value={glopal} placeholder='Search here....' className='serachBar' onChange={(e)=>setGlobal(e.target.value)}/>
            </div>
            {screen? <div>
            <select className='dropdownBox' onClick={(e)=>setGlobalFilter(e.target.value)}>
                <option>Sorting</option>
                <option>Name</option>
                <option>Company</option>
                <option>Salary</option>
                <option>Country</option>
            </select>
        </div>:<div>
            <select className='dropdownBox'  onClick={(e)=>setGlobalFilter(e.target.value)}>
                <option>Sorting</option>
                <option>Name</option>
                <option>Number</option>
                <option>City</option>
            </select>
        </div>}
        </div>
        </nav>
       {screen?<div className='screensBox'>
       
       
        <table className='table'>
            <thead>
            <tr className='tr'>
                <th className='th'>S.No</th>
                <th className='th'>Name</th>
                <th className='th'>Company</th>
                <th className='th'>Salary</th>
                <th className='th'>Country</th>
                <th className='th'>Profile</th>
                
                
            </tr>
            </thead>
            {userData.map((n,index)=>(
               <tbody key={index}>
            <tr >
                <td className='td'>{index+1}</td>
                <td className='td'>{n.name.toUpperCase()}</td>
                <td className='td'>{n.company}</td>
                <td className='td'>$ {n.salary} K</td>
                <td className='td'>{n.country}</td>
                <td className='td'><img className='profileImg' src={n.avatar} alt='Profile'/></td>
                
                
            </tr>
            </tbody>
     ))}
        </table>
        </div>:
        <div className='screensBox'>
            
        
        <table className='table'>
            <thead>
            <tr className='tr'>
                <th className='th'>S.No</th>
                <th className='th'>Name</th>
                <th className='th'>Number</th>
                <th className='th'>City</th>
                <th className='th'>Profile</th>

                
            </tr>
            </thead>
            {studentData.map((n,index)=>(
                <tbody key={index}>
            <tr  >
                <td className='td'>{index+1}</td>
                <td className='td'>{n.name.toUpperCase()}</td>
                <td className='td'>{n.number}</td>
                <td className='td'>{n.city}</td>
                <td className='td'><img className='profileImg' src={n.avatar} alt='Profile'/></td>
                
            </tr>
            </tbody>

            ))}
        </table>
        </div>
}
<footer className='footer'>
<Stack spacing={2}>
      <Pagination count={10} onClick={(e)=>setPagination(e.nativeEvent.srcElement.innerText)} color="primary" hidePrevButton hideNextButton/>
      
    </Stack>
    </footer>
    </div>
  )
}

export default Screen