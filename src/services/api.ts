import axios from "axios";

async function getTodos() {
    const res = await axios("https://jsonplaceholder.typicode.com/todos/");
    return res.data;
}

export default getTodos;