let host =
  typeof window !== 'undefined' ? window.location.hostname : process.env.API_URL

const SERVER_URL = host

export const API_URL = {}
