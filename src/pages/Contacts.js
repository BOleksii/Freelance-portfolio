import { NavLink } from 'react-router-dom';

const Contacts = () => {
	return ( 
		<>
		<main className="section">
			<div className="container">
				<h1 className="title-1">Contacts</h1>
				<ul className="content-list">
					<li className="content-list__item">
						<h2 className="">Location</h2>
						<p>Kyiv, Ukraine</p>
					</li>

					<li className="content-list__item">
						<h2 className="">Telegram / WatsApp</h2>
						<NavLink to="tel:+380677200240">
							+38 (067) 720-02-40
						</NavLink>
						{/* <p><a href="tel:+380677200240">+38 (067) 720-02-40</a></p> */}
					</li>

					<li className="content-list__item">
						<h2 className="">Email</h2>
						<NavLink to="mailto:bernnatskyioleksii@gmail.com">
							bernnatskyioleksii@gmail.com
						</NavLink>
						{/* <p><a href="mailto:bernnatskyioleksii@gmail.com"> */}
						{/* bernnatskyioleksii@gmail.com */}
						{/* </a></p> */}
					</li>
				</ul>
			</div>
		</main>
		</>
	 );
}
 
export default Contacts;