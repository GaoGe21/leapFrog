import React from 'react';
import { Button, ButtonType, ButtonSize } from "./components/button/Button";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">header</header>
      <Button onClick={() => alert("a")}>default</Button>
      <Button btnType={ButtonType.Primary}>Primary</Button>
      <Button btnType={ButtonType.Danger}>Danger</Button>
      <Button size={ButtonSize.Large}>Large</Button>
      <Button disabled>disabled</Button>
      <Button btnType={ButtonType.Link} href={"https://www.baidu.com"}>Link</Button>
    </div>
  );
}

export default App;
