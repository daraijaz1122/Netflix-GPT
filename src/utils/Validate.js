export const ValidateFormData =( email,password)=>{
 const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
 const isPasswordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
 const isNameValid = /^[a-z ,.'-]+$/i.test(name)

 if(!isEmailValid)return "invalid Email Address"
 if(!isPasswordValid) return "invalid Password"
 //if(!isNameValid) return "invalid user name "
 return null
}