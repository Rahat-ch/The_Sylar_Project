import React from 'react'
import Header from '../components/Header'
import ResourceList from '../components/ResourceList'
import Head from '../components/head'
import { ApiProvider } from '../contexts/ApiContext'
import { DropdownProvider } from '../contexts/DropdownContext'
import { ModalProvider } from '../contexts/ModalContext'
import Layout from '../components/Layout'
import Confirmation from '../components/ConfirmationModal'

const Home = () => (
    <Layout>
        <ApiProvider>
            <Head />
            <DropdownProvider>
                <ModalProvider>
                    <Header />
                    <ResourceList />
                    <Confirmation />
                </ModalProvider>
            </DropdownProvider>
        </ApiProvider>
    </Layout>
)

export default Home
