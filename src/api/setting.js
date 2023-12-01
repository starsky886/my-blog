import request from './index'


export async function getSetting() {
    return await request.get("/api/setting");
}