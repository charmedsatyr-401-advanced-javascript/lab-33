import superagent from 'superagent';

export const get = url => dispatch => {
  if (url) {
    superagent.get(url).then(data => {
      const person = data.body;
      dispatch(getSync({ person }));
    });
  } else {
    const url = 'https://swapi.co/api/people/';
    superagent.get(url).then(data => {
      const people = data.body.results;
      dispatch(getSync({ people }));
    });
  }
};

export const getSync = payload => ({ payload, type: 'GET' });

export const destroy = payload => ({ payload, type: 'DELETE' });
export const patch = payload => ({ payload, type: 'PATCH' });
export const post = payload => ({ payload, type: 'POST' });
export const put = payload => ({ payload, type: 'PUT' });
