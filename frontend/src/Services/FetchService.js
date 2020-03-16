import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001"

export { listQuotes };

function listQuotes(){
	return axios.get('/quotes')
	.then(res => res.data)
	.catch(e => console.log(e))
}