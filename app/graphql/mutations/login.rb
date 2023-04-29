# frozen_string_literal: true

module Mutations
  class Login < BaseMutation
    include JsonWebToken

    argument :username, String, required: true
    argument :password, String, required: true

    field :token, String, null: false

    def resolve(username:, password:)
      user = User.find_by(username: username)
      if user&.authenticate(password)
        { token: jwt_encode(user_id: user.id) }
      else
        { error: 'Invalid username or password' }
      end
    end
  end
end