const initialState = { people: [], person: {} };

export default (state = initialState, action) => {
  const { type, payload } = action;
  console.log('PAYLOAD:', payload, 'TYPE:', type);

  switch (type) {
    case 'GET':
      if (payload.people) {
        return Object.assign({}, state, { people: payload.people });
      } else if (payload.person) {
        return Object.assign({}, state, { person: payload.person });
      } else {
        return state;
      }
    // Update a resource
    //    case 'PATCH':
    //      index = state.list.findIndex(record => record._id === payload._id);
    //      record = state.list[index];
    //      newList = [...state.list];
    //      updatedRecord = Object.assign({}, record, payload);
    //      newList.splice(index, 1, updatedRecord);
    //      return Object.assign({ ...state, list: [...newList] });
    //    case 'POST':
    //      if (!payload._id) {
    //        payload._id = dumbId();
    //      }
    //      if (!payload.__v) {
    //        payload.__v = Math.floor(100 * Math.random());
    //      }
    //      return Object.assign({}, state, { list: [...state.list, payload] });
    //    // Replace a resource
    //    case 'PUT':
    //      index = state.list.findIndex(record => record._id === payload._id);
    //      record = state.list[index];
    //      newList = [...state.list];
    //      updatedRecord = Object.assign({}, record, payload);
    //      newList.splice(index, 1, updatedRecord);
    //      return Object.assign({ ...state, list: [...newList] });
    //
    //    case 'DELETE':
    //      updated = state.list.filter((record, index) => record._id !== payload);
    //      return Object.assign({}, state, { list: updated });
    default:
      return state;
  }
};
