# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

ActiveRecord::Base.transaction do

    User.destroy_all

    # DON'T DELETE #######################################################################
    demo = User.create(username: "Demo User", email: "Demo@User.com", password: "password")
    ######################################################################################

    u1 = User.create(username: "Tamir", email: "Tamir@Karssli.com", password: "password")
    u2 = User.create(username: "Dorotea", email: "Dorotea@Italy.com", password: "password")
    u3 = User.create(username: "Zane", email: "Zane@Music.com", password: "password")

    users = []
    (0..20).each do 
        users.push(User.create(username: Faker::Name.unique.name, email: Faker::Internet.unique.email, password: "password"))
    end

    Post.destroy_all

    (0...23).each do |n|
        filename = "seed#{n}"
        file = File.open("seed/#{filename}.jpg")
        user = users.sample
        post = Post.create(caption: Faker::Hipster.unique.sentence, user_id: user.id)
        post.photo.attach(io: file, filename: filename)
    end
end