# frozen_string_literal: true

module Mutations
  class ProjectUpdate < BaseMutation
    field :project, Types::ProjectType, null: false

    argument :id, Integer, required: true
    argument :name, String, required: true

    def resolve(id:, name:)
      project = ::Project.find(id)

      raise GraphQL::ExecutionError.new "Error updating project", extensions: project.errors.to_hash unless project.update(name: name)

      { project: project }
    end
  end
end
