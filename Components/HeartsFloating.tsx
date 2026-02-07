import Image from "next/image";
const HeartsFloating = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(100)].map((_, i) => (
        <Image
          key={i}
          src="/hearts.png"
          alt="floating heart"
          width={30 + Math.random() * 15} // Varied sizes
          height={30 + Math.random() * 15}
          className="heart absolute"
          style={{
            left: `${i * 4 + Math.random() * 5}%`,
            animationDelay: `${i}s`,
            animationDuration: `${10 + Math.random() * 6}s`, // Varied speeds
          }}
        />
      ))}
    </div>
  );
};

export default HeartsFloating;
