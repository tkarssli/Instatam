export const createLike = postId => (
    $.ajax({
      method: "POST",
      url: `/api/posts/${postId}/likes`
    })
  )
  
  export const deleteLike = likeId => (
    $.ajax({
      method: "DELETE",
      url: `/api/likes/${likeId}`
    })
  )