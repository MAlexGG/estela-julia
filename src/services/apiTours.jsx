import axios from "axios";

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

export const apiTours = () => {

    const api = import.meta.env.VITE_ADMIN_API;

    const getTours = async () => {
        const res = await axios.get(`${api}/tours`);
        return res;
      };

    const createTours = async (data) => {
        const res = await axios.post(`${api}/tours`, data);
        return res;
      };

    const deleteTours = async (id) => {
        const res = await axios.delete(`${api}/tours/${id}`);
        return res;
    };

    return {
        getTours,
        createTours,
        deleteTours
    }

}