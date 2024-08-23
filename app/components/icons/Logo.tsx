const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 60"
      width="200"
      height="60"
    >
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2563eb" /> {/* from-blue-600 */}
          <stop offset="100%" stopColor="#7c3aed" /> {/* to-violet-600 */}
        </linearGradient>
      </defs>
      <text
        x="10"
        y="40"
        className="font-sans font-extrabold text-2xl"
        style={{ fontSize: "35px" }}
        fill="url(#gradient1)"
      >
        JSdev
      </text>
    </svg>
  );
};

export default Logo;
