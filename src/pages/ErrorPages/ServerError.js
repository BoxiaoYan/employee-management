import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={
        <Link to="/login">
          <Button type="primary" size="large">
            Refresh
          </Button>
        </Link>
      }
    />
  );
}