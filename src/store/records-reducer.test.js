import people from './records-reducer';

describe('people reducer', () => {
  const mickey = {
    name: 'Mickey',
    position: 'C',
    throws: 'L',
    bats: 'L',
    team: 'Dodgers',
    _id: 0,
    __v: 4,
  };
  it('should be good', () => {
    expect(true).toBeTruthy();
  });
  xit('should POST', () => {
    const action = { payload: mickey, type: 'POST' };
    const result = people(undefined, action);
    expect(result.list).toEqual(expect.arrayContaining([mickey]));
  });
  xit('should GET', () => {
    const action = { payload: mickey._id, type: 'GET' };
    const result = people(undefined, action);
    expect(result.active).toMatchObject(mickey);
  });
  xit('should PATCH', () => {
    const mikey = Object.assign({}, mickey, { name: 'Mikey' });
    const action = { payload: mikey, type: 'PATCH' };
    const result = people(undefined, action);
    expect(result.list).toEqual(expect.arrayContaining([mikey]));
    expect(result.list).not.toEqual(expect.arrayContaining([mickey]));
  });
  xit('should PUT', () => {
    const mikey = Object.assign({}, mickey, { name: 'Mikey' });
    const action = { payload: mikey, type: 'PUT' };
    const result = people(undefined, action);
    expect(result.list).toEqual(expect.arrayContaining([mikey]));
    expect(result.list).not.toEqual(expect.arrayContaining([mickey]));
  });
  xit('should DELETE', () => {
    const action = { payload: 1, type: 'DELETE' };
    const result = people(undefined, action);
    expect(result.list).not.toEqual(expect.arrayContaining([mickey]));
  });
});
