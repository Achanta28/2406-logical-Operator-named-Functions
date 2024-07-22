import React, { useRef } from 'react'

function TenthMarksSheet() {
    let firstNameInputRef= useRef();
    let lastNameInputRef= useRef();
    let teltInputRef= useRef();
    let engtInputRef= useRef();
    let hintInputRef= useRef();
    let mathsInputRef= useRef();
    let sciInputRef= useRef();
    let socInputRef= useRef();
    let firstNameResultRef = useRef();
    let lastNameResultRef = useRef();
    let telResultRef = useRef();
    let engResultRef = useRef();
    let hinResultRef = useRef();
    let mathsResultRef = useRef();
    let sciResultRef = useRef();
    let socResultRef = useRef();
    let resultParaRef =useRef();

   let calculateResult =()=>{
    let firstNameMarks = firstNameInputRef.current.value;
                 let lastNameMarks = lastNameInputRef.current.value;
                 let telMarks = Number(teltInputRef.current.value);
                 let hinMarks = Number(hintInputRef.current.value);
                 let engMarks = Number(engtInputRef.current.value);
                 let mathsMarks = Number(mathsInputRef.current.value);
                 let sciMarks =Number(sciInputRef.current.value);
                 let socMarks = Number(socInputRef.current.value);
 
                 let totalMarks =telMarks+hinMarks
                 +engMarks+mathsMarks+sciMarks+socMarks;
                 let result;
 
                 if(telMarks < 35|| hinMarks < 35 || engMarks < 35 ||mathsMarks<35||sciMarks<35||socMarks<35){
                     result ="Failed";
 
                 }else{
                     result="Passed";
                 }
               
                 resultParaRef.current.innerHTML=`${firstNameMarks} ${lastNameMarks} ${result}in tenth got total marks of    ${totalMarks} `;

   }

   //FirstName
   let firstNameOnFocus =()=>{
    firstNameInputRef.current.style.backgroundColor="aqua";

   }
   let firstNameOnBlur =()=>{
    firstNameInputRef.current.style.backgroundColor="";
    
   }
   //LastName
   let lastNameOnFocus=() =>{
    lastNameInputRef.current.style.backgroundColor="aqua";

   }
   let lastNameOnBlur=() =>{
    lastNameInputRef.current.style.backgroundColor="";

   }

   //Telugu
   
   let telOnFocus=() =>{
    teltInputRef.current.style.backgroundColor="aqua";
   }
   let telOnChange=() =>{
    if(teltInputRef.current.value >=0 && 
        teltInputRef.current.value<=100){
            if(teltInputRef.current.value >= 35 ){
                telResultRef.current.innerHTML="pass";
               telResultRef.current.style.backgroundColor="green";

            }else{
               telResultRef.current.innerHTML="Fail";
               telResultRef.current.style.backgroundColor="red";

            }

    }else{
         telResultRef.current.innerHTML="Invalid";
         telResultRef.current.style.backgroundColor="Purple";

    }
   }
   let telOnBlur=() =>{
    teltInputRef.current.style.backgroundColor="";
   }
   //English
   let engOnFoucs=()=>{
    engtInputRef.current.style.backgroundColor="aqua";
   }
   let engOnChange=()=>{
    if(engtInputRef.current.value >=0 &&
        engtInputRef.current.value <=100
    ){
        if(engtInputRef.current.value >= 35 ){
            engResultRef.current.innerHTML="pass";
           engResultRef.current.style.backgroundColor="green";

        }else{
           engResultRef.current.innerHTML="Fail";
           engResultRef.current.style.backgroundColor="red";

        }

    }else{
        engResultRef.current.innerHTML="Inalid";
        engResultRef.current.style.backgroundColor="purple";

    }
   }
   let engOnBlur=()=>{
    engtInputRef.current.style.backgroundColor="";
    
   }

   //Hindi
   let hinOnFocus =()=>{
    hintInputRef.current.style.backgroundColor="aqua";

   }
   let hinOnChange =()=>{
    if(hintInputRef.current.value >=0 &&
        hintInputRef.current.value <=100
    ){
        if(hintInputRef.current.value >= 35 ){
            hinResultRef.current.innerHTML="pass";
           hinResultRef.current.style.backgroundColor="green";

        }else{
           hinResultRef.current.innerHTML="Fail";
           hinResultRef.current.style.backgroundColor="red";

        }

    }else{
        hinResultRef.current.innerHTML="Inalid";
        hinResultRef.current.style.backgroundColor="purple";

    }
    
   }
   
   let hinOnBlur =()=>{
    hintInputRef.current.style.backgroundColor="";
    
   }

   //Maths
   let mathsOnFocus=()=>{
    mathsInputRef.current.style.backgroundColor="aqua";
   }
   let mathsOnChange=()=>{
    if(mathsInputRef.current.value>=0 &&
        mathsInputRef.current.value <= 100
    ){
        if( mathsInputRef.current.value >= 35 ){
            mathsResultRef.current.innerHTML="pass";
             mathsResultRef.current.style.backgroundColor="green";

        }else{
            mathsResultRef.current.innerHTML="Fail";
            mathsResultRef.current.style.backgroundColor="red";

        }

    }else{
        mathsResultRef.current.innerHTML="Invalid";
        mathsResultRef.current.style.backgroundColor="purple";

    }
    
   }
   let mathsOnBlur=()=>{
    mathsInputRef.current.style.backgroundColor="";
    
   }

   //Science
   let sciOnFocus =()=>{
    sciInputRef.current.style.backgroundColor="aqua";

   }
   let sciOnChange =()=>{
    if( sciInputRef.current.value >=0 &&
        sciInputRef.current.value <= 100
    ){
        if(sciInputRef.current.value >= 35 ){
            sciResultRef.current.innerHTML="pass";
            sciResultRef.current.style.backgroundColor="green";

        }else{
            sciResultRef.current.innerHTML="Fail";
            sciResultRef.current.style.backgroundColor="red";

        }

    }else{
        sciResultRef.current.innerHTML="Invalid";
            sciResultRef.current.style.backgroundColor="purple";

    }
   
    
   }
   let sciOnBlur =()=>{
    sciInputRef.current.style.backgroundColor="";
    
   }
   //Social
   let socOnFocus = () =>{
    socInputRef.current.style.backgroundColor="aqua";

   }
   let socOnChange = () =>{
    if(socInputRef.current.value >=0 &&
        socInputRef.current.value <=100
       ){
        if(socInputRef.current.value >= 35){
            socResultRef.current.innerHTML="pass";
            socResultRef.current.style.backgroundColor="green";

        }else{
            socResultRef.current.innerHTML="Fail";
            socResultRef.current.style.backgroundColor="red";
            

        }

       }else{
        socResultRef.current.innerHTML="Invalid";
        socResultRef.current.style.backgroundColor="purple";

       }

   }
   let socOnBlur = () =>{
    socInputRef.current.style.backgroundColor="";

   }
   

 

  
   
return (
    <div>
        <form className='form'>
            <h1 className='mainHeading'>Tenth Results</h1>
        <div className='formDiv'>
            <label className='formLabel'>FirstName</label>
            <input type='text' ref={firstNameInputRef}
            onFocus={()=>{
                firstNameOnFocus();
                
            }}
           
            onBlur={()=>{
               firstNameOnBlur();
            }}></input>
            <span ref={firstNameResultRef}></span>
        </div>
        <div className='formDiv'>
            <label className='formLabel'>LastName</label>
            <input type='text' ref={lastNameInputRef}
            onFocus={()=>{
                lastNameOnFocus();
            }}
            
            onBlur={()=>{
                lastNameOnBlur();
            }}></input>
            <span ref={lastNameResultRef}></span>
        </div>
        <div className='formDiv'>
            <label className='formLabel'>Telugu</label>
            <input type='number' ref={teltInputRef}
            onFocus={()=>{
                telOnFocus(); 
            }}
            onChange={()=>{ 
                telOnChange();
            }}
            onBlur={()=>{
                 telOnBlur();
                }}></input>
            <span ref={telResultRef}></span>
        </div>
        <div className='formDiv'>
            <label className='formLabel'>English</label>
            <input type='number' ref={engtInputRef}
             onFocus={()=>{
               engOnFoucs();
            }}
            onChange={()=>{
                engOnChange();
               }}
            onBlur={()=>{
                engOnBlur();
         }}></input>
            <span ref={engResultRef}></span>
        </div>
        <div className='formDiv'>
            <label className='formLabel'>Hindi</label>
            <input type='number' ref={hintInputRef}
            onFocus={()=>{
                hinOnFocus();
               }}
            onChange={()=>{
                hinOnChange();
                }}
            onBlur={()=>{
                hinOnBlur();
               
            }}></input>
            <span ref={hinResultRef}></span>
        </div>
        <div className='formDiv'>
            <label className='formLabel'>Maths</label>
            <input type='number' ref={mathsInputRef}
            onFocus={()=>{
                mathsOnFocus();
               }}
            onChange={()=>{
                mathsOnChange();
               }}
            onBlur={()=>{
                mathsOnBlur();
                
            }}></input>
            <span ref={mathsResultRef}></span>
        </div>
        <div className='formDiv'>
            <label className='formLabel' >Science</label>
            <input type='number' ref={sciInputRef}
            onFocus={()=>{
               sciOnFocus();
            }}
            onChange={()=>{
                sciOnChange();
                }}
            onBlur={()=>{
                sciOnBlur();
                
            }}></input>
            <span ref={sciResultRef}></span>
        </div>
        <div className='formDiv'>
            <label className='formLabel'>Social</label>
            <input type='number' ref={socInputRef}
             onFocus={()=>{
                socOnFocus();
             }}
            onChange={()=>{
                socOnChange();
            }}
            onBlur={()=>{
                socOnBlur();
               
            }}></input>
            <span ref={socResultRef}></span>
        </div>
        <p ref={resultParaRef}>Please Enter Values And Calculate Results</p>
        <div className='formDiv'>
            <button type='button' onClick={()=>{
                 calculateResult();
                 }}>CalculateResult</button>
        </div>
        </form>
       
    </div>
  )
}



export default TenthMarksSheet