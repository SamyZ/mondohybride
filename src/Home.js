import React from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Definition from './cards/Definition';
import DefinitionUpdate from './cards/DefinitionUpdate';
import BioChemie from './cards/BioChemie';
import Mythology from './cards/Mythology';
import PopCulture from './cards/PopCulture';

const styles = theme => ({
  main: {
    padding: 20,
  },
  grid: {
    flexGrow: 1,
  },
  paragraph: {
    paddingTop: 10,
  },
  headline: {
    paddingTop: 20,
    fontSize: '20px',
  },
});

const Home = ({ classes }) => (
  <div className={classes.main}>
    <Grid container className={classes.grid} spacing={40} justify="center">
      <Grid item xs={12} sm={12} md={6}>
        <Definition />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Mythology />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <BioEngineering />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <BioChemie />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <PopCulture />
      </Grid>
    </Grid>
  </div>
);

export default withStyles(styles)(Home);
