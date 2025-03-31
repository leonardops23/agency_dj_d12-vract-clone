import imgMain from "../../assets/img/header-main.jpg";

const Background = () => {
  return (
    <div 
      className="fixed inset-0 z-0"
      style={{
        backgroundImage: `url(${imgMain})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay semi-transparente */}
      <div className="absolute inset-0 bg-white/90"></div>
    </div>
  );
};

export default Background; 