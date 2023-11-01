import axios  from "axios"
const url="http://localhost:2056"
// const onProposalsLoad=async(dept_id)=>{
const onProposalsLoad=async(Symp_id)=>{
    
    // alert(dept_id)
    const returned=await axios.get(`${url}/list`)
    let ids=[]
        returned.data.rows.map((v)=>{
            ids.push(v)
        })
        return ids  
}

  
export const onPropose=async(obj)=>{


    // alert(JSON.stringify(obj))
    const returned = await axios.post(`${url}/new`,obj)
    return returned.data
}

export default onProposalsLoad