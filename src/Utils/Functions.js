import axios from 'axios'

export const addflight = (newflight) => {
    console.log(newflight)

axios
  .post('http://127.0.0.1:8000/api/flight/', newflight , 
   {
    headers: {
      Authorization: 'Token 0baf4d3a05de69e8313862c97d79b1d1be41bfba'
    }
  });

    // axios
    //   .post("http://127.0.0.1:8000/api/flight/", {
    //        headers: {
    //       'Authorization': 'Token 0baf4d3a05de69e8313862c97d79b1d1be41bfba',
    //       'Content-Type': 'application/json'
    //     },
    //     body : newflight
    //   })
    //   .then((res) => console.log(res.data))
}

export const LoginUser = (body)=> {
    return fetch('http://127.0.0.1:8000/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',        
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());
  }