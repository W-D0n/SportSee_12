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
  }
}

export default Store;