const projects = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
        },
      ];
    case 'REMOVE_PROJECT':
      return state.filter((project) => project.id !== action.id);
    case 'UPDATE_PROJECT':
      return state.map((project) => (project.id === action.id
        ? { ...project, name: action.name }
        : project));

    default:
      return state;
  }
};

export default projects;
