import Navbar from '../../components/landing_page/navbar';
import image from '../../assets/images/notfound.png';
import { Link } from 'react-router-dom';

const url = window.location.href;

const Custom404 = () => {
  return (
    <div
      style={{
        backgroundColor: 'var(--SparesIndigo)',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        padding: '0 1rem',
      }}>
      <Navbar />
      <div className="content">
        <img
          style={{
            aspectRatio: '1/1',
            width: '100%',
          }}
          src={image}
          alt=""
        />
        <h1 className="text-8xl font-bold m-3">404</h1>
        <p>The URL {url} does not exist</p>
        <p>
          Click{' '}
          <Link to="/" style={{ color: 'white' }}>
            here
          </Link>{' '}
          to go back to the home page
        </p>
      </div>
    </div>
  );
};

export default Custom404;
