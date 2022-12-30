import Button from 'react-bootstrap/Button';
// export function User(prop) {
//   return (
//     <div className="App">
//       <h1>Me {prop.data} hu</h1>
//       <h3> {prop.count}</h3>
//     </div>
//   )
// }

function Member(prop) {
  return (
    <div className="App">
      <h1>Hello Member</h1>
      <Button variant="dark" onClick={prop.data}>Call Data</Button>
    </div>
  )
}

export default Member

