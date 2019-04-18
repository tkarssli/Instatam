export const fetchPosts = () => (
    $.ajax({
        method: "GET",
        url: "api/posts",
    })
)

export const fetchUserPosts = (id) => (
    $.ajax({
        method: "GET",
        url: `api/users/${id}/posts`,
    })
)

export const fetchExplore = () => (
    $.ajax({
        method: "GET",
        url: `api/posts/explore`,
    })
)


export const fetchPost = id => (
    $.ajax({
        method: "GET",
        url: `/api/posts/${id}`,
    })
)

export const createPost = post => {
    const formData = new FormData();
    formData.append('post[caption]', post.caption);
    formData.append('post[photo]', post.imageFile);

    return $.ajax({
        method: "POST",
        type: "POST",
        url: `/api/posts`,
        data: formData,
        contentType: false,
        processData: false
    })
}
export const updatePost = ( form ) => {
    const formData = new FormData();
    if(form.caption){
        formData.append('post[caption]', form.caption);
    } 
    if (form.imageFile) {
        formData.append('post[photo]', form.imageFile);
    }

    return $.ajax({
        method: "PATCH",
        type: "PATCH",
        url: `/api/posts/${form.post.id}`,
        data: formData,
        contentType: false,
        processData: false
    })
}

export const deletePost = id => (
    $.ajax({
        method: "DELETE",
        url: `/api/posts/${id}`,
    })
)