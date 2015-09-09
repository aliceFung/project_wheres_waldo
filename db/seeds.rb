# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



Character.destroy_all


Character.create(real_x: 1299, real_y: 1264, name: "Table")


Character.create(name: 'Waldo', real_x: 1554, real_y: 580)
Character.create(name: 'Wenda', real_x: 1046, real_y: 536)
Character.create(name: 'Odlaw', real_x: 1299, real_y: 1264) #find
Character.create(name: 'Wilma', real_x: 1299, real_y: 1264) #find
Character.create(name: 'Wizard Whitebeard', real_x: 2341, real_y: 1468)
Character.create(name: 'Woof', real_x: 1299, real_y: 1264) #find
Character.create(name: 'Waldo-Watcher', real_x: 1299, real_y: 1264) #find

