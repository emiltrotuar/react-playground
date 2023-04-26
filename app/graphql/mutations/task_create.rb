# frozen_string_literal: true

module Mutations
  class TaskCreate < BaseMutation
    description "Creates a new task"

    field :task, Types::TaskType, null: false

    argument :name, String, required: true
    argument :project_id, Integer, required: true

    def resolve(name:, project_id:)
      task = ::Task.new(name: name, project_id: project_id)
      raise GraphQL::ExecutionError.new "Error creating task", extensions: task.errors.to_hash unless task.save

      { task: task }
    end
  end
end
