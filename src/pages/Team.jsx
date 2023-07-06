import { useState } from "react";
import "../css/Navbar.css";


//data
import TeamsData from "../data/Team.json"
//helpers
import TeamCss from "../css/TeamCss.module.css"
import PeopleCard from '../helpers/PeopleCard'
import { Link } from 'react-router-dom'
const Team = () => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (

        <div className='bg-[#1B262C]'>

            <div className='container mx-auto px-5 m-auto'>

                <div>
                    <div className='flex fixed items-center justify-between py-2 bg-transparent top-0 z-50 w-full px-10 lg:px-16 right-0 left-0 bg-white'
                    >
                        <img src="./ecell.png" alt="Logo" className="object-contain w-32 mx-6 md:mx-4" />

                        <nav>
                            <section className="MOBILE-MENU flex lg:hidden">
                                <div
                                    className="HAMBURGER-ICON space-y-2 z-50 cursor-pointer"
                                    onClick={() => setIsNavOpen((prev) => !prev)}
                                >
                                    <span className="block h-0.5 w-8 animate-pulse bg-gray-900"></span>
                                    <span className="block h-0.5 w-8 animate-pulse bg-gray-900"></span>
                                    <span className="block h-0.5 w-8 animate-pulse bg-gray-900"></span>
                                </div>

                                <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                                    <div
                                        className="absolute top-7 right-8 px-8 py-8 cursor-pointer"
                                        onClick={() => setIsNavOpen(false)}
                                    >
                                        <svg
                                            className="h-8 w-8 text-gray-900"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </div>
                                    <ul className="flex flex-col items-center justify-between min-h-[250px] text-[#0060A1] overflow-y-auto mobile-menu">
                                        <li className="border-b border-slate-100 my-8 uppercase font-semibold text-slate-100 text-xl mobile">
                                        <Link to="/back">HOME</Link>
                                        </li>
                                        <li className="border-b border-slate-100 my-8 uppercase font-semibold text-slate-100 text-xl mobile">
                                            <a href="/CONTACT">CONTACT</a>
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            <ul className="DESKTOP-MENU hidden space-x-12 lg:flex text-white">
                                <li className="text-xl font-semibold text-stone-950 desktop">
                                <Link to="/back">HOME</Link>
                                </li>
                                <li className="text-xl font-semibold text-stone-950 desktop">
                                    <a href="/CONTACT">CONTACT</a>
                                </li>
                            </ul>
                        </nav>
                        <style>{`
                        .hideMenuNav {
                         display: none;
                         }
                        .showMenuNav {
                         display: block;
                         position: absolute;
                         width: 100%;
                         height: 100vh;
                         top: 0;
                         left: 0;
                         background: rgb(17 24 39);
                         z-index: 10;
                         display: flex;
                         flex-direction: column;
                         justify-content: space-evenly;
                         align-items: center;
                         }
                         `}</style>
                    </div>
                    <div className={TeamCss.header}>
                     <h1><span className={TeamCss.text_blue}>Our</span><span className={TeamCss.text_white}> Team</span></h1>
                    </div>
                    <section>

                        <div className='grid md:grid-cols-3 gap-10 lg:gap-28 py-5 px-6 lg:px-32' >

                            <PeopleCard pic="" linkedin="" insta="" fb="" mail="" por="" name="" surname="" />
                            <PeopleCard />
                            <PeopleCard />

                        </div>

                    </section>
                    <section>

                        <div className=' grid grid-cols-1 md:grid-cols-3  lg:gap-10 py-5 px-6 lg:px-32'>
                            <div></div>
                            <PeopleCard />
                            <div></div>

                        </div>
                        <div className=' grid grid-cols-1 md:grid-cols-3 lg:gap-10 py-5 px-6 lg:px-32F'>
                            <div></div>
                            <PeopleCard />
                            <div></div>
                        </div>
                    </section>
                    <section>
                        <h3 className='text-white text-center font-bold pt-10 text-3xl'>Team Leaders</h3>
                        <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 py-5 px-12 md:px-2 lg:px-6'>
                            {/* <div></div> */}

                            {TeamsData.Team_Leaders.map((item, i) => (

                                <PeopleCard pic={process.env.PUBLIC_URL + item.pic} linkedin={item.LinkedIn} insta={item.Instagram} fb={item.Instagram} mail={item.GitHub} por={item.Position} name={item.Name} />
                            ))}                        {/* <div></div> */}

                        </div>

                        <h3 className='text-white text-center font-bold pt-10 text-2xl px-4'>Marketing Team</h3>
                        <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-14 py-5 px-4'>
                            {/* <div></div> */}
                            {TeamsData.Marketing.map((item, i) => (

                                <PeopleCard pic={process.env.PUBLIC_URL + item.pic} linkedin={item.LinkedIn} insta={item.Instagram} fb={item.Instagram} mail={item.GitHub} por="" name={item.Name} />
                            ))}

                            {/* <div></div> */}

                        </div>
                        <h3 className='text-white text-center font-bold pt-10 text-2xl px-4'>Technical Team</h3>
                        <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-14 py-5 px-4'>
                            {/* <div></div> */}

                            {TeamsData.Technical.map((item, i) => (

                                <PeopleCard pic={process.env.PUBLIC_URL + item.pic} linkedin={item.LinkedIn} insta={item.Instagram} fb={item.Instagram} mail={item.GitHub} por="" name={item.Name} />
                            ))}
                            {/* <div></div> */}

                        </div>
                        <h3 className='text-white text-center font-bold pt-10 text-2xl px-4'>Content and social media Team</h3>
                        <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-14 py-5 px-4'>
                            {/* <div></div> */}

                            {TeamsData.Content_and_social_media.map((item, i) => (

                                <PeopleCard pic={process.env.PUBLIC_URL + item.pic} linkedin={item.LinkedIn} insta={item.Instagram} fb={item.Instagram} mail={item.GitHub} por="" name={item.Name} />
                            ))}
                            {/* <div></div> */}

                        </div>
                        <h3 className='text-white text-center font-bold pt-10 text-2xl px-4'>Outreach Team</h3>
                        <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-14 py-5 px-4'>
                            {/* <div></div> */}

                            {TeamsData.Outreach.map((item, i) => (

                                <PeopleCard pic={process.env.PUBLIC_URL + item.pic} linkedin={item.LinkedIn} insta={item.Instagram} fb={item.Instagram} mail={item.GitHub} por="" name={item.Name} />
                            ))}
                            {/* <div></div> */}

                        </div>
                        <h3 className='text-white text-center font-bold pt-10 text-2xl px-4'>Creatives Team</h3>
                        <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-14 py-5 px-4'>
                            {/* <div></div> */}

                            {TeamsData.Creatives.map((item, i) => (

                                <PeopleCard pic={process.env.PUBLIC_URL + item.pic} linkedin={item.LinkedIn} insta={item.Instagram} fb={item.Instagram} mail={item.GitHub} por="" name={item.Name} />
                            ))}
                            {/* <div></div> */}

                        </div>
                    </section>
                </div>
            </div>
        </div>

    );
}
export default Team;





