import React,{useState,useEffect,useRef} from 'react'
// import { withRouter } from 'react-router-dom'
import Select from 'react-select'
import '../styles/Teamupform.css'
const Dropdown = (props)=>{
    const options = [
    { value: 'Web', label: 'Web' },
    { value: 'Android', label: 'Android' },
    { value: 'ML', label: 'ML' },
    { value: 'AI', label: 'AI' },
    { value: 'DL', label: 'DL' }
    ]

    const style ={
        control: base =>({
            ...base,
            border: 0,
            zIndex:-1,
            boxSizing: 'border-box',
            boxShadow:"none",
            '&:Focus':{
                border:'3px solid #ffd480',
            }
        })
    }

    return(
        <div className="forminput">
            <label >Tag<span>*</span></label>
           <Select className='select' options={options} styles={style} />
        </div>
    )
}


const Teamup_form = () => {
    const [Title,settitle]=useState('');
    const [Checktitle,setchecktitle]=useState('');
    const [focustitle,setfocustitle]=useState(false);
    const [skill,setskill]=useState('')
    const [Checkskill,setcheckskill]=useState('');
    const [focusskill,setfocusskill]=useState(false);
    const [Description,setDescription]=useState('');
    const [CheckDescription,setcheckDescription]=useState('');
    const [focusdescription,setfocusdescription]=useState(false);
    const HandleInputs= (event)=>{
        event.preventDefault();
        console.log(Title);
    }
    useEffect(() => {
        if (Title.length<=2 && Title.length>=1){
            setchecktitle("(atleast 5 characters required)")
        }
        else{
            setchecktitle("")
        }
    }, [Title])

    useEffect(() => {
        if (skill.length<=2 && skill.length>=1){
            setcheckskill("(Wrong input)")
        }
        else{
            setcheckskill("")
        }
    }, [skill])

    useEffect(() => {
        if (Description.length>300){
            setcheckDescription("(Description cannot be more than 10 letters)")
        }
        else{
            setcheckDescription("")
        }
    }, [Description])

    useEffect(()=>{
        if (Title.length>5){
            alert('Title cannot be more than 5 characyers');
            settitle(Title.slice(0,-1));
        }
        if (skill.length>5){
            alert('skill cannot be more than 5 characyers');
            setskill(skill.slice(0,-1));
        }
        if (Description.length>5){
            alert('Description cannot be more than 5 characyers');
            setDescription(Description.slice(0,-1));
        }
    })

    useEffect(()=>{
        if (document.activeElement!==focus_cont.current && Title.length>0 && Title.length<=2){
            alert('Title cannot be less than 2 characyers');
            console.log("hi");
        }
        if (document.activeElement!==skill_cont.current && skill.length>0 && skill.length<=2){
            alert('skill cannot be less than 2 characyers');
        }
        if (focusdescription==true && Description.length>0 && Description.length<=2){
            alert('Description cannot be less than 2 characyers');
        }
    })

    let focus_cont = useRef(null);
    let skill_cont = useRef(null);

    return (<>
        <form className='Form' >
            <div className='Title'>
            <p>TeamUp Post Form</p>
            </div>
           <div className="forminput">
               <label >
                   Requirement<span >*</span><p className='checkinput'>{Checktitle}</p>
               </label>
               <input className="input" type="text" required id="name" placeholder="Looking fro WEB developer" ref={focus_cont} value={Title} onChange={(e)=>settitle(e.target.value)}></input>
               {/* <p>{Checktitle}</p> */}
           </div>
           {/* <p className='checkinput'>{Checktitle}</p> */}
           <div className="forminput">
               <label>
                   Skill<span>*</span>
               </label>
               <input className="input" type="text" required id="Skill" placeholder="Reactjs,kotlin" ref={skill_cont} onFocus={(e)=>setfocusskill(true)} value={skill} onChange={(e)=>setskill(e.target.value)}></input>
               <p>{Checkskill}</p>
           </div>
           <Dropdown />
           <div className="forminput" >
               <label>
                   Description<span>{CheckDescription}</span>
               </label>
               <textarea rows="5" cols="50" placeholder="Enter teamup Description" value={Description} onFocus={(e)=>setfocusdescription(true)} onChange={(e)=>setDescription(e.target.value)}></textarea>
           </div>
           <div className="btndiv" >
                <button className="btn" type="submit">Submit</button>
           </div>
        </form>
        </>
    )
}

export default Teamup_form
