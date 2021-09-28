import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PropertyContent from './PropertyContent';
import TenantManager from './TenantManager';
import property from '../../asserts/img/property.png'



const useStyles = makeStyles((theme) => ({
  contain:{
    display: 'flex',
    justifyContent:' space-between',
    marginTop : '90px',
    marginLeft: '20px',
    marginRight : '120px',
    marginBottom : '200px',
    "@media (max-width: 1074px)":{
       marginLeft : '20px' ,
       flexDirection : 'column',
     
},
    "@media (max-width: 870px)":{
             display : 'none',
             flexDirection : 'column',
             marginLeft : '20px'
            
    },
    "@media (max-width: 767px)":{
        display : 'none',
      flexDirection : 'column',
      marginLeft : '20px'
     
},
  },
 
  root: {
    maxWidth: 545,
    marginLeft : '100px',
    "@media (max-width: 1074px)":{
      marginTop : '30px',
     
},
"@media (max-width: 767px)":{
    flexDirection : 'column',
  marginTop : '30px',
 
},
  },
  media: {     
    backgroundSize: 'cover',
    objectFit: 'cover',
  },
 
}));


 function Property() {
  const classes = useStyles();

  return (
    <div className = {classes.contain}>
    <Card className={classes.root}>
      <CardHeader
       
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="PROPERTIES"
        
      />
      <CardMedia
        className={classes.media}
        alt="Business"
        component="img"
        image= {property}
        
        height="350"
        object-fit = "cover"
      />
       <CardContent>
            <PropertyContent/>
       </CardContent>
    </Card>
    
    
    <Card className={classes.root}>
      <CardHeader
       
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="TENANT MANAGERS"
        
      />
      <CardMedia
        className={classes.media}
        alt="Business"
        component="img"
        image= {property}
        
        height="350"
        object-fit = "cover"
        />
        <CardContent>
            <TenantManager/>
        </CardContent>
      
    </Card>
    
    
    </div>
  );
}
export default Property


