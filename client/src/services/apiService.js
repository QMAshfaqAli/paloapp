import axios from 'axios';

export default {
    getStories: async (offset='', limit='', fields='') => {
        let res = await axios.get(`/api/stories?offset=${offset}&limit=${limit}&fields=${fields}`);
        return res.data || [];
    },

    getMenus: async () => {
        let res = await axios.get(`/api/menu-group`);
        return res.data || [];
    }
}