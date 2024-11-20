# Client Side

This is where the frontend code exists

```bash
npm install # if you havent already
npm run dev
```


#### Dev Stack
- Vite
- Vanilla JS
- SCSS


We are using JSON_PLACEHOLDER as our test backend till we make our own.
Once we make our backend, change the variable `VITE_SERVER_URL` in `client/.env`

We want to send a request to our server using `fetch`

How to use `fetch`

Say we have a button on the page
```html
<button id="get-todos-button">Get Todos</button>
```
We want to get todos from the server when the button is clicked
```js
// get the button from the dom
const button = document.getElementById('get-todos-button')

// add an event listener to the button
button.addEventListener('click', () => {
    
    // use fetch to send a request to some server
    fetch("whatever url you want", {options}).then((response)=>{
        // do something with the response
        return await response.json()
    }).then((data)=>{
        // do something with the data
        console.log(data)
    })
})

```

- JsonPlaceholder URL: https://jsonplaceholder.typicode.com/todos
- SCSS: https://sass-lang.com