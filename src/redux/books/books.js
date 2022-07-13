const ADD = 'ADD';
const REMOVE = 'REMOVE';
const intialState = [];

export default (state = intialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
        },
      ];

    case REMOVE:
      return state.filter((listItem) => listItem.id !== action.id);

    default:
      return state;
  }
};

export const addBook = (title, author, state) => ({
  type: ADD,
  id: state.length + 1,
  title,
  author,
});

export const removeBook = (id) => ({ type: REMOVE, id });
