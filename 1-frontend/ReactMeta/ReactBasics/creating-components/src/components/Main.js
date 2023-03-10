function Main(props){
    const myStyles = {
        color: 'blue',
        fontSize: '24px',
        fontWeight: 'bold'
      }
    return <h1 style={myStyles}>{props.greet} from Main</h1>
  }

export default Main