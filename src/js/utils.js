const setCountdown = (delay) => {
    return new Promise(resolve => setTimeout(resolve, delay)); 
}

export {
    setCountdown
}