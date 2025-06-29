import React, { useContext, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context';

const Navbar = () => {


    const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext);
    const navigate = useNavigate();

    const onSearch = (e) => {
      e.preventDefault();
      handleSubmit();
      navigate('/');
    };

    useEffect(()=> {
        setSearchParam("chicken")
        handleSubmit()
      }, [])
  return (
    <div className="navbar-container">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid" style={{backgroundColor:"orange", marginTop:"-10px", paddingBottom:"15px", paddingTop:"10px", marginBottom:"-20px"}}>
          <NavLink to="/" className="text-decoration-none text-dark"><a class="navbar-brand">Recipe App</a></NavLink>
          <button class="navbar-toggler bg-success " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse show" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink to="/" className="text-decoration-none text-dark"><a class="nav-link active" aria-current="page">Home</a></NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/favorites" className="text-decoration-none text-dark"><a class="nav-link active" aria-current="page">Favorites</a></NavLink>
              </li>
            </ul>
            <form class="d-flex" role="search" onSubmit={onSearch}>
              <input 
                className="form-control me-2 search rounded-5" 
                type="search" 
                placeholder="Enter Items to search here" 
                aria-label="Search"
                value={searchParam}
                onChange={(e)=> setSearchParam(e.target.value) }
              />
              <button class="btn btn-outline-success btn-success text-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar