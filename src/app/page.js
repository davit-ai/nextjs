import dateUtils from '@/utils/dateCounter';
const counter = dateUtils();

export default function Home() {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#ffe4e1',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div className='container'>
        <h1 style={{ color: '#ff69b4' }}>
          I have been alive for {counter} days!
        </h1>
      </div>
    </div>
  );
}
