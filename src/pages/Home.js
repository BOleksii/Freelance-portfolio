 
import Header from "./../components/header/Header";


const Home = () => {
	return ( 
		<>
    <main className="section">
        <div className="container">
        <Header />
          <ul className="content-list">
            <li className="content-list__itm">
              <h2 className="title-2">Frontend</h2>
              <p>HTML, css, JavaScript, ReactJS</p>
            </li>
            <li className="content-list__itm">
              <h2 className="title-2">Backend</h2>
              <p>NodeJS</p>
            </li>
          </ul>
        </div>
      </main>
	  </>
	 );
}
 
export default Home;