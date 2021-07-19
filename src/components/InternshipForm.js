import React,{useState,useEffect,useRef} from 'react'
import MultiSelect from "react-multi-select-component";
import uuid from 'react-uuid'
import './internshipForm.css'
const Dropdown=()=> {
  const options = [
    { label: "CSE", value: "CSE" },
    { label: "EE", value: "EE" },
    { label: "MNC", value: "MNC" },
    { label: "MECH", value: "MECH" }
  ];

const [selected, setSelected] = useState([]);

  return (
    <span>
      {/* <pre>{JSON.stringify(selected)}</pre> */}
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy={"Select"}
        disableSearch={true}
      />
    </span>
  );
}

const AfterUploadComponent=(props)=>{
    let len=props.filesList.length;
    let [notifState,changenotifState]=useState(false);
    if(len==0){
        return(
            {
                notifState && (<>
                    <p>No files added</p>
                    <button type='button' onClick={()=>{changenotifState({true})}}></button>
                </>)
            }
        )
    }
}

const FilesUploader=()=>{
    let [fileList,updateFileList]=useState([]);
    let [uploadState,updateUpload]=useState(false);
    const onNewFiles=(fileList)=>{
        updateFileList(fileList);
        // if any file size filterations add here
        console.log(fileList);
    }

    const deleteFile= (delId)=>{
        console.log(delId);
        //let delIDstr=toString(delId);
        let arr=[];
        // let status=fileList.map((file)=>{
        //     console.log(file.id);
        //     if(toString(file.id)!==delIDstr){
        //         arr.push(file);
        //     }
        // });
        // fileList.forEach((file,delID,arr)=>{
        //     console.log(file.id);
        //     if(toString(file.id)!= toString(delID)){
                
        //         arr.push(file);
        //     }
        // })
        for(let ind=0;ind<fileList.length;ind++){
            if(fileList[ind].id !== delId){
                arr.push(fileList[ind]);
            }
        }
        onNewFiles(arr);
    }

    const onUpload=()=>{
        //Backend work
        updateFileList([]);
        
    }

    return(
        <div>
            <label htmlFor="files">Add files related to the internship :</label>
            <input type="file" title=" " id="files" name="files" multiple={true} accept="image/*,.pdf,.doc,.docx" onChange={(e)=>onNewFiles(Array.from(e.target.files))}/>
            {fileList.map((file)=>{
                file.id=uuid();
                return(
                <div key={file.id}>
                    <p>{file.name}</p>
                    <button type='button'  onClick={()=>{deleteFile(file.id)}}>Delete</button>
                </div>
                )
            })}
            <button type="button" onClick={onUpload}>Upload</button>
            {uploadState && <div>
                <p>Files uploaded successfully</p>
            </div> }
        </div>
    )
}



const InternshipForm = () => {
    return (
        <div>
            <h2>Internship Form</h2>
            <form className="form">
                <div>
                    <label htmlFor="intTitle">Internship Title : </label>
                    <input type="text" id="intTitle" name="intTitle" />
                </div>
                
                <div>
                    <label htmlFor="company">Company : </label>
                    <input type="text" id="company" name="company" />
                </div>

                <div>
                    <label htmlFor="stipend">Stipend : </label>
                    <input type="text" id="stipend" name="stipend" />
                </div>

                <div>
                    <label htmlFor="branches">Branches : </label>
                    {/* <div>
                        <div>
                            <input type="checkbox" id="CSE" name="branch1" value="CSE" />
                            <label htmlFor="branch1">CSE</label>
                        </div>

                    </div> */}
                    <Dropdown/>
                </div>

                <div>
                    <label htmlFor="deadline">Deadline :</label>
                    <input type="date" id="deadline" name="deadline"/>

                </div>

                <div>
                    <label htmlFor="description">Description :</label>
                    <textarea name="description" id="description" cols="30" rows="10" ></textarea>
                </div>
                
                <FilesUploader/>

            </form>
        </div>
    )
}

export default InternshipForm;
