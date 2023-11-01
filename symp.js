import './symp.css';
import { useState } from 'react';
// import axios from 'axios';
import onProposalsLoad from './fnbconnect';
import { onPropose } from './fnbconnect';
import axios from 'axios';

 const New=()=>{

  const[information,setInformation]=useState("")

  const[Symposium,setSymposium]=useState({
    "Stu_name":"",
    "College_name":"",
    "Year":"",
    "Course":"",
    "Email_id":"",
    "Contact":0,
    "Event_type":" "
  })

  console.log(Symposium)
  const[proposal,setProposal]=useState([])

  const fillPorposals=async(Symp_id)=>{
    const temp = await onProposalsLoad(Symp_id)
    setProposal(temp)
}
console.log(Symposium)
// console.log(typeof(Symposium.Event_type))

const infoCollect=(eve)=>{
  const{name,value}=eve.target
  setSymposium((old)=>{
      if(name==="Stu_name"||name==="College_name"||name==="Year"||name==="Course"||name==="Email_id"||name==="Contact"||name==="Event_type"){
          return{
              ...old,
              [name]:value
          }
      }
      else if(name==="Symp_id"){
          fillPorposals(value)
          return{
              ...old,
              [name]:parseInt(value)
          }
      }
      else{
          return{
              ...old,
              [name]:parseInt(value)
          }
      }
  })
}

const callPropose=async()=>{
  // const temp = await onPropose(Symposium)
  await axios.post(`http://localhost:2056/new`,Symposium)
  // setInformation(temp.message)
}

    return(


<>
<div className="background"/>
<div className="College_name">
    <h1 style={{color: 'blue', marginBottom: 0}} align="center" className="head1">MUTHAYAMMAL ENGINEERING COLLEGE</h1>
    <h3 align="center" className="head2" style={{marginTop: 0, marginBottom: 0}}>(An Atonomous Institution)</h3>
    <h3 align="center" className="head3">Approved by AICTE Acceredited by NAAC,Nba &amp; Affilated By Anna University</h3>
    <hr />
  </div>

  <div className='bgstyle'>
  <div className="symp_head" align="center">
    <h2>SYMPOSIUM REGISTRATION FORM</h2>
  </div>



<div classname="Symp_data" align="center">
    <form method="post">
      <label><b>COMPUTER SCIENCE DEPARTMENT<br/></b></label><table cellPadding="10px" cellSpacing="px">
        <br/>
        <br/>
        <tbody><tr>
            <td>
              <label><b>NAME</b></label>
            </td><td><input type="text" name="Stu_name" value={Symposium.Stu_name} onChange={infoCollect} placeholder="Full Name" /></td>
          </tr>
          <tr>
            <td>
              <label><b>COLLEGE NAME</b></label>
            </td><td>  <input type="text" name="College_name" value={Symposium.College_name} onChange={infoCollect} placeholder="College Name" /></td>
          </tr>
          <tr>
            <td>
              <label><b>YEAR</b></label>
              </td><td>  <input type="text" name="Year" value={Symposium.Year} onChange={infoCollect} placeholder="Year" /></td>
          </tr>
          <tr>
            <td>
                <label><b>DEPARTMENT</b></label>
            </td><td><input type="text" name="Course" value={Symposium.Course} onChange={infoCollect} placeholder="Department Name" /></td>
          </tr>
          <tr>
            <td>
              <label><b>EMAIL ID</b></label>
            </td><td><input type="email" name='Email_id' value={Symposium.Email_id} onChange={infoCollect} placeholder="Email ID" /></td>
          </tr>
          <tr>
          </tr><tr>
            <td>
              <label><b>CONTACT</b></label>
            </td><td> <input type="tel" name="Contact" value={Symposium.Contact} onChange={infoCollect} placeholder="Mobile Number" /></td>
          </tr>
          </tbody></table>
    </form>
    <form>
        <table cellPadding="10px" cellSpacing="px">
            <tbody>
          <tr>
            <td>
              <label><b>TECHNICAL EVENT:</b></label>
            </td>
          </tr>
          <tr><td><input type="radio" name="Event_type" value="Paper Presentation" onChange={infoCollect} />PAPER PRESENTATION</td></tr>
          <tr><td><input type="radio" name="Event_type" value="Project" onChange={infoCollect} />PROJECT PRESENTATION</td></tr>
          <tr><td><input type="radio" name="Event_type" value="Codigo" onChange={infoCollect} />CODIGO</td></tr>
          <tr><td><input type="radio" name="Event_type" value="Quiz" onChange={infoCollect} />QUIZ</td></tr>
          <tr>
            <td>
              <label><b>NON TECHNICAL EVENT</b></label>
            </td>
          </tr>
          <tr><td><input type="radio" name="Event_type" value="IPL Auction" onChange={infoCollect} />IPL AUCTION</td></tr>
          <tr><td><input type="radio" name="Event_type" value="Dialogue Finding" onChange={infoCollect} />DIALOGUE FINDING</td></tr>
          <tr><td><input type="radio" name="Event_type" value="Sherlock Holmes" onChange={infoCollect} />SHERLOCK HOLMES</td></tr>
         <br></br>
            {/* <tr><td><button style={{align:'center',marginBlockStart:'10px',marginInlineStart:'50px'} }>Submit</button></td></tr> */}
          <tr><td><input type='button' onClick={callPropose} value="Submit" />
          <input type='button' value={'reset'} onClick={()=>{
                            setSymposium(()=>{
                              return{
                                "Stu_name":"",
                                "College_name":"",
                               "Year":"",
                               "Course":"",
                                "Email_id":"",
                                "Contact":0,
                               "Event_type":""

                              }
                             })
                            }}/>
          
          </td></tr>

          </tbody>
          </table>
   </form>
  </div> 
  </div>
</>
    )
}
export default New