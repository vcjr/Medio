class Api::StoriesController < ApplicationController
    def show
      @story = Story.new(story_params)
    end

    def create
    end

    

    private

    def story_params
      
    end

end
