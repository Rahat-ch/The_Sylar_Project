import React from 'react';
import Header from '../components/Header';
import ResourceList from '../components/ResourceList';
import Head from '../components/head';
import { ApiProvider } from '../contexts/ApiContext';
import { DropdownProvider } from '../contexts/DropdownContext';

const Home = () => (
    <ApiProvider>
        <Head />
        <Header />
        <DropdownProvider>
            <ResourceList />
        </DropdownProvider>
    </ApiProvider>
);

export default Home;
