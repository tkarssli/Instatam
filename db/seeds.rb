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
    demo = User.create(username: "demo_user", full_name:"Demo User", email: "Demo@User.com", password: "password")
    ######################################################################################

    u1 = User.create(username: "tkarssli", full_name: "Tamir Karssli", email: "Tamir@Karssli.com", password: "password")
    u2 = User.create(username: "doro", full_name: "Dorotea Ciani", email: "Dorotea@Italy.com", password: "password")
    u3 = User.create(username: "zkarssli", full_name: "Zane Karssli", email: "Zane@Music.com", password: "password")
    u4 = User.create(username: "ari_design_master", full_name: "Ari Gachalapoilichaloop", email: "Ari@Gallapagos.com", password: "password", avatar: Faker::Avatar.unique.image)

    users = []
    (0..20).each do 
        users.push(User.create(username: Faker::Internet.unique.username, full_name: Faker::Name.unique.name, avatar: Faker::Avatar.image, email: Faker::Internet.unique.email, password: "password"))
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