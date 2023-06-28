import React from 'react'
import img1 from '../images/sam-walton.webp'
import img2 from '../images/low_price.jpg'
import img3 from '../images/growth.jpg'
export default function BlogsPage3() {
  return (
    <div>
      <>
            <div className="bg-gray-900 py-12 px-36 lg:py-20">
                <div className="py-8">
                    <h1 className="text-white text-6xl text-center font-bold pb-12">WallMart - Case Study</h1>
                    <p className="text-right italic">Published on 21 June 2023</p>
                </div>
                
                <div className="lg:flex lg:flex-row-reverse w-full">
                <div className="w-full lg:w-2/6 lg:px-16">
                        <img src={img1} className="w-full py-24 md:py-32"></img>
                    </div>
                    <div className="lg:w-3/5 pb-12 text-2xl pb-8">
                    <h1 className="text-white text-4xl font-bold pb-4">Origin</h1>
                        <p>WALMART, A US-BASED MULTINATIONAL RETAIL CORPORATION, WAS ESTABLISHED IN 1962 BY SAM WALTON IN ROGERS, ARKANSAS. THE FIRST WALMART STORE, NAMED WALMART DISCOUNT CITY, OPENED ON JULY 2, 1962. IT AIMED TO PROVIDE AFFORDABLE MERCHANDISE TO CUSTOMERS AND COMPETE WITH OTHER RETAILERS BY OFFERING A DIVERSE RANGE OF PRODUCTS AT LOWER PRICES.</p>
                    
                    </div>
                </div>
                <div className="lg:flex w-full">
                <div className="lg:w-2/6 flex-column justify-center items-center m-auto">
                        <img src={img2} className="w-full"></img>
                    </div>
                <div className="lg:w-3/5 text-2xl pb-8">
                <h1 className="text-white text-4xl font-bold pb-12">Business Model</h1>
                <p>WALMART'S BUSINESS MODEL REVOLVES AROUND OFFERING A WIDE VARIETY OF PRODUCTS AT LOW PRICES TO ATTRACT CUSTOMERS. KEY ELEMENTS INCLUDE PROVIDING AFFORDABLE PRICES ACROSS MULTIPLE CATEGORIES, OFFERING A DIVERSE SELECTION OF PRODUCTS, AND MAINTAINING AN EFFICIENT SUPPLY CHAIN FOR PRODUCT AVAILABILITY.</p>
                             
                        
                    
                    </div>

                </div>
                <div className="lg:flex lg:flex-row-reverse w-full">
                <div className="w-full lg:w-2/3 lg:px-16">
                        <img src={img3} className="w-full py-24 md:py-32"></img>
                    </div>
                    <div className="lg:w-3/5 pb-12 text-2xl pb-8">
                    
                    <h1 className="text-white text-4xl font-bold pb-4">Growth</h1>
                    <ul className ="text-white list-disc">
                            <li>WALMART'S REVENUE HAS STEADILY INCREASED OVER TIME. IN THE FISCAL YEAR 2021, WALMART REPORTED TOTAL REVENUE OF APPROXIMATELY $559 BILLION, MAKING IT ONE OF THE WORLD'S LARGEST COMPANIES BY REVENUE</li>
                            <li>WALMART ANNUAL REVENUE FOR 2023 WAS $611.289B, A 6.73% INCREASE FROM 2022</li>
                        </ul>
                    <h1 className="text-white text-4xl font-bold pb-4">Financial Report</h1>
                    <ul className ="text-white list-disc">
                        <li>WALMART HAS A TOTAL SHAREHOLDER EQUITY OF $79.5B AND TOTAL DEBT OF $41.6B, WHICH BRINGS ITS DEBT- TO-EQUITY RATIO TO 52.4%</li>
                        <li>ITS TOTAL ASSETS AND TOTAL LIABILITIES ARE $245.1B AND $165.6B RESPECTIVELY.</li>
                        <li>WALMART HAS BEEN GROWING EARNINGS AT AN AVERAGE ANNUAL RATE OF 6.4%</li>
                        
                    </ul>
                    
                    
                    </div>
                </div>
                
                
            </div>
        </>
    </div>
  )
}
