import React from 'react'

//data
import TeamsData from "../data/Team.json"
//helpers
import TeamCss from "../css/TeamCss.module.css"
import PeopleCard from '../helpers/PeopleCard'
import { Link } from 'react-router-dom'

const Team = () => {
    return (
        <div style={{ background: 'linear-gradient(to right, #add8e6, #b0e0e6, #87cefa, #b0c4de)' }}>


            <div className='container mx-auto px-5 m-auto'>
                <div className={TeamCss.header}>

                    <h1><span className={TeamCss.text_blue}>Our</span><span className={TeamCss.text_white}> Team</span></h1>
                </div>
                <section>

                    <div className='grid md:grid-cols-3 gap-10 lg:gap-28 py-5 px-6 lg:px-32' >

                    {TeamsData.Professors.map((item, i) => (

<PeopleCard pic={process.env.PUBLIC_URL + item.pic} linkedin={item.LinkedIn} insta={item.Instagram} fb={item.Instagram} mail={item.GitHub} por={item.Position} name={item.Name} />
))}

                    </div>
                </section>
                <section>

                    {/* <div className=' grid grid-cols-1 md:grid-cols-3  lg:gap-28 py-5 px-6 lg:px-32'>
                        <div></div>
                        <PeopleCard />
                        <div></div>

                    </div> */}
                    
                        {TeamsData.Overall_Coordinators.map((item, i) => (
                                <div className=' grid grid-cols-1 md:grid-cols-3 lg:gap-28 py-5 px-6 lg:px-32'>
                                <div></div>
                            <PeopleCard pic={process.env.PUBLIC_URL + item.pic} linkedin={item.LinkedIn} insta={item.Instagram} fb={item.Instagram} mail={item.GitHub} por={item.Position} name={item.Name} />
                            <div></div>
                    </div>
                        ))}
                        
                </section>
                <section>
                    <h3 className='text-white text-center font-bold pt-10 text-4xl pb-10'>Team Leaders</h3>
                    <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-20 py-5 px-12 md:px-2 lg:px-6'>
                        {/* <div></div> */}

                        {TeamsData.Team_Leaders.map((item, i) => (

                            <PeopleCard pic={process.env.PUBLIC_URL + item.pic} linkedin={item.LinkedIn} insta={item.Instagram} fb={item.Instagram} mail={item.GitHub} por={item.Position} name={item.Name} />
                        ))}                        {/* <div></div> */}

                    </div>

                    <h3 className='text-white text-center font-bold pt-10 text-3xl px-4 pb-10'>Marketing Team</h3>
                    <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-14 py-5 px-4'>
                        {/* <div></div> */}
                        {TeamsData.Marketing.map((item, i) => (

                            <PeopleCard pic={process.env.PUBLIC_URL + item.pic} linkedin={item.LinkedIn} insta={item.Instagram} fb={item.Instagram} mail={item.GitHub} por="" name={item.Name} />
                        ))}

                        {/* <div></div> */}

                    </div>
                    <h3 className='text-white text-center font-bold pt-10 text-3xl px-4 pb-10'>Technicals Team</h3>
                    <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-14 py-5 px-4'>
                        {/* <div></div> */}

                        {TeamsData.Technical.map((item, i) => (

                            <PeopleCard pic={process.env.PUBLIC_URL + item.pic} linkedin={item.LinkedIn} insta={item.Instagram} fb={item.Instagram} mail={item.GitHub} por="" name={item.Name} />
                        ))}
                        {/* <div></div> */}

                    </div>
                    <h3 className='text-white text-center font-bold pt-10 text-3xl px-4 pb-10'>Content and social media Team</h3>
                    <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-14 py-5 px-4'>
                        {/* <div></div> */}

                        {TeamsData.Content_and_social_media.map((item, i) => (

                            <PeopleCard pic={process.env.PUBLIC_URL + item.pic} linkedin={item.LinkedIn} insta={item.Instagram} fb={item.Instagram} mail={item.GitHub} por="" name={item.Name} />
                        ))}
                        {/* <div></div> */}

                    </div>
                    <h3 className='text-white text-center font-bold pt-10 text-3xl px-4 pb-10'>Outreach Team</h3>
                    <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-14 py-5 px-4'>
                        {/* <div></div> */}

                        {TeamsData.Outreach.map((item, i) => (

                            <PeopleCard pic={process.env.PUBLIC_URL + item.pic} linkedin={item.LinkedIn} insta={item.Instagram} fb={item.Instagram} mail={item.GitHub} por="" name={item.Name} />
                        ))}
                        {/* <div></div> */}

                    </div>
                    <h3 className='text-white text-center font-bold pt-10 text-3xl px-4 pb-10'>Creatives Team</h3>
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
    )
}

export default Team



