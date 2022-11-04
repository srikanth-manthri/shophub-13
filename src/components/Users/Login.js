import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { Log } from "../../Redux/Action";
import { useHistory } from "react-router-dom";

const Eye = <FontAwesomeIcon className="icon" icon={['fas', 'eye']} />;
const EyeSlash = <FontAwesomeIcon className="icon" icon={['fas', 'eye-slash']} />;

function Login() {


  const [showPass, setShowPass] = useState();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const history = useHistory();
  const state = useSelector(state => state.login)
  console.log(state);
  if (state.status === 200) {
    history.push("/home")
  }
  const dispatch = useDispatch();

  const { email, password } = formData;
  function hangleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  }
  console.log(formData, 'ONCHANGE FORMDATA');
  const refPassword = useRef();
  function showPassword() {
    setShowPass(!showPass);
    refPassword.current.type = showPass ? "password" : "text";
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, 'ONSUBMIT FORMDATA');
    dispatch(Log(formData, history))
    setFormData({
      email: "",
      password: ""
    });
    setShowPass(false);
  }


  const canSignIn =
    [email, password].every(Boolean);




  //   const [email, setEmail] = useState("");


  //   const [password, setPassword] = useState("");


  //   const history = useHistory();
  //   const dispatch = useDispatch();

  // const formData = 
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     {
  //       dispatch(Log(email, password, history))

  //     }
  //   }

  return (


    <div className="login-wrapper ">
      <form onSubmit={handleSubmit} className="common-background">
        <h2>Login</h2>
        <label htmlFor="email">Email:</label>
        <input
          onChange={hangleChange}
          type="email"
          id="email"
          name="email"
          value={email}
          placeholder="abc@example.com"
          autoFocus
          required
        />
        <label htmlFor="password">Password:</label>
        <div className="eye">
          <input
            ref={refPassword}
            type="password"
            onChange={hangleChange}
            id="password"
            name="password"
            autoComplete
            value={password}
            required
          />
          {showPass ? (
            <i onClick={showPassword}>{Eye}</i>
          ) : (
            <i onClick={showPassword}>{EyeSlash}</i>
          )}
        </div>
        <button className="loginButton" type="submit" disabled={!canSignIn}>
          Login
        </button>
      </form>
    </div>



    // <div>
    //   <h2>Enter your details</h2>
    //   <form onSubmit={handleSubmit} className="form-control">
    //     <input type="email" placeholder="enter email" value={email} onChange={(e) => { setEmail(e.target.value) }} /><br /><br />
    //     <input type="text" placeholder="enter password" value={password} onChange={(e) => { setPassword(e.target.value) }} /><br /><br />
    //     <button className='btn btn-outline-danger'>Login</button><br /><br />
    //     {/* <span>already have account   <a href='/'>Login Here </a></span> */}
    //   </form>
    // </div>
  )
}
//   const [showPass, setShowPass] = useState(false);
//   const [formData, setFormData] = useState({
//     name:" ",
//     email:"",
//     password: "",
//     confirmPassword:"",
//     number:" "
//   });
// const dispatch=useDispatch();
// const history =useHistory();
// const state=useSelector(state=>state.signUp)
//   const { name,email, password,confirmPassword,number } = formData;
//   function hangleChange(e) {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//     console.log(formData);
//   }
//   const refConfirmPassword = useRef();
//   function showPassword() {
//     setShowPass(!showPass);
//     refConfirmPassword.current.type = showPass ? "password" : "text";
//   }
// // if(state.status===200){
// //   history.push("/verify")
// // }
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     dispatch(SingUp(formData,history))
//     setFormData({

//       name:"",
//       email,
//       password: "",
//       confirmPassword:"",
//       number:""
//     });
//     setShowPass(false);
//   };
//   const canSignUp =
//   [name,email, password, confirmPassword,number].every(Boolean); 
//   return (
//     <div className="login-wrapper ">
//       <form onSubmit={handleSubmit} className="common-background">
//       <h2>Sign Up</h2>

//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             onChange={hangleChange}
//             id="name"
//             name="name"
//             autoComplete
//             value={name}
//             required
//           />
//           <label htmlFor="email">Email:</label>
//           <input
//             onChange={hangleChange}
//             type="email"
//             id="email"
//             name="email"
//             value={email}
//             placeholder="abc@example.com"
//             autoFocus
//             required
//           />
//         <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             onChange={hangleChange}
//             id="password"
//             name="password"
//             autoComplete
//             value={password}
//             required
//           />
//         <label htmlFor="confirmPassword">Confirm Password:</label>
//         <div className="eye">
//           <input
//             ref={refConfirmPassword}
//             type="password"
//             onChange={hangleChange}
//             id="confirmPassword"
//             name="confirmPassword"
//             autoComplete
//             value={confirmPassword}
//             required
//           />
//           {showPass ? (
//             <i onClick={showPassword}>{Eye}</i>
//           ) : (
//             <i onClick={showPassword}>{EyeSlash}</i>
//           )}
//         </div>
//         <label htmlFor="number">Number:</label>
//           <input
//             type="tel"
//             onChange={hangleChange}
//             id="number"
//             name="number"
//             autoComplete
//             value={number}
//             required
//           />
//         <button className="loginButton" type="submit" disabled={!canSignUp}>
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// }

export default Login;
