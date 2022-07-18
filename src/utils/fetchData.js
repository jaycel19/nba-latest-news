import axios from "axios";

export const fetchData = async (url) => {
    const res = await axios.get(url);
    const data = res.data;
    return data;
}