import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook, faGithub, faGit } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const skills = [
    {
        icon: faLinkedin,
        account: "Ferani Christy",
        link: "https://www.linkedin.com/in/ferani-christy/"
    },
    {
        icon: faFacebook,
        account: "Ferani Christy",
        link: "https://www.facebook.com/ferani.christy.16/"
    },
    {
        icon: faEnvelope,
        account: "ferani.christy@gmail.com",
        link: "mailto:ferani.christy@gmail.com"
    },
    {
        icon: faInstagram,
        account: "feii07",
        link: "https://www.instagram.com/feii07/"
    },
    {
        icon: faGithub,
        account: "feii07",
        link: "https://github.com/feii07"
    },
];

const Contact = () => {
    return (
        <div className="col" id="contact">
            <div className="row">
                <div className="col">
                    <h2><span>Contact Me</span></h2>
                    <div className='text-center p-5'>
                        {
                            skills.map((item, key) => {
                                return (
                                    <a key={`item-${key}`} href={item.link}><div key={`item-${key}`} className='btn btn-outline-dark btn-contact m-2'><FontAwesomeIcon icon={item.icon} /> {item.account} </div></a>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;