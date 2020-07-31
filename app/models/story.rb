# == Schema Information
#
# Table name: stories
#
#  id             :bigint           not null, primary key
#  author_id      :integer          not null
#  title          :text             not null
#  body           :text             not null
#  title_draft    :text
#  body_draft     :text
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  published_date :date
#  subtitle       :text
#  published      :boolean
#

# To be able to create many posts we want to have a draft state for them. we can do a published date
# also draft
class Story < ApplicationRecord
  validates :author_id, :title, :body, presence: true

  #NOTE: Add associations for this and the user 
  belongs_to :user,
  foreign_key: :author_id,
  class: :User
end
