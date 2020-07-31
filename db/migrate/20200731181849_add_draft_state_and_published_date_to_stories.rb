class AddDraftStateAndPublishedDateToStories < ActiveRecord::Migration[5.2]
  def change
    add_column :stories, :published_date, :date
    add_column :stories, :subtitle, :text
    add_column :stories, :published, :boolean
  end
end
