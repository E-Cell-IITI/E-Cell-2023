import img1 from '../images/skyroot/sky_origin-rbg.png'
import img2 from '../images/skyroot/Skyroot_New_Logo.jpg'
import React, { useEffect} from 'react';
import { Link, useLocation } from "react-router-dom";
import "../css/Blogs.css"
export default function BlogsPage4() {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  return (
    <div>
      <>
            <div className="bg-gray-900 py-12 px-18 pr-6 pl-6 lg:py-20 lg:px-24">
            <Link to= "/"  ><button>Home</button></Link>
                <div className="py-8">
                    <h1 className="text-white text-4xl lg:text-6xl text-center font-bold pb-12">Skyroot - Case Study</h1>
                    <p className="text-right italic">Published on 11 June 2023</p>
                </div>
                
                <div className="md:flex  md:flex-row-reverse w-full">
                <div className="w-full md:w-2/6 md:px-16">
                        <img src={img1} className="w-full px-20 sm:px-48 md:px-0 justify-center py-12 md:py-32"></img>
                    </div>
                    <div className="md:w-3/5 pb-12 text-l lg:text-xl">
                    <h1 className="text-white text-3xl lg:text-4xl font-bold pb-4">Origin</h1>
                        <p>Skyroot Aerospace is an Indian aerospace startup that was founded in 2018 by the former engineers of Indian Space Research Organisation(ISRO), Pawan Kumar Chandana, Naga Bharath Daka, and Vasudevan Gnanagandhi. The company is based in Hyderabad and is focused on developing and manufacturing rockets for launching small satellites into space.</p><p>
The name "Skyroot" is derived from the idea of taking space to the roots of society and making it accessible. Skyroot has already received funding from several investors, including Mukesh Bansal, the co-founder of Myntra.</p>
                             <h1 className="text-white text-3xl lg:text-4xl font-bold pb-12">Business Model</h1>
                <p>Skyroot Aerospace operates as a launch vehicle company and has adopted a business to business (B2B) model. Their primary revenue streams come from providing launch services to satellite manufactures, research organisation, and government agencies. Skyroot also offers consultancy and advisory services in the areas of space subsystem design, system engineering, mission analysis.</p><p>
Overall, Skyroot business model is centered around their core strengths of developing low cost, responsive launch vehicles while maintaining their focus on quality</p>
                    
                    </div>
                
                </div>
                <div className="md:flex w-full">
                <div className="w-full md:w-2/3 lg:px-16">
                        <img src={img2} className="w-full px-20 py-24 md:py-32 md:px-12"></img>
                    </div>
                    <div className="md:w-3/5 pb-12 text-l lg:text-xl">

                    <h1 className="text-white text-3xl lg:text-4xl font-bold pb-4">Growth</h1>
                    <ul className ="text-white list-disc pl-4">
                            <li>Skyroot successfully raised $51M Series B financing round led by GIC, a leading global investment firm.</li>
                            <li>Indian space tech start ups improve as average funding has increased to $17M in 2022 from $0.5M in 2019.</li>
                            <li>India's space industry go from $7billion in 2019 to $50billion in 2024</li>
                            
                        </ul>
                    <h1 className="text-white text-3xl lg:text-4xl font-bold pb-4">Financial Report</h1>
                    <ul className ="text-white list-disc pl-4">
                            <li>Estimated annual revenue is currently $35.1M per year.</li>
                            <li>Operating revenue is in range of Under INR 1cr for FY ending on 31 March, 2022</li>
                            <li>Estimated revenue per employee is $189,545.</li>
                        </ul>
                    
                    </div>
                </div>
                
                
            </div>
        </>
    </div>
  )
}
