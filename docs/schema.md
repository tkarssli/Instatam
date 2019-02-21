# Instagram Clone
### By Tamir Karssli

# Database Schema
## `users`

| __column name__ | __data type__ |        __details__        |
|-----------------|:-------------:|:-------------------------:|
| id              |    integer    |   not null, primary key   |
| username        |     string    |     not null, indexed     |
| email           |     string    | not null, indexed, unique |
| password_digest |     string    |          not null         |
| session_token   |     string    | not null, indexed, unique |
| created_at      |    datetime   |          not null         |
| updated_at      |    datetime   |          not null         |

* index on `username, unique: true`
* index on `session_token, unique: true`

## `images`
| __column name__ | __data type__ |           __details__          |
|-----------------|:-------------:|:------------------------------:|
| id              |    integer    |      not null, primary key     |
| description     |     string    |                                |
| user_id         |    integer    | not null, indexed, foreign key |
| created_at      |    datetime   |            not null            |
| updated_at      |    datetime   |            not null            |

* `user_id` references `users` `id`

## `likes`
| __column name__ | __data type__ |           __details__          |
|-----------------|:-------------:|:------------------------------:|
| id              |    integer    |      not null, primary key     |
| user_id         |    integer    | not null, indexed, foreign key |
| image_id        |    integer    | not null, indexed, foreign key |
| created_at      |    datetime   |            not null            |
| updated_at      |    datetime   |            not null            |

* `user_id` references `users` `id`
* `image_id` references `images` `id`
* index on `[chirp_id, user_id], unique: true`
* index on `chirp_id, unique: true`

## `comments`
| __column name__ | __data type__ |           __details__          |
|-----------------|:-------------:|:------------------------------:|
| id              |    integer    |      not null, primary key     |
| body            |     string    |            not null            |
| user_id         |    integer    | not null, indexed, foreign key |
| image_id        |    integer    | not null, indexed, foreign key |
| created_at      |    datetime   |            not null            |
| updated_at      |    datetime   |            not null            |

* `user_id` references `users` `id`
* `image_id` references `images` `id`

## `Follows`
| __column name__ | __data type__ |           __details__          |
|-----------------|:-------------:|:------------------------------:|
| id              |    integer    |      not null, primary key     |
| user_id         |    integer    | not null, indexed, foreign key |
| follower_id     |    integer    | not null, indexed, foreign key |
| created_at      |    datetime   |            not null            |
| updated_at      |    datetime   |            not null            |

* `user_id` references `users` `id`
* `follower_id` references `users` `id`