const defaultArrWorks = {
  works: {
    items: [],
    isCounter: 0,
    filterStatus: 'SHOW_ALL',
    isEditer: false,
  },
};

const addWorkReducer = (state = defaultArrWorks, action) => {
  if (action.type === 'GET_WORKS') {
    console.log(action.data.length)
    return {
      ...state,
      works: {
        ...state.works,
        items: action.data,
        isCounter: action.data.length,
      },
      
    };
  }

  if (action.type === 'ADD_WORK') {
    return {
      ...state,
      works: {
        ...state.works,
        items: [
          {
            id: action.id,
            title: action.title,
            isCompleted: action.isCompleted,
          },
          ...state.works.items,
        ],
        isCounter: state.works.items.length + 1,
      },
    };
  }

  if (action.type === 'DELETE_WORK') {
    return {
      ...state,
      works: {
        ...state.works,
        items: [...state.works.items.filter(item => item._id !== action.id)],
      },
    };
  }

  if (action.type === 'EDIT_WORK') {
    return {
      ...state,
      works: {
        ...state.works,
        items: state.works.items.map(item => {
          if (item.id !== action.id) return item;
          return {...item, title: action.title, isCompleted: false};
        }),
        isEditer: true,
      },
    };
  }

  if (action.type === 'DELETE_ALL_WORKS') {
    return {
      ...state,
      works: {
        ...state.works,
        items: [],
        isCounter: -1,
      },
    };
  }

  if (action.type === 'COMPLETE_WORK') {
    return {
      ...state,
      works: {
        ...state.works,
        items: state.works.items.map(item => {
          if (item._id !== action.id) return item;
          return {...item, isCompleted: !item.isCompleted};
        }),
      },
    };
  }

  if (action.type === 'FILTER_SHOW_ALL') {
    return {
      ...state,
      works: {
        ...state.works,
        filterStatus: 'SHOW_ALL',
      },
    };
  }

  if (action.type === 'FILTER_UNCOMPLETED') {
    return {
      ...state,
      works: {
        ...state.works,
        filterStatus: 'SHOW_UNCOMPLETED',
      },
    };
  }

  if (action.type === 'FILTER_COMPLETED') {
    return {
      ...state,
      works: {
        ...state.works,
        filterStatus: 'SHOW_COMPLETED',
      },
    };
  }

  return state;
};
export default addWorkReducer;
