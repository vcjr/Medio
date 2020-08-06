json.user do
  json.partial! "api/users/user", user: @user
end

json.stories do
  @user.stories.each do |story|
    json.set! story.id do
      json.partial! "api/stories/story", story: story
    end
  end
end