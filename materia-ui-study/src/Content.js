import React from 'react'
import {Grid} from '@material-ui/core';
import LeftBox from './LeftBox';
import RightBox from './RightBox';

const styles = {
    Paper: { padding: 20, marginTop: 10, marginBottom: 10}
}

export default props => 
    <Grid container>
        <grid item xs={6}>
            <LeftBox styles={styles} /> 
        </grid>
        <grid item xs={6}>
            <RightBox styles={styles} />
        </grid>
    </Grid>
