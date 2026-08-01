import React from "react";
import PublicLayout from "../components/PublicLayout";
import '../styles/home.css';


const Home = () => {
  return (
    <PublicLayout>
      <section className="hero p-5 text-center" style={{backgroundImage:"url('images/hero.jpg')"}}>
        <div className="backgroundStyle">
          <h1 className="display-4">Quick & Hot Food , Delivered to You</h1>
          <p className="lead">Craving something tasty? Let's get it to ypur door!</p>
          <form method="GET" action="/search" className="d-flex mt-3" style={{maxWidth:"600px", margin:'0 auto'}}>
            <input type="text" name='q' placeholder="I would like to eat..." className="form-control" style={{borderTopRightRadius:"0", borderBottomRightRadius: "0"}}></input>
            <button className="btn bg-warning px-4" style={{borderTopLeftRadius:"0", borderBottomLeftRadius:"0"}}>Search</button>
          </form>
        </div>
      </section>

    </PublicLayout>
    
  );
};

export default Home;
