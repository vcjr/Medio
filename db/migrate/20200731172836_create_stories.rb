class CreateStories < ActiveRecord::Migration[5.2]
  def change
    create_table :stories do |t|
      t.integer :author_id, null: false
      t.text :title, null: false
      t.text :body, null: false
      
      t.text :title_draft 
      t.text :body_draft


      t.timestamps
    end
    add_index :stories, :author_id
  end
end
