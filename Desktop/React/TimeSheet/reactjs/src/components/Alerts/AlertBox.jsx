import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';
const AlertBox = ({open , duration, title , type}) => {
    return (
        <Snackbar open={open} autoHideDuration={1000}
        anchorOrigin={ { vertical: 'bottom', horizontal : 'right' }}
        >
            <MuiAlert elevation={6} variant="filled" severity={type}>
                {
                    title
                }
            </MuiAlert>
      </Snackbar>
    )
}
export default AlertBox;