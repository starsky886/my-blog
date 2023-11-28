import request from './index'

export async function getBlogInfo(limit = 10, page = 1, categoryid = -1) {
    return await request.get('/api/blog', {
        params: {
            limit,
            page,
            categoryid,
        }
    })
}

export async function getBlogsType() {
    return await request.get('/api/blogtype')
}
export async function getBlog(id) {
    return await request.get(`/api/blog/${id}`);
  }
  
  /**
   * 提交评论
   */
  export async function postComment(commentInfo) {
    return await request.post(`/api/comment`, commentInfo);
  }
  
  export async function getComments(blogid, page = 1, limit = 10) {
    return await request.get("/api/comment", {
      params: {
        blogid,
        page,
        limit,
      },
    });
  }
  