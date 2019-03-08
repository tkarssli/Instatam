export const createLike = postId => (
    $.ajax({
      method: "POST",
      url: `/api/posts/${postId}/likes`
    })
  )
  
  export const deleteLike = postId => (
    $.ajax({
      method: "DELETE",
      url: `/api/posts/${postId}/likes`
    })
  )