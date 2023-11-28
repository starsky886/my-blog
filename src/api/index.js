import axios from 'axios';
import showMessage from '@/utils/showMessage';
const request = axios.create()

request.interceptors.response.use((resp)=>{
   if (resp.data.code !== 0) {
    showMessage({
        content: resp.data.msg,
        type: 'error'
    })
    return null
   } else {
    return resp.data.data
   }
})

export default request