import React from 'react';

import Button from './components/Button';

const App = () => {
    return(
        <>
            <Button sizeVertical="S" sizeHorizontal="container" colorTheme="default" type="submit">Seguir</Button>

            <Button sizeVertical="S" sizeHorizontal="text" colorTheme="default" type="submit">Seguir</Button>
            <Button sizeVertical="M" sizeHorizontal="text" colorTheme="default" type="submit">Seguir</Button>
            <Button sizeVertical="L" sizeHorizontal="text" colorTheme="default" type="submit">Seguir</Button>


            <Button sizeVertical="S" sizeHorizontal="text" colorTheme="dark" type="submit">Seguir</Button>

            <Button sizeVertical="S" sizeHorizontal="container" colorTheme="dark" type="submit">Seguir</Button>
        </>
    )
};

export default App;
