import React from 'react';
import './style.css';
import NotesList from './components/NotesList';
import { nanoid } from 'nanoid';
import Search from './Components/Search';
import Header from './Components/Header';
export default function App() {
  return (
    <div>
      <Header />
      <Search />
    </div>
  );
}
