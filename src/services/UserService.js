/**
 * 
 */
import AjaxService from './AjaxService';

const UserService = {
  get: (userId) => {
    return new Promise((resolve) => {
      AjaxService.get(`user/${userId}`, 'user', userId)
        .then(resp => {
          resolve(resp.data)
        })
    })
  },
  getActivities: (userId) => {
    return new Promise((resolve) => {
      AjaxService.get(`user/${userId}/activity`, 'activity', userId)
        .then(resp => {
          resolve(resp.data.sessions)
        })
    })
  },
  getSessions: (userId) => {
    return new Promise((resolve) => {
      AjaxService.get(`user/${userId}/average-sessions`, 'average-sessions', userId)
        .then(resp => {
          resolve(resp.data.sessions)
        })
    })
  },
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