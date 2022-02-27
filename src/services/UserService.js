import AjaxService from './AjaxService';

/**
 * Service that receive data and return to each method used into app
 * @returns {Promise}
 */

const UserService = {
  /**
 * Return user informations (id, first/lastname, todayscore and keydata)
 * @category Service
 * @param {String|!Number} userId 
 * @returns {Promise}
 */
  get: (userId) => {
    return new Promise((resolve) => {
      AjaxService.get(`user/${userId}`, 'user', userId)
        .then(resp => {
          resolve(resp.data)
        })
    })
  },
  /**
  * Return activities informations used into barchart
  * @category Service
  * @param {String|!Number} userId 
  * @returns {Promise}
  */
  getActivities: (userId) => {
    return new Promise((resolve) => {
      AjaxService.get(`user/${userId}/activity`, 'activity', userId)
        .then(resp => {
          resolve(resp.data.sessions)
        })
    })
  },
  /**
   * Return average sessions informations used into linechart
   * @category Service
   * @param {String|!Number} userId 
   * @returns {Promise}
   */
  getSessions: (userId) => {
    return new Promise((resolve) => {
      AjaxService.get(`user/${userId}/average-sessions`, 'average-sessions', userId)
        .then(resp => {
          resolve(resp.data.sessions)
        })
    })
  },
  /**
   * Return performance informations used into Radialchart
   * @category Service
   * @param {String|!Number} userId 
   * @returns {Promise}
   */
  getPerf: (userId) => {
    return new Promise((resolve) => {
      AjaxService.get(`user/${userId}/performance`, 'performance', userId)
        .then(resp => {
          resolve(resp.data)
        })
    })
  }
}

export default UserService;