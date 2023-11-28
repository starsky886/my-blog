import request from ".";

export async function getBanner() {
    return await request.get('/api/banner')
}
