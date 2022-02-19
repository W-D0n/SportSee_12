const Store = {
  get: (url) => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(resp => {
          if (!resp.ok) {
            reject({
              error: true,
              status: resp.status
            })
          } else {
            return resp.json()
          }
        })
        .then(data => {
          resolve(data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  // getUser:(url) =>{},
  // getActivities:(url) =>{},
  // getSessions:(url) =>{},
  // getPerformance:(url) =>{}
}

export default Store;