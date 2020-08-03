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

    # Set current user verificationas owner to be able to go to the create / update
    def create
      @story = Story.new(story_params)

      if @story.save!
        render "api/stories/show"
      else
        render json: @story, status: 400
      end
    end

    # Set current user verificationas owner to be able to go to the create / update
    def update
      @story = Story.find_by(id: params[:id])

      unless current_user && @story.author_id == current_user.id
        render @story
      else
        render json: @user.errors.full_messages, status: 422
      end
    end

    def destroy
      @story = Story.find(params[:id])
      unless current_user && @story.author_id == current_user.id
        @story.delete
        render json: "Successfully deleted story"
      else
        render json: @user.errors.full_messages, status: 422
      end
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