import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import ConditionalComponent from "./components/ConditionalComponent";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Form1 from "./components/Form1";
import Todo from "./components/todoapp/Todo";
import "./App.css";
import Header from "./components/todoapp/Header";
import Search from "./components/Recipe/Search";
import { createContext, useState } from "react";
import FoodList from "./components/Recipe/FoodList";

import Container from "./components/Recipe/Container";
import InnerContainer from "./components/Recipe/InnerContainer";
import FoodDetails from "./components/Recipe/FoodDetails";
import Counter2 from "./components/Counter2";
import Bank from "./components/Bank";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Dashboard from "./Pages/Dashboard";
import PageNotFound from "./Pages/PageNotFound";
import Nav from "./components/Nav";
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings";
import Products from "./Pages/Products";
import Elu from "./components/Elu";
import { UserProvider } from "./Context/UserContext";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Message1 from "./components/Message1";

function App() {
  // const seatNumbers = [1, 4, 7];
  // const person = {
  //   name: "Raja",
  //   emoji: "😎",
  //   luckyNo: [0, 9],
  // };

  // const [foodData, setFoodData] = useState([]);
  // const [foodID, setFoodID] = useState("658615");

  return (
    <div className="App">
      {/* <Hello
        name="prop bolte"
        msg="kyu bolte"
        emoji="😂"
        sno={seatNumbers}
        person={person}
      /> */}
      {/* <Fruits /> */}
      {/* <ConditionalComponent /> */}
      {/* <Fruits /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <Form /> */}
      {/* <Form1 /> */}
      {/* <Header></Header>
      <Todo /> */}
      {/* <Inlinecss /> */}
      {/* <Nav />
      <Search setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodID={setFoodID} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodID={foodID} />
        </InnerContainer>
      </Container> */}
      {/* <Counter2 /> */}
      {/* <Bank /> */}
      {/* <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Products/:id" element={<Products />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter> */}

      {/* <Elu /> */}
      {/* <input type="text" onChange={(e) => setUser(e.target.value)} /> */}

      {/* <UserProvider>
        <Login />
        <Checkout />
        <Logout />
      </UserProvider> */}

      <Message1 porp="kuch bhi" />
    </div>
  );
}

export default App;
