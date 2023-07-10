import React from 'react'
import img1 from '../images/ipl/sv.png'
import img2 from '../images/ipl/tata.png'
import img3 from '../images/ipl/ceat.png'
import img4 from '../images/ipl/rcb.png'
import img5 from '../images/ipl/csk.png'
import {Link} from 'react-router-dom'
import "../css/Blogs.css"
export default function BlogsPage5() {
  return (
    <div>
      <>
            <div className="bg-gray-900 py-12 px-18 lg:py-20 lg:px-24">
            <Link to= "/" ><button>Home</button></Link>
                <div className="py-8">
                    <h1 className="text-white text-4xl lg:text-6xl text-center font-bold pb-12">IPL-Case Study</h1>
                    <p className="text-right italic">Published on 30 May 2023</p>
                </div>
                
                <div className="md:flex md:flex-row-reverse w-full">
                <div className="w-full md:w-2/6 md:px-8">
                        <img src={img1} className="w-full px-12 sm:px-24 py-24 md:py-32 md:px-0 lg:pb-4 lg:pt-2"></img>
                    </div>
                    <div className="md:w-3/5 pb-12 text-l lg:text-xl">
                    {/* <h1 className="text-white text-4xl font-bold pb-4">Origin</h1> */}
                        <p>IPL is a profitable venture started back in 2008 by BCCI. And now it has become a money making machine for the organization. Let us have a look at the Brand value of IPL and the earnings of BCCI through IPL.
                         </p><p> Last Year Viacom 18 in the month of June won the IPL's digital media rights for Rs 23,758 crore, while Star India grabbed India TV rights for 23,575 crore in a SAIA five-year deal. vive Camera & Musk Cantera & Music vivo Camera </p>
                    
                    </div>
                </div>
                <div className="md:flex w-full">
                <div className="md:w-2/6 flex-column justify-center items-center m-auto">
                        <img src={img2} className="w-full py-8 px-12 sm:px-20 md:px-0"></img>
                    </div>
                <div className="md:w-3/5 text-l lg:text-xl pb-8">
                
                <p>The deals combined were sold for a record $6.02 billion, much more than the previous five-year deal of $2.4 billion won by Star India. Viacom18 also won the non-exclusive Package-C for Rs 2,991 crore, while along with Times Internet, Viacom18 also won overseas TV and digital rights for Rs 1,324 crore.</p><p>
The Title Sponsorship deal was won by TATA at a whopping amount of Rs 670 Crores for two years.</p>
                             
                        
                    
                    </div>

                </div>
                <div className="md:flex md:flex-row-reverse w-full md:px-12">
                <div className="w-full md:w-2/3 md:px-20">
                        <img src={img3} className="w-full py-12 px-12 sm:px-20 md:py-32 md:px-0 lg:py-20"></img>
                    </div>
                    <div className="md:w-3/5 pb-12 text-l lg:text-xl">
                    
                    <p>The Official Sponsors of the league( Dream 11, CRED, up, RuPay, Saudi Tourism Authority, Swiggy Instamart, Upstox) also gave an amount of 210 Crores to the BCCI. The deal for the umpire sponsors was sold to PayTM at Rs 28 Crores The deal of strategic timeout sponsor was given to CEAT at a price of 30 Crores The starting price of online tickets range from Rs 500 to Rs 2,100, the end price can go up to Rs 30,000.</p>
                    </div>
                </div>
                <div className="md:flex w-full md:px-4">
                    <div className="flex md:w-2/6 px-12 sm:px-20 md:px-0 pb-2">
                        <div className="md:w-2/6 flex-column justify-center items-center m-auto">
                                <img src={img4} className="px-2"></img>
                            </div>
                            <div className="md:w-2/6 flex-column justify-center items-center m-auto">
                                <img src={img5} className="px-2"></img>
                            </div>
                    </div>
                <div className="md:w-3/5 text-l lg:text-xl pb-8">
                
                <p>According to some source-based reports, Viacom18 has targeted ad revenue of Rs 3,700 crore from IPL 2023. The BCCI on an average has earned ₹107.5 crore per game from the television and digital avenue in the Indian subcontinent. Thus it is a money money deal for vivo Camera & the s&Mooir
BCCI</p>
                             
                        
                    
                    </div>
                    </div>
                
            </div>
        </>
    </div>
  )
}
