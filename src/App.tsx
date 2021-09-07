import { useState } from "react";
import './App.css';
import Form from './components/Form';
import CardList from './components/CardList';

export type GitHubCard = {
  avatar_url: string
  name: string
  login: string
  public_repos: string
  created_at: string
  location: string
  bio: string
  html_url: string
  blog: string
};

function App() {
  const [cards, setCards] = useState<GitHubCard[]>([]);

  const addNewCard = (card: GitHubCard) => {
    setCards([...cards, card]);
  }

  return (
    <div>
      <h1 className='pt-10 text-center mt-6 text-3xl leading-9 font-extrabold text-gray-900'>
        Search a GitHub User
      </h1>
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} />
    </div>
  )
}

export default App;