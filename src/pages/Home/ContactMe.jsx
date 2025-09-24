import React, {useState} from "react"
import emailjs from "@emailjs/browser";






export default function ContactMe() {

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  
  const templateParams = {
    from_name: name,
    from_email: email,
    to_name: "Joe",
    message: message,
  }
  emailjs.send(serviceId, templateId, templateParams, publicKey)
  .then((response) => {
    console.log("Email sent Successfully!", response);
    setName('');
    setEmail('');
    setMessage('');
  })
  .catch((error) => {
    console.error("NO EMAIL SENT HAHAHAHAHAHAHA", error)
  });
  }


     return <section id="contact" className="contact--section">
        <div>
            <p className="sub--title">Get in Touch</p>
            <h2>Contact Me</h2>
            <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis corrupti corporis illum fugiat fugit optio vitae esse eaque commodi voluptatibus?
            </p>
        </div>
        <form onSubmit={handleSubmit} className="contact--form--container">
            <div className="container">
                <label htmlFor="name" className="contact--label">
                    <span className="text-md">Name</span>
                    <input 
                    type="text" 
                    className="contact--input"
                    name="name"
                    id="name"
                    rows="1"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required />
                </label>
            </div>
               <label htmlFor="email" className="contact--label">
                    <span className="text-md">Email</span>
                    <input 
                    type="text" 
                    className="contact--input"
                    name="email"
                    id="email"
                    rows="1"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required />
                </label>
                <label htmlFor="message" className="contact--label">
                    <span className="text-md">Message</span>
                    <textarea
                    className="contact--input text-md"
                    name="message"
                    id="message"
                    rows="8"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    />
                </label>
          <div>
          <button type="submit" className="btn btn-primary contact--form--btn">Submit</button>
          </div>
        </form>
     </section>
}



// const serviceId = "service_0i1v9hf";
//    const templateId = "template_kkfxvxi";
//    const publicKey = "8my8lv1TOp34m2ryx";