'use client';
import './styles.css';
import { useRouter } from 'next/navigation';

export default function ChooseSchool() {
  const router = useRouter();
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-image" />
        <div className="login-form">
          <h1>Choose your school</h1>
          {/* <p>Don’t see your school? <a href="#">Join the waitlist</a> and we’ll let you know when we launch there!</p> */}

          <div className="school-list">
            <button className="school-btn" onClick={() => router.push('/login')}>
              <img src="/ucb.png" alt="UC Santa Cruz" />
              <span>UC Santa Cruz Login</span>
              <span className="arrow">›</span>
            </button>
            {/* <button className="school-btn coming-soon" disabled>
              <span>UC Davis</span>
              <span className="status">Coming soon</span>
            </button>
            <button className="school-btn coming-soon" disabled>
              <span>UC Irvine</span>
              <span className="status">Coming soon</span>
            </button>
            <button className="school-btn coming-soon" disabled>
              <span>UC San Diego</span>
              <span className="status">Coming soon</span>
            </button>
            <button className="school-btn coming-soon" disabled>
              <span>UC Santa Barbara</span>
              <span className="status">Coming soon</span>
            </button>
            <button className="school-btn coming-soon" disabled>
              <span>UC Merced</span>
              <span className="status">Coming soon</span>
            </button>
            <button className="school-btn coming-soon" disabled>
              <span>UC Riverside</span>
              <span className="status">Coming soon</span>
            </button>
            <button className="school-btn coming-soon" disabled>
              <span>UC Berkley</span>
              <span className="status">Coming soon</span>
            </button>
            <button className="school-btn coming-soon" disabled>
              <span>UC Los Angeles</span>
              <span className="status">Coming soon</span>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}