const server = axios.create({
   baseURL: BASEURL,
   timeout: 10000,
   headers: {
     'Content-Type': 'application/json;charset=UTF-8'
   }
})
