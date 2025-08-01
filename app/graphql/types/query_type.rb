# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.
    field :projects, [ProjectType], 'Returns all projects', null: false

    field :project, ProjectType, 'Returns a project', null: false do
      argument :id, ID, required: true
    end

    def projects
      if context[:current_user].present?
        context[:current_user].projects.ordered
      else
        []
      end
    end

    def project(id:)
      context[:current_user].projects.find(id)
    end
  end
end
