import requests from "./request";

export const reqEmbarrassing = () => {
    return requests({
        url: 'https://api.apiopen.top/api/sentences', // 更稳定的备用API
        method: 'get',
        params: {  // 添加参数配置
            page: 1,
            count: 10
        }
    }).catch(error => {  // 添加错误处理
        console.error('API请求失败:', error);
        return Promise.reject(error);
    });
};