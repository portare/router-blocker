import { Link, useBlocker } from 'react-router-dom';
import { useState } from 'react';
import { Form, Input, Tag } from 'antd';

const somePromise = () => new Promise((res) => {
  setTimeout(() => {
    res(1);
  }, 1000);
});

export const BlockerComponent = () => {
  const [form] = Form.useForm();
  const [isBlocked, setIsBlocked] = useState(false);

  const blocker = useBlocker(isBlocked);

  const onFinish = async () => {
    const isTouched = form.isFieldsTouched()

    if(!isTouched){
      return;
    }
    setIsBlocked(true);
    return await somePromise().finally(() => {
      form.resetFields();
    });
  };

  const onBlur = async () => {
    form.submit();
  };

  return (
    <div className="App">
      <div className="menu">
        <Link to="1">Link1</Link>
        <Link to="2">Link2</Link>
        <Link to="3">Link3</Link>
      </div>

      <Form form={form} onFinish={onFinish}>
        <Form.Item name="name" label="Label">
          <Input onBlur={onBlur} />
        </Form.Item>
      </Form>

      {blocker.state === 'blocked' && <div>

        <Tag color="error">Blocked</Tag>
      </div>}


    </div>
  );
};