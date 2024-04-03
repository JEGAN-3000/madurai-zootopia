import { useEffect, useState } from 'react'

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(()=>{
    const timer=setInterval(()=>{
      setCurrentTime(new Date())
    },1000)
    return  () => clearInterval(timer); 
  },[])
  const formatHour=(hour)=>{
    return hour===  0 ? 12 : hour > 12 ? hour - 12 : hour;
  };
  const formatTimeWithLeadingZero=(num)=>{
    return num<10?`0${num}`:num;
  };
  const formatDate=(date)=>{
    const options={weekday:"long",year:"numeric",month:"long",day:"numeric"}
    return date.toLocaleDateString(undefined,options)
  }
  return (
    <>
      <div className="digital_Clock flex md:gap-4 text-[15px] md:text-3xl">      
        <div className="time text-1xl mx-auto   ">{formatTimeWithLeadingZero(formatHour(currentTime.getHours()))}:{formatTimeWithLeadingZero(currentTime.getMinutes())}:{formatTimeWithLeadingZero(currentTime.getSeconds())} {currentTime.getHours()>=12?" PM ":" AM "} </div>
        <div className="date text-1xl mx-auto">{ formatDate(currentTime)}</div>
      </div>    
    </>
  )
}

export default Clock
