import React from 'react'
import { useState, useEffect } from 'react'
import NavBar from '../../components/navigation/NavBar'
import { format } from 'date-fns'//transform the dates to readable formats
import './create.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp, faLaptop, faUpload, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import landscape from '../../assets/images/landscape.png'
import placeholder from '../../assets/images/placeholder1.png'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase";
import { UploadProgress } from '../../components/progressBar/ProgressBar';

const Create = ({createdStatus}) => {

  const [created, setCreated] = useState(false)
  const [incidence, setIncidence] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [categoryData, setCategoryData] = useState([]);
  const [status, setStatus] = useState('Open');
  const [statusData, setStatusData] = useState([]);
  const [facility, setFacility] = useState('');
  const [facilityData, setFacilityData] = useState([]);
  const [department, setDepartment] = useState('');
  const [departmentData, setDepartmentData] = useState([]);
  const [priority, setPriority] = useState('');
  const [priorityData, setPriorityData] = useState([]);
  const [reportedBy, setReportedBy] = useState('');
  const [openDate, setOpenDate] = useState(new Date());
  const [closedDate, setClosedDate] = useState(null);
  const [showImage, setShowImage] = useState("");
  const [image, setImage] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [uploadProgress, setUploadProgress] = useState("")
  // const [image, setImage] = useState([{myImage: ""}]);
  const navigate = useNavigate();
  // const [date, setDate] = useState([
  //   {
  //     openDate: new Date(),
  //     closedDate: null
  //   }
  // ])

//   const date = [{
//       openDate: new Date(),
//       closedDate: null
// }]

  const handleUpload = (file) => {
    if(!image) return;
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, `/uploads/${fileName}`)
    const uploadTask = uploadBytesResumable(storageRef, image);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed', 
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setUploadProgress(progress)
        console.log('Upload is ' + progress + '% done');
        // switch (snapshot.state) {
        //   case 'paused':
        //     console.log('Upload is paused');
        //     break;
        //   case 'running':
        //     console.log('Upload is running');
        //     break;
        // }
      }, 
      (error) => {
        // Handle unsuccessful uploads
        console.log(error);
      }, 
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        //storage.ref("uploads")
        //.child(fileName)
          getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            setImageURL(downloadURL)
            console.log('File available at', downloadURL);
          });
          
      }
    );    
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3005/api/incidences/', {
      incidence: incidence,
      description: description,
      category: category,
      facility: facility,
      department: department,
      priority: priority,
      reportedBy: reportedBy,
      status: status,
      dateOpened: openDate,
      dateClosed: closedDate,
      active: true,
      lastUpdatedBy: "",
      lastUpdateDate: openDate,
      image: imageURL
    })
    .then(response => console.log(response))
    navigate("/incidence")
    toast("Incidence created!")
    setCreated(true)
  }

  useEffect(()=> {
    loadCategoryData();
    loadStatusData();
    loadFacilityData();
    loadDepartmentData();
    loadPriorityData();
    checkCreated()
    loadReporter()
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadCategoryData = async() => {
    await axios.get('http://localhost:3005/api/category/')
    .then(response => setCategoryData(response.data))
    .then(console.log("Category Data >>>>",categoryData))
  }

  const loadStatusData = async() => {
    await axios.get('http://localhost:3005/api/status/')
    .then(response => setStatusData(response.data))
    .then(console.log("Status Data >>>>",statusData))
  }

  const loadFacilityData = async() => {
    await axios.get('http://localhost:3005/api/facility/')
    .then(response => setFacilityData(response.data))
    .then(console.log("Facility Data >>>>",facilityData))
  }

  const loadDepartmentData = async() => {
    await axios.get('http://localhost:3005/api/department/')
    .then(response => setDepartmentData(response.data))
    .then(console.log("Department Data >>>>",departmentData))
  }

  const loadPriorityData = async() => {
    await axios.get('http://localhost:3005/api/priority/')
    .then(response => setPriorityData(response.data))
    .then(console.log("Priority Data >>>>",priorityData))
  }
  
  // const notify = () => {
  //   toast("Incidence created!")
  // }

  const checkCreated = () => {
    if(created === true){
      createdStatus = true
    }
  }

  const currentUser = JSON.parse(localStorage.getItem('user'));
  const loadReporter = async() => {
    await currentUser
    setReportedBy(currentUser.details.firstname)
  }

  //Convert To Base64
  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result)
      };
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    setImage(file)
    const base64 = await convertToBase64(file);
    setShowImage(base64)
    //console.log("Uploaded Image", image);
    console.log("Uploaded Image", file);
  }

  const cancelUpload = () => {
    setImage("");
    setShowImage("")
  }

  return (
    <div className='create-container'>
    <NavBar />
    
      <div className='create-form'>
          <p className='create-form-header'>Create an incidence</p>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <section>
              <p>
                <label>Incidence</label>
                <input className = 'formInput' type="text" name='' value={incidence} onChange={(e)=> setIncidence(e.target.value)} placeholder="What's the incidence?"></input>
              </p>
              <p>
                <label>Description</label>
                <textarea className = 'formTextArea' type="text" name='' value={description} onChange={(e)=> setDescription(e.target.value)} placeholder="Can you describe as detailed as possible?"/>
              </p>
              <p>
                <label>Category</label>
                <select className = 'formSelect' onChange={(e)=>setCategory(e.target.value)} value={category}>
                  <option>--Select One--</option>
                  {
                    categoryData.map((data) => (
                      <option value={data.name} key={data._id}>{data.name}</option>
                    ))
                  }
                </select>
                {/* <input type="text" name='' value={issue} onChange={(e)=> setIssue(e.target.value)}></input> */}
              </p>
              <p>
                <label>Facility</label>
                <select className = 'formSelect' onChange={(e) => setFacility(e.target.value)} value={facility}>
                  <option>--Select One--</option>
                  {
                    facilityData.map((data)=> (
                      <option value={data.name} key={data._id}>{data.name}</option>
                    ))
                  }
                </select>
                {/* <input type="text" name='' value={issue} onChange={(e)=> setIssue(e.target.value)}></input> */}
              </p>
            </section>
            <section>
              <p>
                <label>Department</label>
                  <select className = 'formSelect' onChange={(e)=>setDepartment(e.target.value)} value={department}>
                    <option>--Select One--</option>
                    {
                      departmentData.map((data) => (
                        <option value={data.name} key={data._id}>{data.name}</option>
                      ))
                    }
                  </select>
              </p>
              <p>
                <label>Priority</label>
                  <select className = 'formSelect' onChange={(e)=>setPriority(e.target.value)} value={priority}>
                    <option>--Select One--</option>
                    {
                      priorityData.map((data) => (
                        <option value={data.name}>{data.name}</option>
                      ))
                    }
                  </select>
              </p>
              <p>
                <label>Reported by</label>
                <input className = 'formInput' type="text" name='' value={reportedBy} disabled></input>
              </p>
              {/* <p>
                <label>Responsibility</label>
                <input type="text" name='' value={issue} onChange={(e)=> setIssue(e.target.value)}></input>
              </p> */}
              <p>
                <label>Status</label>
                  <select className = 'formSelect' onChange={(e)=>setStatus(e.target.value)} value={status}>
                  {
                    statusData.map((data) => (
                      <option value={data.name}>{data.name}</option>
                    ))
                  }
                  </select>
              </p>
              <p>
                <label>Date Opened</label>
                {/* <input className = 'formInput' type="text" name='' value={`${format(date[0].openDate, "dd/MM/yyyy HH:mm:ss")}`} onChange={(e)=> setOpenDate(e.target.value)}  disabled> */}
                <input className = 'formInput' type="text" name='' value={`${format(openDate, "dd/MM/yyyy HH:mm:ss")}`} onChange={(e)=> setOpenDate(e.target.value)}  disabled>
                </input>
              </p>
              <p>
                {
                  status === 'closed' &&
                  <>
                    <label>Date Closed</label>
                    <input className = 'formInput' type="text" name='' value={`${format(new Date(), "dd/MM/yyyy HH:mm:ss")}` }  onChange={(e)=> setClosedDate(e.target.value)} disabled></input>
                    {/* <input className = 'formInput' type="text" name='' value={`${format(new Date(), "dd/MM/yyyy HH:mm:ss")}`} onChange={(e)=> setClosedDate(e.target.value)} disabled></input> */}
                  </>
                }
              </p>

            </section>
            
            <section>
              <p>
                <div className='upload-container'>
                  <span> Upload Screenshot</span>
                  <div className="upload-space">
                    <div className="upload-top-icon">
                      <img className="upload-top-icon-placeholder" alt="upload space placeholder" src={landscape}/>
                      {/* <FontAwesomeIcon icon={faCloudArrowUp}/> */}
                    </div>
                    <div className="upload-text-holder">
                          <label htmlFor="file-upload" id='custom-file-upload-a'>
                            Drop image file here or 
                          </label>
                          
                          <label htmlFor="file-upload" id='custom-file-upload-b'>
                              Browse...
                          </label>
                    </div>
                    {/* <div className="upload-text-detail-holder" type="file"> */}
                      {/* <input type="file" placeholder='Choose a' disabled></input> */}
                      {/* <FontAwesomeIcon icon={faLaptop}/> Select file from device. */}
                    {/* </div> */}
                    <input 
                      type="file"
                      label="Image"
                      name="myFile"
                      id="file-upload"
                      accept='.jpeg, .png, .jpg'
                      onChange={e => handleFileUpload(e)}
                    />
                    <div className="upload-text-holder-copy">
                     We support JPG and PNG files. Maximum file size is 500kb.
                    </div>
                  </div>
                </div>
              </p>
            </section>

            <section>
              <p>
                <div className="upload-content-holder">
                  {/* <div> */}
                    {/* <img src={image.myImage || placeholder} alt="uploaded image" className='upload-image-item'/> */}
                    <span>Preview Image</span>
                    {/* <UploadProgress percent={uploadProgress}/> */}
                    {uploadProgress && <UploadProgress percent={uploadProgress}/>}
                    {/* {uploadProgress && <div>Uploaded {uploadProgress}%</div>} */}
                    <div className='upload-upload'>
                      <div className={image? 'cancel-upload': 'cancel-upload inactive'} onClick={cancelUpload}><FontAwesomeIcon icon={faXmark} /></div>
                      <img src={showImage || placeholder} alt="uploaded screenshot container" className={image? 'upload-image-item' : 'upload-image-item-placeholder'}/>
                    </div>
                    <div onClick={handleUpload} className={image? 'upload-button': 'upload-button inactive'}><FontAwesomeIcon icon={faUpload}/>Upload</div>
                  {/* </div> */}
                </div>
              </p>
            </section>
            <button className='create-button'>Create</button>
          </form>

          {/* <button onClick={notify}>Activate Toast</button>
          <ToastContainer></ToastContainer> */}
      </div>
    </div>
  )
}

export default Create