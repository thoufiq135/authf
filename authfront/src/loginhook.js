async function signin(name,mail,pass){


    try{console.log("data came=",name,pass,mail)
       
        const response = await fetch("https://authb6.vercel.app/Signup",{
            method:"POST",
            body:JSON.stringify({
                name:name,
                email:mail,
                password:pass
            }),
            headers:{
                "content-type":"application/json"
            }
        })
        const r =await response.json()
        console.log("r=",r)
        if(response.status===400){
            console.log("user already exists!")
            return true
        }else {
            console.log("Registered")
            localStorage.setItem("token",r)
            console.log("session")
            return false
        }
       
    
           
    }catch(err){
        console.log(err)
        return false
    }
}
export default signin;