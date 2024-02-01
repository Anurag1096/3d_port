import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons';
import SpotlightButton from './SpotlightButton';
type Props={
    currentStage:number;
}
type InfoProps={
    text:string;
    link:string;
    btnText:string;
}

const InfoArea=(infoProps:InfoProps)=>{
   const {text,link , btnText}=infoProps
       return (
        <div className='info-box   '>
            <p className=' font-medium sm:text-xl text-center'> 
                {text}
                
                </p>
         
            <SpotlightButton btnText={btnText} link={link}/>
        </div>
       )
}

const renderTab = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug  text-center  glassmorphism  py-4 px-8 text-black mx-5">
      Hi, i am <span className=" font-semibold font-poppins">Anurag</span> 👋
      <br />A Frontend Engineer from India.
    </h1>
  ),
  2: (<InfoArea text='Worked with manny  companies and picked up manny skils along the way'
     link='/about'
     btnText='Learn more'
  />),
  3: (<InfoArea text='Worked with manny  companies and picked up manny skils along the way'
  link='/project'
  btnText='See project'
/>),
  4: (<InfoArea text='Worked with manny  companies and picked up manny skils along the way'
  link='/contact'
  btnText="Let's talk"
/>),
};

function Info(props:Props) {
  const {currentStage} = props;
  return renderTab[currentStage] || null
}

export default Info