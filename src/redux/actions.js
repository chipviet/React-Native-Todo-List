import axios from 'axios';
import {is} from '@babel/types';

export function fetchDataWork() {
  return dispatch => {
    axios
      .get('http://10.11.1.39:3500/')
      .then(res => {
        dispatch(getWorks(res.data));
      })
      .catch(err => console.log('Can not fetch data from database'));
  };
}
export function getWorks(data) {
  return {
    type: 'GET_WORKS',
    data,
  };
}

export function postDataWork(id, title, isCompleted) {
  return dispatch => {
    axios
      .post(`http://10.11.1.39:3500/`, {
        title,
        isCompleted,
      })
      .then(res => {
        dispatch(addWork(id, title, isCompleted));
      })
      .catch(err => {
        console.log('Can not post data to database');
      });
  };
}

export function addWork(id, title, isCompleted) {
  return {
    type: 'ADD_WORK',
    id,
    title,
    isCompleted,
  };
}

export function deleteDataWork(id) {
  return dispatch => {
    axios
      .delete('http://10.11.1.39:3500/', {
        params: {id},
      })
      .then(res => {
        dispatch(deleteWork(id));
      })
      .catch(err => {
        console.log('error:', err);
      });
  };
}

export function deleteWork(id) {
  return {
    type: 'DELETE_WORK',
    id,
  };
}

export function completeDataWork(id, risCompleted) {
  return dispatch => {
    axios
      .put(`http://10.11.1.39:3500/${id}`, {
        params: {isCompleted: !risCompleted},
      })
      .then(res => {
        dispatch(completeWork(id));
      })
      .catch(err => {
        console.log('error:', err);
      });
  };
}

export function completeWork(id) {
  return {
    type: 'COMPLETE_WORK',
    id,
  };
}

export function showAll() {
  return {
    type: 'FILTER_SHOW_ALL',
  };
}

export function showCompleted() {
  return {
    type: 'FILTER_COMPLETED',
  };
}

export function showUncompleted() {
  return {
    type: 'FILTER_UNCOMPLETED',
  };
}

export function deletedAllWork() {
  return {
    type: 'DELETE_ALL_WORKS',
  };
}
