json.extract! user, :id, :name, :email
json.photoUrl url_for(user.profile_picture)
json.authoredStoryId user.story_ids