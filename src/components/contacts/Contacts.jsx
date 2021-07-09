import "./contacts.scss"
import PixelRain from "../helpers/PixelRain";
import {useState} from "react";

const Contacts = () => {
    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setMessage(true)
    }
    return (
        <div className="contacts" id="contacts">
            <div className="left">
                <PixelRain/>
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email..."/>
                    <textarea placeholder="Message..."></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll answer soon =) </span>}
                </form>
            </div>
        </div>
    );
};

export default Contacts;