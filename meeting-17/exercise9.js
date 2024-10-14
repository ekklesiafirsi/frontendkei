//1. Promise 
function helloWorld() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello World!");
        }, 2000);
    });
}

async function messages() {
    const msg = await helloWorld();
    console.log(msg);
}

messages();

//2. Fetch 
function ambilDataUser() {
    fetch("https://reqres.in/api/users")
        .then(response => {
            return response.json();
        })
        .then(data => {
            data.data.forEach(user => {
                console.log(user.email);
            });
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

ambilDataUser();

//3. Async Await 
async function ambilDataUser() {
    try {
        const response = await fetch("https://reqres.in/api/users");
        const data = await response.json();

        data.data.forEach(user => {
            console.log(user.email);
        });
    } catch (error) {
        console.error("Error:", error);
    }
}

ambilDataUser();

//4. Axios
async function ambilDataUser3() {
  try {
    const response = await axios.get("https://reqres.in/api/users");
    response.data.data.forEach((user) => {
        console.log(user.email);
    })
  } catch (error) {
    console.error("Error:", error);
  }
}

ambilDataUser3();