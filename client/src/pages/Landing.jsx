import landingImg from "../assets/chatImg.svg"
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
  <div className="page">
    <div className="space-y-8 flex flex-col items-center">
      <h6 className="font-semibold">Welcome to my Social media App</h6>
      <img src={landingImg} alt="chat" className="max-h-[26rem]"/>
      <p className="max-w-lg mx-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero autem eum sit quibusdam, illo nulla? Fugiat maxime culpa blanditiis ab?</p>
      <div className="text-primary500 flex justify-between items-center max-w-lg mx-auto w-full font-bold">
        <Link to="/register">Create Account</Link>
        <Link to="/login">Login / Demo App</Link>
      </div>
    </div>
    
  </div>
  )
}
