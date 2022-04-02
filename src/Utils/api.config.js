import axios from "axios";

class roomsApi{
  constructor(){
    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_API}`
    });
  }
}

export default new roomsApi()