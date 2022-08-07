import fetch from "node-fetch";
import { HEROKU_APP_ID, a677257e-864a-4ef9-b775-5ee7a4345bbb} from './env.js';

console.log("Restarting dynos")
const response = await fetch(`https://api.heroku.com/apps/${HEROKU_APP_ID}/dynos`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.heroku+json; version=3',
        'Authorization': `Bearer ${HEROKU_API_TOKEN}`
    }
});
console.log(response)
