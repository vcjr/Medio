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
require 'test_helper'

class StoryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
