import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  // Define the number of iterations for the test
  vus: 10,
  duration: '30s',
  thresholds: {
    http_req_duration: ['p(90)<3000', 'max<50000'],
    http_req_failed: ['rate<0.01']
  }
};

    export default function () {
    const url = 'http://localhost:3000/login';
    const payload = JSON.stringify({
        username: 'julio.lima',
        senha: '123456',
    });

    const params = {
        headers: {
        'Content-Type': 'application/json',
        },
    };

    const res = http.post(url, payload, params);

    check(res, {
        'Validas que o arquivo status é 200': (r) => r.status == 200,
        //valida que o token que está no json (consultamos en Swagger) é string 
        'Validar que o token é string': (r) => typeof(r.json().token) == 'string'
    })

    sleep(1);

    }
