import React from 'react';
import { Button, ButtonType, ButtonSize } from "./components/button/Button";
import { Alert, AlertType } from "./components/alert/Alert";
import "./App.scss"

const App: React.FC = () => {
  return (
    <div className="App">
      <section>
        <h3>Button组件四种类型:</h3>
        <Button btnType={ButtonType.Primary}>Primary Button</Button>
        <Button>Default Button</Button>
        <Button btnType={ButtonType.Danger}>Danger Button</Button>
        <Button btnType={ButtonType.Link} href={"https://www.baidu.com"}>Link Button</Button>
        <h3>Button组件三个大小：</h3>
        <Button size={ButtonSize.Large}>Large</Button>
        <Button>Normal</Button>
        <Button size={ButtonSize.Small}>Small</Button>
        <h3>两种disabled：</h3>
        <div>
          <Button disabled>disabled</Button>
          <Button disabled btnType={ButtonType.Link} href={"https://www.baidu.com"}>Link Button</Button>
        </div>
      </section>
      <section className="alert-component">
        <h3>Alert组件四种类型:</h3>
        <Alert
          message="success text"
          type={AlertType.Success}
          description="there is success text description,thanks using it"
        ></Alert>
        <Alert message="info text" type={AlertType.Info}></Alert>
        <Alert message="warning text" type={AlertType.Warning}></Alert>
        <Alert message="error text" type={AlertType.Error}></Alert>
      </section>
    </div>
  );
}

export default App;
