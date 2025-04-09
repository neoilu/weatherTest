const normalizeTime = (time: string): string => {
    const date = new Date(time);
    
    let hours = date.getHours();
    const period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; 
  
    return `${hours}${period}`;
  }
  
  export default normalizeTime;
  