```js
{ 
    entities: {
        users: {
            1: { 
                id: 1,
                username: "Tamir",
                email: "tkarssli@gmail.com",
                followerIds: [2],
                followIds: [],
                imageIds: [1],
                commentIds: []
            },
            2: {
                id: 2,
                username: "Dorotea",
                email: "dorotea@gmail.com",
                followerIds: [],
                followIds: [1],
                imageIds: [],
                commentIds: [1]
            }
        },
        images: {
            1: {
                id: 1,
                description: "A picture of Tamir doing something super fun",
                userId: 1,
                likeIds: [2],
                commentIds: [1]
            }

        },
        likes: {
            1: {
                id: 1,
                userId: 2,
                imageId: 1,
            }

        },
        comments: {
            1: {
                id: 1,
                body: "This picture is so amazing because its a picture of Tamir",
                userId: 2,
                imageId: 1
            }


        },
        follows: {
            1: {
                id: 1,
                userId: 1,
                followerId: 2
            }

        }

    },
    session: {
        { currentUserId: 25 }
    },
    ui: {
        loading: true/false
    },
    errors: {
        login: ["Incorrect username/password combination"],
        chirpForm: ["Chirp body cannot be blank"],  

    }
}

```

// Style shape is flat
// use triple back ticks ```  testtest ```
// nested with id as key
// single source of truth (minimum aount of references)
// join tables get their own slice of state
