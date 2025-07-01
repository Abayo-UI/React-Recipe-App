const NotFound = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center notfound-container" style={{minHeight: '60vh'}}>
      <div style={{textAlign: 'center', padding: '2rem', border: '1px solid #eee', borderRadius: '16px', background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.07)'}}>
        <img src="/favicon.ico" alt="Recipe App Icon" style={{width: 48, height: 48, marginBottom: 16}} />
        <h1 style={{fontSize: '4rem', color: '#ffa500', margin: 0}}>404</h1>
        <p style={{fontWeight: 'bold', fontSize: '1.3rem'}}>Page Not Found</p>
        <p style={{color: '#555'}}>Sorry, the page you are looking for does not exist or has been moved.</p>
        <p style={{color: '#888'}}>Try searching for a recipe or return to the <a href="/" style={{color: '#ffa500', textDecoration: 'underline'}}>Home page</a>.</p>
      </div>
    </div>
  )
}

export default NotFound