const STATUS = 'STATUS';

const initialState = [];

const statusReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case STATUS:
      return ['Under construction'];
    default:
      return state;
  }
};

export const checkStatus = () => ({ type: STATUS });

export default statusReducer;
