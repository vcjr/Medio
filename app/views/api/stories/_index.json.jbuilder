stories.each do |story|
  json.set! story.id do
    json.extract! story, :id, :author_id, :title, :subtitle, :body, :published, :published_date, :updated_at
  end
end