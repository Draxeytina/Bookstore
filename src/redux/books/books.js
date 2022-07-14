const ADD = 'ADD';
const REMOVE = 'REMOVE';
const initialState = [
  {
    id: 1,
    author: 'Emmanuel Makandiwa',
    title: 'Blood Remember Me',
    Category: 'Religion',
    progress: '64',
  },
  {
    id: 2,
    author: 'Ruth Makandiwa',
    title: 'Inspired To Love',
    Category: 'Drama',
    progress: '8',
  },
];

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
      return state.filter((listItem) => listItem.id !== action.id + 1);

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
