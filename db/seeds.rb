# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# require 'faker'

10.times do
  Staff.create(
    name: Faker::Name.name,
    age: Faker::Number.between(18, 60),
    joined_on: Faker::Date.between(20.days.ago, Date.today)
  )
end

