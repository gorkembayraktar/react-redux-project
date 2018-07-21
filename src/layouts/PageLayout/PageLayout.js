import React from 'react'

import './PageLayout.sass'


import Header from '../../components/Header';
import Footer from "../../components/Footer";

export const PageLayout = ({ children }) => (
     <div>
        <Header/>
         {children}

       <Footer/>
     </div>
)

export default PageLayout
