export const formatTime =(time)=>{
    const date = new Date(time)
    const hours  = padeZero(date.getHours())
    const minutes  = padeZero(date.getMinutes())
  
     return ` ${hours}:${minutes}`
}


function padeZero(number){

    return number.toString().padStart(2,"0")
}
