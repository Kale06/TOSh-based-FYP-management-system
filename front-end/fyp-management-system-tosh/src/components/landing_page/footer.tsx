import styled from 'styled-components';
import SparesLogoS from '../svgcomponents/spares_logo_s';

const CustomFooter = styled.footer`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    text-align: left;
    

    .sparesLogo {
      width: 2.4rem;
    }

    div {
      width: 50%;
    }
    div:nth-child(2) {
      text-align: right;
    }
  }


  p {
    font-size: 0.8rem;
  }

  li {
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
    
    .sparesLogo {
      width: 30px;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0.5rem 0;
    }

    div:nth-child(2) * {
      margin: 0.1rem;
    }
  }
  align-items: center;
  color: white;
  padding: 1rem 2rem;

  ul {
    list-style-type: none;
    padding: 0;
  }
`;

const Footer = () => {
  return (
    <CustomFooter id="contact">
      <div>
        <div className="sparesLogo">
          <SparesLogoS fill="white" fill2="white" />
        </div>
        <p>
          Spares created in 2023 is a Project Management tool focusing on Final
          Year Projects that are anually created as an evaluation method on
          academic grounds.
        </p>
        <p style={{color:'var(--SparesIndigo)'}} className='subtitle'>Unstable build - Beta 1.0</p>
      </div>
      <div>
        <p>
          <b>Contact Us</b>
        </p>
        <ul>
          <li>+60-149-5023-95</li>
          <li ><a style={{color:'white'}} href="mailto:muhammad.haikal100602@gmail.com">muhammmad.haikal100602@gmail.com</a></li>
          <li>Haikal</li>
        </ul>
      </div>
    </CustomFooter>
  );
};

export default Footer;
