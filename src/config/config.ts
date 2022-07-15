let BASE_URL = "";
const TIME_OUT = 5000;

if (process.env.NODE_ENV === 'development') {
    BASE_URL = "http://localhost:9001/"
} else if (process.env.NODE_ENV === 'production') {

} else {

}

export default BASE_URL;