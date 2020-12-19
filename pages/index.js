import React from 'react'
import Header from '../components/Header'
import ResourceList from '../components/ResourceList'
import { ApiProvider } from '../contexts/ApiContext'
import { DropdownProvider } from '../contexts/DropdownContext';

const Home = () => {
  return (
    <ApiProvider>
      <Header />
      <DropdownProvider>
        <ResourceList />
      </DropdownProvider>
    </ApiProvider>
  )
}

export default Home
