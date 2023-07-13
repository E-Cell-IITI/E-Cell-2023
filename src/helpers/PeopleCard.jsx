import React from 'react'
import TeamCss from "../css/TeamCss.module.css"
import { FaLinkedin, FaFacebook, FaInstagram, FaGithubAlt} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from 'react-router-dom';

const PeopleCard = (props) => {
    return (
        <>
            <div className={TeamCss.mainContainer}>

                <div className={TeamCss.imageContainer}>
                    <div className={TeamCss.side_div}>
                        <Link to={props.linkedin}>
                            <FaLinkedin className="text-white text-xl" />
                        </Link>
                        <Link to={props.insta}>
                            <FaInstagram className="text-white text-xl" />
                        </Link>
                        <Link to={props.mail}>
                            <FaGithubAlt className="text-white text-xl" />
                        </Link>
                        {/* <Link to={props.mail}>
                            <SiGmail className="text-white text-xl" />
                        </Link>  */}

                    </div>
                    <div className='image-box'>
                        <img loading="lazy" className='imagy' alt='profile' src={props.pic ? props.pic : "/images/Demo.png"} />
                    </div>

                </div>

                <div className={TeamCss.textContainer}>
                    <h3 className={TeamCss.POR}>{props.por}</h3>
                    <p className={TeamCss.PORname}>{props.name}</p>
                    <p className={TeamCss.PORsurname}>{props.surname}</p>
                </div>
                <div className={TeamCss.empty_div}>

                </div>
            </div >
        </>
    )
}

export default PeopleCard;

