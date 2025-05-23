import img1 from '../images/amul/tkp.png'
import img2 from '../images/amul/amul.png'
import img3 from '../images/amul/rev.jpg'
import React, { useEffect} from 'react';
import { Link, useLocation } from "react-router-dom";
import "../css/Blogs.css"
export default function BlogsPage2() {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  return (
    <div>
      <>
            <div className="bg-gray-900 py-12 px-18 pr-6 pl-6 md:py-20 lg:px-24">
            <Link to= "/"  ><button>Home</button></Link>                
            <div className="py-8">
                    <h1 className="text-white text-4xl  lg:text-6xl text-center font-bold pb-12">Amul-Case Study</h1>
                    <p className="text-right italic">Published on 1 June 2023</p>
                </div>
                
                <div className="md:flex md:flex-row-reverse w-full">
                <div className="w-full md:w-2/6">
                        <img src={img1} className="w-full px-20 sm:px-48 md:pl-0 md:pr-12 md:pb-20 lg:px-20"></img>
                    </div>
                    <div className="md:w-3/5 pb-12 text-l lg:text-xl">
                    <h1 className="text-white text-3xl lg:text-4xl font-bold pb-4">Origin</h1>
                        <p>Amul was found on 19 December 1946 as a response to the exploitation of small dairy farmers by traders and agents. At the time, milk prices were arbitrarily determined, giving Polson an effective monopoly in milk
Collection from Kaira and its subsequent supply to Mumbai.</p><p>
Tribhuvandas Kishibhai Patel founded the organization in 1946 and served as its chairman until his retirement in the 1970s. He hired Verghese Kurien in 1949,initially as the general manager, where Kurien guided the technical and marketing efforts of the cooperative.</p>
                    
                    </div>
                </div>
                <div className="md:flex w-full">
                <div className="md:w-2/6 flex-column justify-center items-center m-auto">
                        <img src={img2} className="w-full px-12 sm:px-20 md:px-4"></img>
                    </div>
                <div className="md:w-3/5 text-l lg:text-xl pb-8">
                <h1 className="text-white text-3xl lg:text-4xl font-bold pb-12">Business Model</h1>
                <p>A cooperative society is one where people come together and pool their resources. All these people are members. They take care of resources, finances, and operations of the cooperative enterprise.The advantage of cooperative is one and only, scalability.</p>
                             
                        
                    
                    </div>

                </div>
                <div className="md:flex pt-4 md:flex-row-reverse w-full md:px-12">
                <div className="w-full md:w-2/3 md:px-16">
                        <img src={img3} className="w-full  py-24 px-20 md:px-4 md:py-32"></img>
                    </div>
                    <div className="md:w-3/5 pb-12 text-l lg:text-xl">
                    <h1 className="text-white text-3xl lg:text-4xl font-bold pb-4">Revenue</h1>
                    <ul className ="text-white list-disc pl-4">
                            <li>7 billion USD or 55055 crore revenue in 2022</li>
                            <li>Daily Milk Collection 27 million liters</li>
                        </ul>
                    <h1 className="text-white text-3xl lg:text-4xl font-bold pb-4">Growth</h1>
                    <ul className ="text-white list-disc pl-4">
                            <li>It is important to note that Amul was ranked 18th largest dairy organization of the world</li>
                            <li>In the year 2011 and rising up to its current position as 9th largest dairy organization and targeting to enter top 3 dairy organizations.</li>
                            <li>Amul expects a growth rate of 20% for FY24.</li>
                            <li>In 2023 Amul's turnover growth was 18.5%</li>
                        </ul>
                    
                    </div>
                </div>
                <div className="pb-12 text-l lg:text-xl md:px-12">
                    <h1 className="text-white text-3xl lg:text-4xl font-bold pb-4">Advertising Strategy</h1>
                        <p>Amul's tagline- 'The taste of India' is a reflection of the brand's commitment to providing consumers with authentic and delicious dairy products.</p><p>
Another iconic aspect of Amul's branding is The never-ageing girl The Amul Girl is often depicted in cartoons, holding a packet of Amul butter and commenting on current events, sports, and social issues in a humorous and satirical manner. The Amul Girl has not only helped the brand connect with consumers on a deeper level but has also become a symbol of India's vibrant and diverse culture.</p><p>
Amul marketed all of its products under a single name, which helps the brand sum up its marketing and advertising costs within 1% of the revenue.</p>
                    
                    </div>
                
            </div>
        </>
    </div>
  )
}
