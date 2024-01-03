import { useFormik } from "formik";
import * as Yup from 'yup'
function App() {
  const formik = useFormik({
    initialValues: {
      username: "",
      name: "",
      email: "",
      status: "",
      country: ""
    },
    validationSchema:Yup.object({
        username: Yup.string().max(10, "Username must be less than 10 characters").required("username is required"),
        name: Yup.string().required("name is required"),
        email: Yup.string().email("Please provide valid email").required("Email is required"),
        status: Yup.string().required("this is required field"),
        country: Yup.string().required("this is required field"),
    }),
  onSubmit: (values) => {
    console.log('Form submitted', values);
  }
  })

  // console.log(formik.values);
  return (
    <>
     <h1>Formik and Yup</h1>
     <form onSubmit={formik.handleSubmit}>
      <input 
      type="text"
      placeholder="Enter the username"
      name="username"
      onChange={formik.handleChange}
      value={formik.values.username}
      onBlur={formik.handleBlur}
      />
      {formik.touched.username && formik.errors.username && <p style={{color : "red", fontSize: "15px", marginBottom: "-7px"}}>{formik.errors.username}</p>}
    <br />
    <br />
       <input 
      type="text"
      placeholder="Enter the name"
      name="name"
      onChange={formik.handleChange}
      value={formik.values.name}
      onBlur={formik.handleBlur}
      />
      {formik.touched.name &&formik.errors.name && <p style={{color : "red", fontSize: "15px", marginBottom: "-7px"}}>{formik.errors.name}</p>}
     <br />
     <br />
       <input 
      type="text"
      placeholder="Enter the email"
      name="email"
      onChange={formik.handleChange}
      value={formik.values.email}
      onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email && <p style={{color : "red", fontSize: "15px", marginBottom: "-7px"}}>{formik.errors.email}</p>}
      <br />
      <br />
      <label htmlFor="">Single</label>
      <input 
      type="radio"
      name="status"
      value="single"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      />
      <label htmlFor="">Commited</label>
      <input 
      type="radio"
      name="status"
      value="commited"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      />
      <label htmlFor="">Coder</label>
      <input 
      type="radio"
      name="status"
      value="coder"
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      />
      {formik.touched.status && formik.errors.status && <p style={{color : "red", fontSize: "15px", marginBottom: "-7px"}}>{formik.errors.status}</p>}
      <br />
      <br />
      <select name="country" onChange={formik.handleChange} onBlur={formik.handleBlur}>
        <option value="">Select Country</option>
        <option value="india">India</option>
        <option value="pakistan">Pakistan</option>
        <option value="china">China</option>
        <option value="nepal">Nepal</option>
      </select>
      {formik.touched.country && formik.errors.country && <p style={{color : "red", fontSize: "15px", marginBottom: "-7px"}}>{formik.errors.country}</p>}
      <br />
      <br />
      <button type="submit">Submit</button>
     </form>
    </>
  )
}

export default App
