import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import React, { Component } from "react";
import axios from "axios";

type Props = {
  saveUser: (task: User | any) => void;
};

interface User {
  id: number;
  name: string;
  email: string;
}

interface State {
  data: User | null;
}

class ResultPage2 extends Component<{}, State> {
  state: State = {
    data: null,
  };

  async componentDidMount() {
    // Make the API call using Axios
    const response = await axios.get<User>(
      `https://jsonplaceholder.typicode.com/users/1`
    );
    console.log(response);
    saveUser(response.data);
  }

  render() {
    return (
      <div>
        <h1>Result is here!</h1>
        <ul>
          <li>Additional Data:</li>
          <li>ID: {data.id}</li>
          <li>Title: {data.name}</li>
          <li>HLA: {data.email}</li>
        </ul>
        <Button>Download</Button>
      </div>
    );
  }
}

export default ResultPage2;
