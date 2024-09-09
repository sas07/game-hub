import axios, {CanceledError} from "axios";

export {CanceledError};
export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "10a11f309f524186aa1f209c9dae267a",
    },
})