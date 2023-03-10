import { useState, useEffect } from 'react'
import NavBar from '../../components/navigation/NavBar'
import { format, parseISO } from 'date-fns'//transform the dates to readable formats
import './update.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Moment from 'react-moment';
import 'moment-timezone';
import { faArrowLeft, faUpload, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import landscape from '../../assets/images/landscape.png'
import placeholder from '../../assets/images/placeholder1.png'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase";
import { UploadProgress } from '../../components/progressBar/ProgressBar';

const Update = ({updatedStatus}) => {

    const [updated, setUpdated] = useState(false);
    const { incidenceId } = useParams();
    const [incidence, setIncidence] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [status, setStatus] = useState('Open');
    const [facility, setFacility] = useState('');
    const [department, setDepartment] = useState('');
    const [priority, setPriority] = useState('');
    const [openDate, setOpenDate] = useState('');
    const [reportedBy, setReportedBy] = useState('');
    const [closedDate, setClosedDate] = useState('');
    const [active, setActive] = useState(true);
    const [lastUpdatedBy, setLastUpdatedBy] = useState('')
    const [showImage, setShowImage] = useState("");
    const [image, setImage] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [uploadProgress, setUploadProgress] = useState("")
    const navigate = useNavigate();
    const PUBLIC_URL = 'https://traka.onrender.com/' // production
    // const [updatedIncidence, setUpdatedIncidence] = useState({
    //   incidence: incidence,
    //   description: description,
    //   category: category,
    //   facility: facility,
    //   department: department,
    //   priority: priority,
    //   reportedBy: 'Update User',
    //   status: status,
    //   dateOpened: openDate,
    //   dateClosed: closedDate,
    //   active: active,
    //   lastUpdatedBy: '',
    //   lastUpdatedDate: '',
    // })
    const [updatedIncidence, setUpdatedIncidence] = useState([])

    
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

    const handleUpdate = (e) => {
      e.preventDefault();
      //axios.put(`http://localhost:3005/api/incidences/${incidenceId}`, { //local
      axios.put(`${PUBLIC_URL}api/incidences/${incidenceId}`, { //production
        incidence: incidence,
        description: description,
        category: category,
        facility: facility,
        department: department,
        priority: priority,
        status: status,
        active: active,
        lastUpdatedBy: lastUpdatedBy,
        lastUpdateDate: openDate,
        image: imageURL  
      })
      .then(response => console.log(response))
      setUpdated(true)
      navigate("/incidence")
      toast("Incidence updated!")
    }

    useEffect(()=> {
      loadIncidence()
      checkUpdated()
      loadUpdater()
    }, [])
    // console.log(incidenceId)
    const loadIncidence = async() => {
      try {
        //await axios.get(`http://localhost:3005/api/incidences/find/${incidenceId}`) //local
        await axios.get(`${PUBLIC_URL}api/incidences/find/${incidenceId}`) //production
        // .then( response => {setUpdatedIncidence({
        //   incidence: response.data.incidence,
        //   description: response.data.description,
        //   category: response.data.category,
        //   facility: response.data.facility,
        //   department: response.data.department,
        //   priority: response.data.priority,
        //   reportedBy: response.data.reportedBy,
        //   status: response.data.status,
        //   dateOpened: response.data.dateOpened,
        //   dateClosed: response.data.closedDate,
        //   active: response.data.active,
        //   lastUpdatedBy: response.data.reportedBy,
        //   lastUpdatedDate: response.data.lastUpdatedDate,
        // }); 
        .then(response => {setUpdatedIncidence(response.data)
          setIncidence(response.data.incidence)
          setDescription(response.data.description)
          setCategory(response.data.category)
          setFacility(response.data.facility)
          setDepartment(response.data.department)
          setPriority(response.data.priority)
          setReportedBy(response.data.reportedBy)
          setStatus(response.data.status)
          setClosedDate(response.data.closedDate)
          setActive(response.data.active)
          setCategory(response.data.category)
          setImageURL(response.data.image);
          console.log("Update Incidence >>>>",response.data)})
          // console.log("Single Incidence >>>>",response.data)})
      } catch (error) {
        console.log(error)
      }
    }

    const checkUpdated = () => {
      if (updated === true){
        updatedStatus = true
      }
    }

    const lastUpdateUser = JSON.parse(localStorage.getItem('user'));
    const loadUpdater = async() => {
      await lastUpdateUser
      setLastUpdatedBy(lastUpdateUser.details.firstname)
    }

    //console.log (updatedIncidence)//console.log should be last

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

    const loadImage = () => {
      
    }

    const cancelUpload = () => {
      setImage("");
      setShowImage("")
    }


  return (
    <div className='update-container'>
    <NavBar />
      <Link  className='update-goBack-link' to="/incidence"><div className='update-goBack'> <FontAwesomeIcon icon={faArrowLeft}/></div></Link>
      <div className='update-form'>
          <p className='update-form-header'>Update an incidence</p>
          <form onSubmit={handleUpdate}>
              <section>
                <p>
                  <label>Incidence</label>
                  <input className = 'formInput' type="text" name='Incidence' value={incidence} onChange={(e) => setIncidence(e.target.value)} placeholder="What's the incidence?"></input>
                </p>
                <p>
                  <label>Description</label>
                  <textarea className = 'formTextArea' type="text" name='Description' value={description} onChange={(e)=> setDescription(e.target.value)} placeholder="Can you describe as detailed as possible?"/>
                </p>
                <p>
                  <label>Category</label>
                  <select className = 'formSelect' onChange={(e)=>setCategory(e.target.value)} value={category}>
                    <option>--Select One--</option>
                    <option value="User creation">User creation</option>
                    <option value="User priviledges">User priviledges</option>
                    <option value="Password reset">Password reset</option>
                    <option value="Service price update">Service price update</option>
                    <option value="Item price update">Item price update</option>
                    <option value="Service price configuration update">Service price configuration update</option>
                    <option value="EMR user enquiry">EMR user enquiry</option>
                    <option value="Service creation">Service creation</option>
                    <option value="Company creation">Company creation</option>
                    <option value="Tariff upload/Tariff update">Tariff upload/Tariff update</option>
                    <option value="Payor Configuration Update (Approvals/Exclusions)">Payor Configuration Update (Approvals/Exclusions)</option>
                    <option value="Bill resolutions">Bill resolutions</option>
                    <option value="Bed Occupancy">Bed Occupancy</option>
                    <option value="Report requests">Report requests</option>
                    <option value="EMR Bug">EMR Bug</option>
                    <option value="CRM incidences">CRM incidences</option>
                    <option value="Sage incidences">Sage incidences</option>
                  </select>
                  {/* <input type="text" name='' value={issue} onChange={(e)=> setIssue(e.target.value)}></input> */}
                </p>
                <p>
                  <label>Facility</label>
                  <select className = 'formSelect' onChange={(e) => setFacility(e.target.value)} value={facility}>
                    <option>--Select One--</option>
                    <option value="Ikeja">Ikeja - Awolowo</option>
                    <option value="Ikeja Clinic">Ikeja Clinic</option>
                    <option value="Idejo">Idejo</option>
                    <option value="LSS">LSS</option>
                    <option value="FABAC">FABAC</option>
                    <option value="Ikoyi">Ikoyi</option>
                  </select>
                  {/* <input type="text" name='' value={issue} onChange={(e)=> setIssue(e.target.value)}></input> */}
                </p>
              </section>
              <section>
                <p>
                  <label>Department</label>
                    <select className = 'formSelect' onChange={(e)=>setDepartment(e.target.value)} value={department}>
                      <option>--Select One--</option>
                      <option value="PCS">PCS</option>
                      <option value="Nursing">Nursing</option>
                      <option value="Billing">Billing</option>
                      <option value="Pharmacy">Pharmacy</option>
                      <option value="Laboratory">Laboratory</option>
                      <option value="Radiology">Radiology</option>
                      <option value="Obstetrics & Gynaecology">Obstetrics & Gynaecology</option>
                      <option value="Inventory">Inventory</option>
                    </select>
                </p>
                <p>
                  <label>Priority</label>
                    <select className = 'formSelect' onChange={(e)=>setPriority(e.target.value)} value={priority}>
                      <option>--Select One--</option>
                      <option value="High">High</option>
                      <option value="Medium">Medium</option>
                      <option value="Immediate">Immediate</option>
                      <option value="Low">Low</option>
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
                      <option value="Open">Open</option>
                      <option value="Closed">Closed</option>
                      <option value="Delayed">Delayed</option>
                    </select>
                </p>
                <p>
                  <label>Date Opened</label>
                  {/* <input className = 'formInput' type="text" name='' value={`${format( new Date (), "dd/MM/yyyy hh:mm aaa")}`} onChange={(e)=> setOpenDate(e.target.value)}  disabled> */}
                  <div className = 'formInput'><Moment format='D MMM YYYY h:mm a'>{updatedIncidence.dateOpened}</Moment></div>
                  {/* <input className = 'formInput' type="text" name='' value={new Date().substring()} onChange={(e)=> setOpenDate(e.target.value)}  disabled> */}
                  {/* </input> */}
                </p>
                <p>
                  {
                    updatedIncidence.status === 'Closed' &&
                    <>
                      <label>Date Closed</label>
                      <div className = 'formInput'><Moment format='D MMM YYYY h:mm a'>{updatedIncidence.lastUpdatedDate}</Moment></div>
                      {/* <input className = 'formInput' type="text" name='' value={`${format(new Date (singleIncidence.lastUpdatedDate), "dd/MM/yyyy hh:mm aaa")}` }  onChange={(e)=> setClosedDate(e.target.value)} disabled> */}
                      {/* <input className = 'formInput' type="text" name='' value={new Date()}  onChange={(e)=> setClosedDate(e.target.value)} disabled> */}
                      {/* <input className = 'formInput' type="text" name='' value={`${format(new Date (), "dd/MM/yyyy hh:mm aaa")}` }  onChange={(e)=> setClosedDate(e.target.value)} disabled> */}
                      {/* </input> */}
                    </>
                  }
                </p>
                <p className='update-activeStatus'>
                    <>
                        <input type="radio" value={active} checked={active === "true"} name="activeLife" onChange={(e)=>setActive(e.target.value) }/>Active 
                    </>
                    <>
                        <input type="radio" value={active} checked={active === "false"} name="activeLife" onChange={(e)=>setActive(e.target.value)}/>Inactive 
                    </>
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
                        <img src={imageURL || showImage || placeholder} alt="uploaded screenshot container" className={imageURL || showImage? 'upload-image-item' : 'upload-image-item-placeholder'}/>
                      </div>
                      <div onClick={handleUpload} className={image? 'upload-button': 'upload-button inactive'}><FontAwesomeIcon icon={faUpload}/>Upload</div>
                    {/* </div> */}
                  </div>
                </p>
              </section>              
            <button className='update-button'>Update</button>
          </form>
      </div>
    </div>
  )
}

export default Update