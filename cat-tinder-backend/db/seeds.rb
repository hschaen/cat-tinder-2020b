# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# cat seed data

cats = [{
  name: "Moe",
  age: 11,
  enjoys: "catnip"
},
{
  name: "Curly",
  age: 4,
  enjoys: "sleeping"
}]

# loop through the array and create each cat attribute
cats.each do |attributes|
  Cat.create attributes
  puts "creating cat #{attributes}"
end
