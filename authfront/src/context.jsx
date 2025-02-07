import { createContext, useEffect } from "react";
import { useState } from "react";
import signin from "./loginhook"
import signup from "./signuphook";
import Signup from "./sign";
const Context=createContext()
const Contextprovider=({children})=>{
    let commail=""
    let compass=""
    const[strigger,setstrigger]=useState(true)
    const[ltrigger,setltrigger]=useState(true)
    const [mail,setmail]=useState("")
    const [name,setname]=useState("")
    const [pass,setpass]=useState("")
    const [logmail,setlogmail]=useState("")
    const [logpass,setlogpass]=useState("")
    const[token,settoken]=useState("")
    const[err,seterr]=useState(false)
    const[mess,setmess]=useState(false)

    useEffect(()=>{
        const time = setTimeout(()=>{
            console.log(commail,compass)
        },5000)
        const fetchlogin=async()=>{
            if(logmail&&logpass){
                try{
                    const succ=await signup(logmail,logpass)
                    console.log("final=",succ)
                    if(succ===true){
                      seterr(true)
                      setmess("")
                    }else{
                        setmess(succ.message)
                        console.log(succ.message)
                        seterr(false)
                    }
                }catch(e){
                    console.log(e)
                }
            }
            
        }
     fetchlogin()
        return()=>clearTimeout(time)
        
    },[ltrigger])
    useEffect(()=>{
        const time = setTimeout(()=>{
           
            console.log(name,mail,pass)
        },5000)
        const fetchtoken = async()=>{
            if(name&&mail&&pass){
                try{
                  const data=  await signin(name,mail,pass)
                    console.log("data=",data)
                  
                        settoken(data)
                        
                    
                }catch(e){
                    console.log(err.message)
                }
                         
             }
        }
        fetchtoken()
        return()=>clearTimeout(time)
        
     
    },[strigger])
    useEffect(() => {
        console.log("Updated token:", token);
    }, []);

    return(
        <Context.Provider value={{name,setname,mail,setmail,pass,setpass,logmail,setlogmail,logpass,setlogpass,strigger,setstrigger,token,settoken,ltrigger,setltrigger,err,mess}}>
        {children}
    </Context.Provider>
    )
}

export  {Context,Contextprovider};