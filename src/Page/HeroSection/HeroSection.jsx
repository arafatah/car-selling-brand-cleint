const HeroSection = () => {
  return (
    <div>
      <div
        className="hero min-h-screen object-cover"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/DpQ7bhZ/pexels-pixabay-248747.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-2xl md:text-5xl font-bold">Discover Your Dream Ride Today</h1>
            <p className="mb-5">
            Unlock a World of Possibilities on Wheels - Where Luxury Meets Performance
            </p>
            <button className="btn btn-primary">Explore Our Car Collection</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
