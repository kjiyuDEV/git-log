// axios를 이용한 API 호출 함수
import axios from 'axios';

export const registerUserAPI = async (userData) => {
    try {
        const response = await axios.post('http://example.com/api/register', userData);
        return response.data; // 서버로부터 받은 데이터를 반환
    } catch (error) {
        throw error; // 오류가 발생하면 오류를 던짐
    }
};
