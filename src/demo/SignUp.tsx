// import {  useState } from "react";
// import axios from "axios";
// type InputProps={
//     value: string
//     handleChange: (event:React.ChangeEvent<HTMLInputElement>)=>void
// }
// function SignUp(){
//     const [firstName , setFirstName] = useState("");
//     const [lastName , setlastName] = useState("");
//     const [email , setEmail] = useState("");
//     const [password , setPassword] = useState("");
//     const [phone , setPhone] = useState("");
//     const [address , setAddress] = useState("");
//     const [role , setRole] = useState("");

//     async function save(props:InputProps) { 
//                 // event.preventDefault();
//                 try {
//                   await axios.post("http://localhost:8081/signUp", {
//                     "firstName":"Shyam",
//                     "lastName":"Mondal",
//                     "email":"shyam@gmail.com",
//                     "password":"shyam",
//                     "phone":"8976765678",
//                     "address":"Chennai",
//                     "role":{
//                         "roleName":"ROLE_USER"
//                     }
//                 });
//                   alert("Employee Registation Successfully");
        
//                 } catch (err) {
//                   alert(err);
//                 }
//               }
//               return (
//                 <div>
//                 <div className="container mt-4" >
//                 <div className="card">
//                         <h1>Student Registation</h1>
                
//                 <form>
//                     <div className="form-group">
//                       <label>Employee name</label>
//                       <input type="text"  className="form-control" id="firstName" placeholder="Enter Name"
                      
//                       value={firstName}
//                       onChange={(event) => {
//                         setFirstName(event.target.value);
//                       }}
//                       />
//                     </div>
//                     <div className="form-group">
//                       <label>Employee name</label>
//                       <input type="text"  className="form-control" id="firstName" placeholder="Enter Name"
                      
//                       value={firstName}
//                       onChange={(event) => {
//                         setFirstName(event.target.value);
//                       }}
//                       />
//                     </div>
//                     <div className="form-group">
//                       <label>email</label>
//                       <input type="email"  className="form-control" id="email" placeholder="Enter Email"
                      
//                       value={email}
//                       onChange={(event) => {
//                         setEmail(event.target.value);
//                       }}
                      
//                       />
             
//                     </div>
//                     <div className="form-group">
//                         <label>password</label>
//                         <input type="password"  className="form-control" id="password" placeholder="Enter password"
                        
//                         value={password}
//                         onChange={(event) => {
//                           setPassword(event.target.value);
//                         }}
                        
//                         />
//                       </div>
//                     <button type="submit" class="btn btn-primary mt-4" onClick={save} >Save</button>
                   
//                   </form>
//                 </div>
//                 </div>
//                  </div>
//                 );

// }
// export default SignUp;

// // function Register() {
  
// //     const [employeename, setEmployeename] = useState("");
// //     const [email, setEmail] = useState("");
// //     const [password, setPassword] = useState("");


// //     async function save(event) {
// //         event.preventDefault();
// //         try {
// //           await axios.post("http://localhost:8085/api/v1/employee/save", {
// //           employeename: employeename,
// //           email: email,
// //           password: password,
// //           });
// //           alert("Employee Registation Successfully");

// //         } catch (err) {
// //           alert(err);
// //         }
// //       }
  
// //     return (
// //     <div>
// //     <div class="container mt-4" >
// //     <div class="card">
// //             <h1>Student Registation</h1>
    
// //     <form>
// //         <div class="form-group">
// //           <label>Employee name</label>
// //           <input type="text"  class="form-control" id="employeename" placeholder="Enter Name"
          
// //           value={employeename}
// //           onChange={(event) => {
// //             setEmployeename(event.target.value);
// //           }}
// //           />

// //         </div>

// //         <div class="form-group">
// //           <label>email</label>
// //           <input type="email"  class="form-control" id="email" placeholder="Enter Email"
          
// //           value={email}
// //           onChange={(event) => {
// //             setEmail(event.target.value);
// //           }}
          
// //           />
 
// //         </div>

// //         <div class="form-group">
// //             <label>password</label>
// //             <input type="password"  class="form-control" id="password" placeholder="Enter password"
            
// //             value={password}
// //             onChange={(event) => {
// //               setPassword(event.target.value);
// //             }}
            
// //             />
// //           </div>

// //         <button type="submit" class="btn btn-primary mt-4" onClick={save} >Save</button>
       
// //       </form>
// //     </div>
// //     </div>
// //      </div>
// //     );
// //   }
  
// //   export default Register;

