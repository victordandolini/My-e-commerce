import React from 'react';
import { useSelector } from 'react-redux';
import { Paper, Grid, Typography, List, makeStyles, Button } from '@material-ui/core/';
import Card from '../components/Card';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: '70px',

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center'
    },

}));

const HomePage = () => {
    const products = useSelector(state => state.products)
    const classes = useStyles();

    const categorys = products.map(
        category => {
            const container = {};
            container['id'] = category.id_categorys;
            container['name'] = category.name_categorys;
            return container;
        }
    )  

    const category = categorys.map(JSON.stringify)
        .filter(function (item, index, arr) {
            return arr.indexOf(item, index + 1) === -1;
        })
        .map(JSON.parse)

    const arrayCategory = categorys.map(category => category.name)
    let count = {};

    for (let i = 0; i < arrayCategory.length; i++) {
        {
            let key = arrayCategory[i];
            count[key] = (count[key] ? count[key] + 1 : 1)
        }
    }

    return (
        <Grid container spacing={3} className={classes.root}  >
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <Typography variant='h5'>
                        Categorias
                    </Typography>
                    <List>
                        {category.map(
                            category => {
                                return (
                                    <>
                                    <Button className={'mx-2'} style={{display:'flex'}} key={category.id}>
                                        {category.name} 
                                    </Button>
                                    <div className={'mx-4'} style={{display:'flex'}}>{count[category.name]}</div>
                                    </>
                                )
                            }
                        )}
                    </List>
                </Paper>
            </Grid>
            <Grid item container xs={9} spacing={1}  >
                {products.map(item => {
                    return (
                        <Card className={classes.font}
                            key={item.id_product}
                            product={item}
                        >
                            {item.name_product}
                        </Card>
                    )
                })}
                
            </Grid>
        </Grid>
    )
}

export default HomePage;
