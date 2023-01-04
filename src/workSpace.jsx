import React from 'react'
import styles from './style.js'
   import { Billing,Business,Button,Card,CTA,Clinet,FeedBackCard,Footer,GetStarted,Hero,Navbar,Stats,Testimonials
    } from './components/Components.jsx'


const WorkSpace = () => 
    {
        return (
            <>
              <div className=' w-full overflow-hidden bg-primary  '>
             <div className={`${styles.paddingX} ${styles.flexCenter}`}>  
              <div className={`${styles.boxWidth}`}> 
             {/* <h1>heeu</h1> */}
              <Navbar/>
                </div >
                
      
               </div > 
               <div className={`bg-primary ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                
                   <Hero/>
           </div>
            </div> 
            
            <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
              <div className={`${styles.boxWidth}`}>
                
              < Stats /> 
               <Business />
                  <Billing />
                  <Card /> 
                  <Testimonials />  
                  <br /> <br /> <br /> <br />
                  <Clinet /> 
                  < CTA />   <br /> <br /> <br />        
                < Footer/>
      
            </div>
              </div>  
    
          
      
                </div>
                </>
          
        )
      }
export default WorkSpace