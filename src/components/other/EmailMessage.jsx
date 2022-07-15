import { Link } from "react-router-dom"

const EmailMessage = () => {
  return (
      <div className="result-msg flex fixed items-center justify-center">
          <div className="msg-box bg-white p-10 flex flex-col shadow-sm justify-center items-center">
            <p className=" text-black  text-lg mb-12">
              Your email is sent, we will reach to you soon
            </p>
            <div className="link-btn text-blue-500">
              <Link to={"/"}> Go back to home</Link>
            </div>
          </div>
        </div>
  )
}

export default EmailMessage