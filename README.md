# Instatam
[![Maintainability](https://api.codeclimate.com/v1/badges/52936977bb866e02e4ca/maintainability)](https://codeclimate.com/github/tkarssli/Instatam/maintainability)

![Instatam Logo](https://res.cloudinary.com/tkarssli/image/upload/v1552073146/instatam.png)



Instatam is a full-stack web application, inspired by Instagram. This site allows users to upload images, like and comment on other users images, and follow other users.


![login](https://res.cloudinary.com/tkarssli/image/upload/v1552069628/screencapture-localhost-3000-2019-03-08-10_24_08.png)

## Technology

This personal project uses Ruby on Rails with a PostgreSQL database on the back end, which provides ease in data fetching and storage with simple RESTful APIs. In conjunction with Rails, Instatam uses React.js with a Redux framework on the front-end for modular front-end data flow. Redux's predictable state and self-encapsulated React components that only change when their own data changes allow for web applications like Instatam to function with speed and scalability.

## Features and Implementation

Instatam's database is comprised of three main entities - users, posts and comments

and two supplemental features - likes and posts

* Secure frontend to backend user authentication using BCrypt.
* Users can create and edit posts by uploading a photo from their device.
* Feed is clean and all posts have comments and likes visible on hover
* Users can Comment on Posts
* Users can Like posts
* Users can follow other Users


![post](https://res.cloudinary.com/tkarssli/image/upload/v1552070993/localhost_3000__2.png)
### Post creation

Posts are stored on the back-end with a `user_id` that is linked to the `current_user` who is logged into the site. Users have a one-to-many relationship with Posts.  Users must create a Post with an image and an optional caption. After creation a Post's image and caption can be changed by the owner.

### Comment creation

Comments are stored on the back-end, and are created by a user on any post, storing a `user_id` and a `post_id`. Users can post as many times as they would like on a post by utilizing a many-to-many relationship between Users and Posts.

### User Follows, Post Likes
A User is able to like/unlike posts, using a many-many relationship through a `likes` table. Like counts are displayed in feeds, on posts, and in User profiles. Similarly, follow allow for a many-many self referencing relationship on users, with follow count displayed on User profiles.

### User Profile
In addition to having an encrypted front-end authentication, users may view their profile which contains an index of all the posts they have made as well as see their total counts for following, followers, and posts. 

![profile](https://res.cloudinary.com/tkarssli/image/upload/v1552072117/localhost_3000__3.png)

## Component Design
### Modals
Several layers of modals are used in order to keep the user experience as seamless as possible. All pages with posts are able to create a post modal, and pages such as the profile page have multiple settings post. One for the post, and one for the Profile. In order to keep the code as DRY as possible components are reused with conditionals to

```jsx
render() { 
        const { posts } = this.props
        return (
            <div className="post-index">
            <LoadingModal />
            <PostModal />
            <SettingsModal />

                {this.formatGrid(Object.values(posts))}
            </div>
            
          );
    }
```


## Technical Info

### Flattened Store
![store](https://res.cloudinary.com/tkarssli/image/upload/v1552075419/state.png)

Store built to be flat to allow for single source of truth across entire app. All objects are kept under keys of their own id. Relations are maintained using arrays of ids in object.

### Image Hosting
  In order to manage the many images that are uploaded to Instatam, Amazon S3 buckets are used to deliver images. All images uploaded by users are resized to a more efficient resolution, that works within the bounds of the UI and will load in an acceptable time.

## Design Documents

* [Database Schema][db_schema]
* [API Endpoints][api_endpoints]
* [React Components][component_hierarchy]
* [Sample State][sample-state]

[db_schema]: https://github.com/tkarssli/Instatam/wiki/database-schema
[api_endpoints]: https://github.com/tkarssli/Instatam/wiki/Backend-Routes
[component_hierarchy]: https://github.com/tkarssli/Instatam/wiki/Frontend-Routes
[sample-state]: https://github.com/tkarssli/Instatam/wiki/Sample-State


## Future Plans

### Infinite Scroll

When the amount of images in the database becomes too large, the Post index will load the dom relatively quickly but the images then take considerably longer. The Post index page would fetch only a certain number of images (~25), then when the user scrolls down past a certain distance in the page, another fetch request would occur and add more images to the page. This implementation would allow for a smoother user experience.

### Explore Page

A user could view a explore page that has a Post index populated with other Users posts. The logic for determining what users post will initially be simple, users that share the most followed users will be prioritized. More intelligent population of the explore page is planned.
