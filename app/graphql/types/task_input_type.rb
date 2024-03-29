# frozen_string_literal: true

module Types
  class TaskInputType < Types::BaseInputObject
    argument :id, Integer
    argument :name, String, required: false
    argument :project_id, Integer, required: false
    argument :completed, Boolean, required: false
  end
end
