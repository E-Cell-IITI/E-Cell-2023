import React from 'react'

import TeamCss from "../css/TeamCss.module.css"
import PeopleCard from '../helpers/PeopleCard'

const Team = () => {
    return (
        <div className='bg-[#1B262C]'>
            <div className='container mx-auto px-5 m-auto'>

                <div className={TeamCss.header}>
                    <h1><span className={TeamCss.text_blue}>Our</span><span className={TeamCss.text_white}> Team</span></h1>
                </div>
                <section>

                    <div className='grid md:grid-cols-3 gap-10 lg:gap-28 py-5 px-6 lg:px-32' >

                        <PeopleCard />
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

                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        {/* <div></div> */}

                    </div>

                    <h3 className='text-white text-center font-bold pt-10 text-2xl px-4'>Marketing Team</h3>
                    <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-14 py-5 px-4'>
                        {/* <div></div> */}

                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        {/* <div></div> */}

                    </div>
                    <h3 className='text-white text-center font-bold pt-10 text-2xl px-4'>Marketing Team</h3>
                    <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-14 py-5 px-4'>
                        {/* <div></div> */}

                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        {/* <div></div> */}

                    </div>
                    <h3 className='text-white text-center font-bold pt-10 text-2xl px-4'>Marketing Team</h3>
                    <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-14 py-5 px-4'>
                        {/* <div></div> */}

                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        {/* <div></div> */}

                    </div>
                    <h3 className='text-white text-center font-bold pt-10 text-2xl px-4'>Marketing Team</h3>
                    <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-14 py-5 px-4'>
                        {/* <div></div> */}

                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        {/* <div></div> */}

                    </div>
                    <h3 className='text-white text-center font-bold pt-10 text-2xl px-4'>Marketing Team</h3>
                    <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-14 py-5 px-4'>
                        {/* <div></div> */}

                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        {/* <div></div> */}

                    </div>
                    <h3 className='text-white text-center font-bold pt-10 text-2xl px-4'>Marketing Team</h3>
                    <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-14 py-5 px-4'>
                        {/* <div></div> */}

                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        {/* <div></div> */}

                    </div>
                    <h3 className='text-white text-center font-bold pt-10 text-2xl px-4'>Marketing Team</h3>
                    <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-14 py-5 px-4'>
                        {/* <div></div> */}

                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        <PeopleCard />
                        {/* <div></div> */}

                    </div>
                </section>






            </div>
        </div>
    )
}

export default Team