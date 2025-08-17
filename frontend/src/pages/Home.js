import '../css/Home.css'
import React, { useEffect , useState} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { fetchAllPublicComplaints,
  fetchAllPublicComplaintsOfStudents,
  fetchAllPublicComplaintsOfProfessors,
  fetchAllPublicComplaintsOfSupportingStaffs } from '../redux/actions/publicComplaintActions';
import { fetchAllPrivateComplaints } from '../redux/actions/privateComplaintActions';
import ComplaintFeed from '../components/ComplaintFeed';

  const Home = () => {
    const dispatch = useDispatch();
    const publicComplaints =useSelector((state)=>state.publicComplaint.publicComplaints);
    const publicComplaintsByStudents =useSelector((state)=>state.publicComplaint.publicComplaintsByStudents);
    const publicComplaintsByProfessors =useSelector((state)=>state.publicComplaint.publicComplaintsByProfessors);
    const publicComplaintsBySupportingStaffs =useSelector((state)=>state.publicComplaint.publicComplaintsBySupportingStaffs);
    const privateComplaints=useSelector((state)=>state.privateComplaints.privateComplaints);

    const [complaintType,setComplaintType]=useState('all');

    useEffect(()=>{
      dispatch(fetchAllPublicComplaints());
      dispatch(fetchAllPublicComplaintsOfStudents());
      dispatch(fetchAllPublicComplaintsOfProfessors());
      dispatch(fetchAllPublicComplaintsOfSupportingStaffs());
      dispatch(fetchAllPrivateComplaints());
    },[dispatch]);

    const handleClick=(value)=>{
      setComplaintType(value);
    }


  return (
    <main className='home'>
      <nav className='home_nav'>
        <p onClick={()=>handleClick("all")}>All Complaints</p>
        <p onClick={()=>handleClick("student")}>Students Complaints</p>
        <p onClick={()=>handleClick("professor")}>Professors Complaints</p>
        <p onClick={()=>handleClick("supportingstaff")}>Supporting Staffs Complaints</p>
        <p onClick={()=>handleClick("private")}>Private Complaints</p>
      </nav>
      <h1>Complaints</h1>
      {complaintType==="all" && <ComplaintFeed type={'Public'} Complaints={publicComplaints}/>}
      {complaintType==="student" && <ComplaintFeed type={'Public'} Complaints={publicComplaintsByStudents}/>}
      {complaintType==="professor" && <ComplaintFeed type={'Public'} Complaints={publicComplaintsByProfessors}/>}
      {complaintType==="supportingstaff" && <ComplaintFeed type={'Public'} Complaints={publicComplaintsBySupportingStaffs}/>}
      {complaintType==="private" && <ComplaintFeed type={'private'} Complaints={privateComplaints}/>}
    </main>
  )
}

export default Home