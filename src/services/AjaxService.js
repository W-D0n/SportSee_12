import { BASE_URL, ENV } from "./Global";
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../assets/data/mock';

/**
 * Here we're fetching or importing local(mock) data. It depends on ./Global config
 * @param url specify which path will be choose to fetch data with API
 * @param mockObj specify which path will be choose to get mocked data
 * @param userId id passed by current user
 * @returns {Promise}
 */

const AjaxService = {
  get: (url, mockObj, userId) => {
    return new Promise((resolve, reject) => {
      if (ENV === 'prod') {
        fetch(BASE_URL + url)
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
            alert('request went wrong')
          })
      } else {
        switch (mockObj) {
          case 'user':
            resolve({ data: USER_MAIN_DATA.find(user => user.id === userId) })
            break;
          case 'activity':
            resolve({ data: USER_ACTIVITY.find(activity => activity.userId === userId) })
            break;
          case 'average-sessions':
            resolve({ data: USER_AVERAGE_SESSIONS.find(session => session.userId === userId) })
            break;
          case 'performance':
            resolve({ data: USER_PERFORMANCE.find(performance => performance.userId === userId) })
            break;
          default:
            reject('error')
        }
      }
    })
  },
}

export default AjaxService;