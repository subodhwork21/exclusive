const convertSeconds = (seconds: number) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
  
    const dayString = days > 0 ? `${days}` : '0';
    const hourString = hours > 0 ? `${hours}` : '0';
    const minuteString = minutes > 0 ? `${minutes }` : '0';
    const secondString =
      remainingSeconds > 0 ? `${remainingSeconds }` : '0';
  
    if (days > 0) {
      return [dayString, hourString || 0, minuteString || 0, secondString && secondString];
    } else if (!days && hours > 0) {
      return [0,hourString, minuteString || 0, secondString && secondString];
    } else if (!days && !hours && minutes > 0) {
      return [0,0,minuteString, secondString && secondString];
    }
  
    return [0, 0, 0, secondString];
  };
  

  export {convertSeconds};