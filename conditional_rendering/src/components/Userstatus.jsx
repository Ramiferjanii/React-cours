
const Userstatus = (props) => {
  
// eslint-disable-next-line react/prop-types
if (props.loggedIn &&  props.isAdmin ) {
    return <h2> welcom admin </h2>
} else {
    return <h1>welcom user </h1>
}



}

export default Userstatus
