class ChangeBodyColumn < ActiveRecord::Migration[5.2]
  def change
    change_column_null(:stories, :body, true)
  end
end
