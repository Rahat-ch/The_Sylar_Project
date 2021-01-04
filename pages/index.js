import React from 'react'
import Header from '../components/Header'
import ResourceList from '../components/ResourceList'
import Head from '../components/head'
import { ApiProvider } from '../contexts/ApiContext'
import { DropdownProvider } from '../contexts/DropdownContext'
import Layout from '../components/Layout'

const Home = () => (
    <Layout>
        <ApiProvider>
            <Head />
            <DropdownProvider>
                <Header />
                <ResourceList />
            </DropdownProvider>
        </ApiProvider>
    </Layout>
)

export default Home
