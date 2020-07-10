import { makeStyles } from '@material-ui/styles';


export const useStyles = makeStyles({
    notFoundContent: {
        marginTop:100,
        boxShadow:'1px 0px 6px grba(0,0,0,.2)',
        display:'flex',
        alignItems:'center',
        flexWrap:'wrap',
        justifyContent:'center',
        border:'2px solid #eee',
        borderRadius:6,
        padding:12
    },
    notFoundIcon: {
        fontSize:80,
        color:'#e67e22',
        marginRight:12,
    },
    linkToHome:{
        
    },
    homeIcon:{
        color:'#2980b9',
        fontSize:200,
        cursor:'poiter'
    }
    
})