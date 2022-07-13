const ADD = 'ADD';
const REMOVE = 'REMOVE';
const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state,
        {
          id: state.length + 1,
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

export const addBook = (title, author) => ({
  type: ADD,
  title,
  author,
});

export const removeBook = (id) => ({ type: REMOVE, id });
