import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';

export default function Title(props: any) {
    return (
        <React.Fragment>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                {props.children}
            </Typography>
        </React.Fragment>
    );
}

Title.propTypes = {
    children: PropTypes.node,
};
