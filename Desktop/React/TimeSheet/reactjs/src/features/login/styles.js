import { makeStyles } from '@material-ui/styles';

const styles = makeStyles({
    loginBox: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent:'center',
    },
    loginWrapper: {
        background: 'rgba(44, 62, 80,1.0)',
    },
    loginContainer: {
        height: '100vh',
        padding:12,
        width: '100%'
    },
    loginInput: {
        width: '100%',
        margin:'12px 0'
    },
    loginIcon: {
        fontSize: 66,
        color: '#27ae60'
    },
    loginTitle: {
        fontSize: 23,
        textTransform: 'uppercase',
        textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
        fontWeight: 'both',
        color: 'rgba(44, 62, 80,1.0)'
    },
    titleBox: {
        textAlign: 'center'
    },
    loginButton: {
        marginTop:14,
        height:50,
        width:160
    },
    inputBox: {
        width:'100%',
    }
});

export default styles;