import '../styles/Button.css'

function Login(){
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return(
      <form style={{width: '20vw'}}>
        <div style={{display: 'flex', flexDirection : 'column', gap: '0.5rem'}}>
        <input style={{padding: '0.5rem 1rem', border:'1px solid white', borderRadius: '4px', background: 'grey', color:'white'}} type="email" placeholder="name@email.com" />
        <input style={{padding: '0.5rem 1rem', border:'1px solid white', borderRadius: '4px', background: 'grey', color:'white'}} type="password" placeholder="Password.."></input>
        </div>
        <button className={"primaryBtn"} type="submit" onClick={handleSubmit}>Submit</button>
      </form>
  )
}

export default Login;