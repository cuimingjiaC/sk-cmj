import axios from 'axios'

const getHomePageHead = ({url,method='GET',data={},params={}})=>{
    return axios({
        url,
        method,
        data,
        params
    })
}

// export default {
//     getHomePageHead
// }

export {
    getHomePageHead
}