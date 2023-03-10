function Sidebar(props){
    const myStyles = {
        color: 'red',
        fontSize: '24px',
        fontWeight: 'bold'
      }
    return <h1 style={myStyles}>{props.greet} from Side</h1>
  }

export default Sidebar