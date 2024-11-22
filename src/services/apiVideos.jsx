import axios from "axios";

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

export const apiVideos = () => {

    const api = import.meta.env.VITE_ADMIN_API;

    const getVideos = async () => {
        const res = await axios.get(`${api}/videos`);
        return res;
      };

    const createVideos = async (data) => {
        const res = await axios.post(`${api}/videos`, data);
        return res;
      };

    const deleteVideos = async (id) => {
        const res = await axios.delete(`${api}/videos/${id}`);
        return res;
    };

    return {
        getVideos,
        createVideos,
        deleteVideos
    }

}