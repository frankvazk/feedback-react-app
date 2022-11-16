import React from "react";
import { useParams } from "react-router-dom";
import Card from "../components/shared/Card";

const PostPage = () => {
  /**
   * We can get URL Params
   * by the use of useParams
   * which is part of react-router-dom
   * package
   */
  const { id, name } = useParams();
  return (
    <Card>
      <h1>Id: {id}</h1>
      <h1>Name: {name}</h1>
    </Card>
  );
};

export default PostPage;
