import { gql } from 'graphql-request';

export const GET_PROJECTS = gql`
  query {
    projects {
      id
      name
      tasks {
        id
        name
        completed
      }
    }
  }
`;

export const CREATE_PROJECT = gql`
  mutation CreateProject($name: String!) {
    createProject(input: { name: $name }) {
      project {
        id
        name
      }
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation UpdateProject($id: Int!, $name: String!) {
    updateProject(input: { id: $id, name: $name }) {
      project {
        id
        name
      }
    }
  }
`;

export const REMOVE_PROJECT = gql`
  mutation RemoveProject($id: Int!) {
    removeProject(input: { id: $id }) {
      project {
        id
      }
    }
  }
`;

export const CREATE_TASK = gql`
  mutation CreateTask($name: String!, $projectId: Int!) {
    createTask(input: { name: $name, projectId: $projectId }) {
      task {
        id
        name
        completed
      }
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation UpdateTask($id: Int!, $name: String, $projectId: Int, $completed: Boolean) {
    updateTask(
      input: { taskInput: { id: $id, name: $name, projectId: $projectId, completed: $completed } }
    ) {
      task {
        id
        name
        projectId
        completed
      }
    }
  }
`;

export const REMOVE_TASK = gql`
  mutation RemoveTask($id: Int!) {
    removeTask(input: { id: $id }) {
      task {
        id
      }
    }
  }
`;
