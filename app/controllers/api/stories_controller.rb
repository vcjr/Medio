class Api::StoriesController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :destroy]
    #NOTE: Create index action when you have followers created so we can populate all the stories from those the user follow
    def index
      @stories = Story.all
      render "api/stories/index"
    end

    def show
      @story = Story.find_by(id: params[:id])
    end

    def create
      @story = Story.new(story_params)

      if @story.save!
        render "api/stories/show"
      else
        render json: @story, status: 400
      end
    end

    def update
    end

    def destroy
      Story.find(params[:id])
      render json: "Successfully deleted story"
    end

    private

    def story_params
      params.require(:story).permit(
        :title, 
        :body,
        :author_id,
        :subtitle, 
        :title_draft, 
        :body_draft,
        :published_date,
        :published
      )
    end

end

# t.integer "author_id", null: false
#     t.text "title", null: false
#     t.text "body", null: false
#     t.text "title_draft"
#     t.text "body_draft"
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false
#     t.date "published_date"
#     t.text "subtitle"
#     t.boolean "published"