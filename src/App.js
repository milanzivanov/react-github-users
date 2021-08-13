import './App.css';
import Form from "./components/Form";
import { useState } from 'react';

function App() {

  const [cards, setCards] = useState([]);

  const addNewCard = (card) => {
    setCards([...cards, card]);
  }

  return (
    <div>
      <h1 className="pt-10 text-center mt-6 text-3xl leading-9 font-extrabold text-gray-900">
        Search a GitHub User
      </h1>

      <Form onSubmit={addNewCard}></Form>
    </div>
  );
}

export default App;
