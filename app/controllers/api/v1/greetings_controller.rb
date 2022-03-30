module Api
  module V1
    class GreetingsController < ApplicationController
      def index
        greetings = Greeting.all

        render json: GreetingSerializer.new(greetings).serialized_json
      end

      def show
        greeting = Greeting.find(params[:id])

        render json: GreetingSerializer.new(greeting).serialized_json
      end
    end
  end
end
