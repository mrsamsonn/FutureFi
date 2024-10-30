// src/pages/index.tsx
import React from 'react';
import HelloWorld from './components/HelloWorld'
import Greeting from './components/Greeting';

const Home: React.FC = () => {
    return (
        <div>
            <HelloWorld />
            <Greeting name="Next.js Developer" />
        </div>
    );
};

export default Home;
