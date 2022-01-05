
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import Cart from './Cart';

const ButtonAppBar = () => {
    return (

        <AppBar position="absolute" style={{backgroundColor: 'green'}}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    FUTEBOL MANIA
                </Typography>
                <Link  to="/" style={{ textDecoration: 'none' }}>
                    <Button   sx={{
                            width: 110,
                            color: 'white',
                            
                        }}
                    >Home</Button>
                </Link>
                <Link to="/contato" style={{ textDecoration: 'none' }}>
                    <Button sx={{
                            width: 110,
                            color: 'white',
                        }}
                        >Contato</Button>
                </Link>
                <Cart />
            </Toolbar>
        </AppBar>

    );
}
export default ButtonAppBar;