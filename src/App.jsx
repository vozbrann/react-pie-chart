import React, {useState} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ChartPage from './components/pages/ChartPage';
import FormPage from './components/pages/FormPage';
import SideMenu from './components/SideMenu';
import getRandomColor from './utils/getRandomColor';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
  }
`;

const Layout = styled.div`
  display: flex;
`;
const Content = styled.div`
  width: 100%;
  padding: 20px 20px;
`;

// sample data
let cItems = [];
for (let i = 0; i < 3; i++) {
  cItems.push({id: i, qt: (Math.random()*5).toFixed(2), title: i+1+" Item", color: getRandomColor()})
}

function App() {
  const [items, setItems] = useState(cItems);

  return (
    <Router basename='/'>
      <GlobalStyle/>
      <Layout>
        <SideMenu/>
        <Content>
          <Switch>
            <Route exact path="/chart">
              <ChartPage items={items} />
            </Route>
            <Route exact path="/">
              <FormPage items={items} setItems={setItems} />
            </Route>
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
