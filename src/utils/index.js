// Robust way to check if it's Node or browser
export const checkServer = () => {
  return typeof window === 'undefined'
}

export const sleep = sleepTime =>
  new Promise(resolve => setTimeout(resolve, sleepTime))
