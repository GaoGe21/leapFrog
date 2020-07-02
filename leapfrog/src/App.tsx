import React from 'react';
import { Button, ButtonType, ButtonSize } from "./components/button/Button";
import { Alert, AlertType } from "./components/alert/Alert";
import "./index.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <section>
        <h3>Button组件四种类型:</h3>
        <Button btnType={ButtonType.Primary}>Primary Button</Button>
        <Button>Default Button</Button>
        <Button btnType={ButtonType.Danger}>Danger Button</Button>
        <Button btnType={ButtonType.Link} href={"https://www.baidu.com"}>LinkButton</Button>
        <h3>Button组件三个大小：</h3>
        <Button size={ButtonSize.Large}>Large</Button>
        <Button>Normal</Button>
        <Button size={ButtonSize.Small}>Small</Button>
        <h3>两种disabled：</h3>
        <div>
          <Button disabled>disabled</Button>
          <Button disabled btnType={ButtonType.Link} href={"https://www.baidu.com"}>LinkButton</Button>
        </div>
      </section>
      <section className="alert-component">
        <h3>Alert组件四种类型:</h3>
        <Alert
          closable
          message="success text"
          type={AlertType.Success}
          description="there is success text description,thanks using it, there is success text description,thanks using it"
        />
        <Alert
          closable
          message="info text"
          type={AlertType.Info}
          description="there is success text description,thanks using it, there is success text description,thanks using it"
        />
        <Alert message="warning text" type={AlertType.Warning} />
        <Alert message="error text" type={AlertType.Error} />
      </section>
    </div>
  );
}

export default App;
