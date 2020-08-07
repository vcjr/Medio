# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.delete_all
Story.delete_all

demoUser = User.create!(
  email: 'demouser@email.com',
  password: "hunter1234",
  name: 'demouser'
)

profile_image = open('https://medio-app-seed.s3.amazonaws.com/3niwMHz8HACEcENzLnva4QtZ.jpg')
demoUser.profile_picture.attach(io: profile_image, filename: "#{demoUser.name}_profile_image.jpg")