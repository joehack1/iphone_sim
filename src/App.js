import { useState, useEffect, useRef, useCallback } from "react";

// ============================================================
// ICONS
// ============================================================
const Icon = ({ name, size = 20, color = "currentColor", className = "" }) => {
  const icons = {
    wifi: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className={className}
      >
        <path d="M1.41 7.86C5.19 4.05 10.35 2 12 2s6.81 2.05 10.59 5.86l-1.42 1.42C17.87 5.99 14.93 4 12 4S6.13 5.99 2.83 9.28L1.41 7.86zM12 8c-2.34 0-4.5.9-6.1 2.38L4.48 8.96C6.44 7.12 9.11 6 12 6s5.56 1.12 7.52 2.96l-1.42 1.42C16.5 8.9 14.34 8 12 8zm0 4c-1.37 0-2.61.52-3.54 1.38L7.04 11.96C8.32 10.74 10.08 10 12 10s3.68.74 4.96 1.96l-1.42 1.42C14.61 12.52 13.37 12 12 12zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" />
      </svg>
    ),
    signal: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className={className}
      >
        <rect x="1" y="16" width="3" height="5" rx="1" />
        <rect x="6" y="12" width="3" height="9" rx="1" />
        <rect x="11" y="8" width="3" height="13" rx="1" />
        <rect x="16" y="4" width="3" height="17" rx="1" />
      </svg>
    ),
    battery: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className={className}
      >
        <rect
          x="1"
          y="7"
          width="18"
          height="10"
          rx="2"
          stroke={color}
          strokeWidth="1.5"
          fill="none"
        />
        <rect x="19" y="10" width="3" height="4" rx="1" fill={color} />
        <rect x="2.5" y="8.5" width="12" height="7" rx="1" fill={color} />
      </svg>
    ),
    camera: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className={className}
      >
        <path d="M20 5h-3.17L15 3H9L7.17 5H4C2.9 5 2 5.9 2 7v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-8 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
      </svg>
    ),
    flashlight: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className={className}
      >
        <path d="M7 2v11h3v9l7-12h-4l4-8z" />
      </svg>
    ),
    home: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className={className}
      >
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    ),
    settings: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className={className}
      >
        <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.57 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
      </svg>
    ),
    phone: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className={className}
      >
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    ),
    messages: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className={className}
      >
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
      </svg>
    ),
    safari: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className={className}
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke={color}
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"
          fill={color}
        />
      </svg>
    ),
    photos: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className={className}
      >
        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
      </svg>
    ),
    calculator: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className={className}
      >
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm5 0h-2v-2h2v2zm0-4H7v-2h10v2zm0-4H7V7h10v2z" />
      </svg>
    ),
    clock: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className={className}
      >
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
      </svg>
    ),
    maps: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className={className}
      >
        <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" />
      </svg>
    ),
    music: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className={className}
      >
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
      </svg>
    ),
    mail: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className={className}
      >
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
    appstore: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className={className}
      >
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.2 1.28-2.18 3.81.03 3.02 2.65 4.03 2.68 4.04l-.05.17zm-7.46-14.8c.68-.82 1.8-1.47 2.72-1.51.16 1.07-.31 2.15-.95 2.92-.62.76-1.69 1.36-2.73 1.28-.17-1.02.35-2.07.96-2.69z" />
      </svg>
    ),
    back: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className={className}
      >
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
      </svg>
    ),
    close: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className={className}
      >
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      </svg>
    ),
    check: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className={className}
      >
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      </svg>
    ),
    chevronRight: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className={className}
      >
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
      </svg>
    ),
    bluetooth: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className={className}
      >
        <path d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z" />
      </svg>
    ),
    airplane: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className={className}
      >
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
      </svg>
    ),
    brightness: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className={className}
      >
        <path d="M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
      </svg>
    ),
    volume: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className={className}
      >
        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
      </svg>
    ),
    search: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className={className}
      >
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
      </svg>
    ),
    delete: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className={className}
      >
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
      </svg>
    ),
    notes: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className={className}
      >
        <path d="M3 18h12v-2H3v2zm0-5h12v-2H3v2zm0-7v2h12V6H3zm14 9.59V17h1.41l4.18-4.18-1.41-1.41L17 15.59zM21.5 9.5l-1-1c-.2-.2-.51-.2-.71 0l-.71.71 1.41 1.41.71-.71c.2-.2.2-.51 0-.71z" />
      </svg>
    ),
    wallet: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className={className}
      >
        <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
      </svg>
    ),
  };
  return icons[name] || <div style={{ width: size, height: size }} />;
};

// ============================================================
// HELPERS
// ============================================================
const useTime = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return time;
};

const formatTime = (d) => {
  let h = d.getHours(),
    m = d.getMinutes();
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  return `${h}:${m.toString().padStart(2, "0")}`;
};

const formatDate = (d) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}`;
};

// ============================================================
// STATUS BAR
// ============================================================
const StatusBar = ({ darkText = false, time }) => {
  const textColor = darkText ? "#000" : "#fff";
  const t = time || new Date();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "14px 24px 0",
        height: 54,
        position: "relative",
        zIndex: 10,
      }}
    >
      <span
        style={{
          color: textColor,
          fontSize: 16,
          fontWeight: 600,
          fontFamily: "-apple-system,BlinkMacSystemFont,sans-serif",
          letterSpacing: "-0.3px",
        }}
      >
        {formatTime(t)}
      </span>
      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
        <Icon name="signal" size={16} color={textColor} />
        <Icon name="wifi" size={16} color={textColor} />
        <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Icon name="battery" size={22} color={textColor} />
          <span style={{ color: textColor, fontSize: 12, fontWeight: 500 }}>
            87%
          </span>
        </div>
      </div>
    </div>
  );
};

// ============================================================
// DYNAMIC ISLAND
// ============================================================
const DynamicIsland = ({ expanded = false }) => (
  <div
    style={{
      position: "absolute",
      top: 12,
      left: "50%",
      transform: "translateX(-50%)",
      background: "#000",
      width: expanded ? 200 : 120,
      height: expanded ? 60 : 34,
      borderRadius: expanded ? 20 : 17,
      transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      boxShadow: "0 0 0 1px rgba(255,255,255,0.08)",
    }}
  >
    {expanded && (
      <div
        style={{
          display: "flex",
          gap: 12,
          padding: "0 16px",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            background: "linear-gradient(135deg,#1DB954,#191414)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="music" size={18} color="#fff" />
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              color: "#fff",
              fontSize: 12,
              fontWeight: 600,
              opacity: 0.9,
            }}
          >
            Now Playing
          </div>
          <div style={{ color: "#fff", fontSize: 10, opacity: 0.6 }}>
            Blinding Lights
          </div>
        </div>
      </div>
    )}
  </div>
);

// ============================================================
// WALLPAPER
// ============================================================
const Wallpaper = ({ style = {} }) => (
  <div
    style={{
      position: "absolute",
      inset: 0,
      zIndex: 0,
      background:
        "linear-gradient(160deg, #0a0a2e 0%, #1a0a3e 20%, #2d1b69 40%, #11224e 60%, #0d3b6e 80%, #1a5276 100%)",
      overflow: "hidden",
      ...style,
    }}
  >
    {/* Stars */}
    {[...Array(50)].map((_, i) => (
      <div
        key={i}
        style={{
          position: "absolute",
          left: `${(i * 37 + 13) % 100}%`,
          top: `${(i * 53 + 7) % 100}%`,
          width: i % 5 === 0 ? 3 : 1.5,
          height: i % 5 === 0 ? 3 : 1.5,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.8)",
          opacity: 0.3 + Math.random() * 0.7,
          animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 3}s`,
        }}
      />
    ))}
    {/* Nebula effects */}
    <div
      style={{
        position: "absolute",
        top: "20%",
        left: "30%",
        width: 200,
        height: 200,
        borderRadius: "50%",
        background:
          "radial-gradient(circle,rgba(139,92,246,0.15) 0%,transparent 70%)",
        filter: "blur(20px)",
      }}
    />
    <div
      style={{
        position: "absolute",
        top: "60%",
        left: "60%",
        width: 150,
        height: 150,
        borderRadius: "50%",
        background:
          "radial-gradient(circle,rgba(59,130,246,0.12) 0%,transparent 70%)",
        filter: "blur(15px)",
      }}
    />
    <div
      style={{
        position: "absolute",
        top: "40%",
        left: "10%",
        width: 100,
        height: 100,
        borderRadius: "50%",
        background:
          "radial-gradient(circle,rgba(236,72,153,0.1) 0%,transparent 70%)",
        filter: "blur(10px)",
      }}
    />
    <style>{`
      @keyframes twinkle { 0%,100%{opacity:0.3} 50%{opacity:1} }
      @keyframes spin { 0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
    `}</style>
  </div>
);

// ============================================================
// LOCK SCREEN
// ============================================================
const LockScreen = ({ onUnlock, time }) => {
  const [swipeY, setSwipeY] = useState(0);
  const [unlocking, setUnlocking] = useState(false);
  const startY = useRef(null);
  const t = time;

  const handleTouchStart = (e) => {
    startY.current = e.touches?.[0]?.clientY || e.clientY;
  };
  const handleTouchMove = (e) => {
    if (startY.current === null) return;
    const curr = e.touches?.[0]?.clientY || e.clientY;
    const delta = startY.current - curr;
    if (delta > 0) setSwipeY(Math.min(delta, 150));
  };
  const handleTouchEnd = () => {
    if (swipeY > 80) {
      triggerUnlock();
    } else setSwipeY(0);
    startY.current = null;
  };

  const triggerUnlock = () => {
    setUnlocking(true);
    setTimeout(() => {
      onUnlock();
      setUnlocking(false);
      setSwipeY(0);
    }, 600);
  };

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 20,
        cursor: "default",
        transform: `translateY(-${swipeY * 0.4}px)`,
        opacity: unlocking ? 0 : 1,
        transition: unlocking
          ? "opacity 0.4s ease, transform 0.4s ease"
          : swipeY === 0
          ? "transform 0.3s ease"
          : "none",
        userSelect: "none",
      }}
      onMouseDown={(e) => handleTouchStart(e)}
      onMouseMove={(e) => {
        if (e.buttons === 1) handleTouchMove(e);
      }}
      onMouseUp={handleTouchEnd}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Wallpaper />
      {/* Frosted overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.15)",
          backdropFilter: "blur(0px)",
        }}
      />
      <DynamicIsland />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 120,
        }}
      >
        {/* Date */}
        <div
          style={{
            color: "rgba(255,255,255,0.85)",
            fontSize: 17,
            fontWeight: 400,
            marginBottom: 8,
            fontFamily: "-apple-system,BlinkMacSystemFont,sans-serif",
            letterSpacing: 0.2,
          }}
        >
          {formatDate(t)}
        </div>
        {/* Time */}
        <div
          style={{
            color: "#fff",
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1,
            fontFamily: "-apple-system,BlinkMacSystemFont,sans-serif",
            letterSpacing: -3,
            textShadow: "0 2px 20px rgba(0,0,0,0.3)",
          }}
        >
          {formatTime(t)}
        </div>

        {/* Notification */}
        <div
          style={{
            marginTop: 40,
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(20px)",
            borderRadius: 16,
            padding: "12px 16px",
            width: 280,
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: "linear-gradient(135deg,#34C759,#248A3D)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Icon name="messages" size={16} color="#fff" />
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 2,
                }}
              >
                <span
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  Messages
                </span>
                <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 11 }}>
                  now
                </span>
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.75)",
                  fontSize: 13,
                  lineHeight: 1.4,
                }}
              >
                Hey! Are you coming to the party tonight? 🎉
              </div>
            </div>
          </div>
        </div>

        {/* Live Activity */}
        <div
          style={{
            marginTop: 12,
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(20px)",
            borderRadius: 16,
            padding: "12px 16px",
            width: 280,
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <div
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 6,
                  background: "linear-gradient(135deg,#FF9F0A,#FF6B35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon name="maps" size={14} color="#fff" />
              </div>
              <span
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: 12,
                  fontWeight: 500,
                }}
              >
                Uber • 4 min away
              </span>
            </div>
            <div
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              ETA 8:42 PM
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 50,
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
        }}
      >
        {/* Quick actions */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "85%",
            paddingBottom: 8,
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
            }}
            style={{
              width: 54,
              height: 54,
              borderRadius: 27,
              background: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(20px)",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <Icon name="flashlight" size={22} color="#fff" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
            }}
            style={{
              width: 54,
              height: 54,
              borderRadius: 27,
              background: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(20px)",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <Icon name="camera" size={22} color="#fff" />
          </button>
        </div>
        <div
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: 14,
            letterSpacing: 0.3,
            fontFamily: "-apple-system,BlinkMacSystemFont,sans-serif",
          }}
        >
          Swipe up to unlock
        </div>
        {/* Swipe indicator */}
        <div
          style={{
            width: 120,
            height: 4,
            borderRadius: 2,
            background: "rgba(255,255,255,0.3)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              height: "100%",
              borderRadius: 2,
              background: "rgba(255,255,255,0.8)",
              width:
                swipeY > 0 ? `${Math.min((swipeY / 150) * 100, 100)}%` : "30%",
              transition: swipeY === 0 ? "width 0.5s ease" : "none",
            }}
          />
        </div>
      </div>
    </div>
  );
};

// ============================================================
// APP ICONS
// ============================================================
const AppIcon = ({ app, onOpen, jiggle, onDelete, small = false }) => {
  const size = small ? 52 : 60;
  const [pressing, setPressing] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        cursor: "pointer",
        userSelect: "none",
        animation: jiggle
          ? `jiggle 0.4s ease-in-out infinite alternate`
          : "none",
        position: "relative",
      }}
      onClick={() => !jiggle && onOpen && onOpen(app.id)}
      onMouseDown={() => setPressing(true)}
      onMouseUp={() => setPressing(false)}
      onMouseLeave={() => setPressing(false)}
    >
      {jiggle && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            onDelete && onDelete(app.id);
          }}
          style={{
            position: "absolute",
            top: -6,
            left: -6,
            width: 20,
            height: 20,
            borderRadius: 10,
            background: "#ff3b30",
            border: "2px solid #fff",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <Icon name="close" size={10} color="#fff" />
        </div>
      )}
      <div
        style={{
          width: size,
          height: size,
          borderRadius: small ? 13 : 15,
          background: app.gradient || "linear-gradient(135deg,#667eea,#764ba2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: pressing ? "none" : "0 2px 10px rgba(0,0,0,0.25)",
          transform: pressing
            ? "scale(0.92)"
            : jiggle
            ? "rotate(-2deg)"
            : "scale(1)",
          transition: "transform 0.1s ease, box-shadow 0.1s ease",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Highlight */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "45%",
            background: "rgba(255,255,255,0.15)",
            borderRadius: `${small ? 13 : 15}px ${small ? 13 : 15}px 50% 50%`,
          }}
        />
        <Icon name={app.icon} size={small ? 26 : 30} color="#fff" />
        {app.badge && (
          <div
            style={{
              position: "absolute",
              top: -4,
              right: -4,
              minWidth: 18,
              height: 18,
              borderRadius: 9,
              background: "#ff3b30",
              border: "2px solid #fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 10,
              color: "#fff",
              fontWeight: 700,
              padding: "0 3px",
            }}
          >
            {app.badge}
          </div>
        )}
      </div>
      {!small && (
        <span
          style={{
            color: "#fff",
            fontSize: 11,
            fontWeight: 400,
            textShadow: "0 1px 3px rgba(0,0,0,0.5)",
            textAlign: "center",
            maxWidth: 72,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            fontFamily: "-apple-system,BlinkMacSystemFont,sans-serif",
          }}
        >
          {app.name}
        </span>
      )}
    </div>
  );
};

// ============================================================
// APPS DATA
// ============================================================
const APPS = [
  {
    id: "phone",
    name: "Phone",
    icon: "phone",
    gradient: "linear-gradient(135deg,#34C759,#248A3D)",
    badge: 3,
  },
  {
    id: "messages",
    name: "Messages",
    icon: "messages",
    gradient: "linear-gradient(135deg,#34C759,#248A3D)",
    badge: 5,
  },
  {
    id: "safari",
    name: "Safari",
    icon: "safari",
    gradient: "linear-gradient(135deg,#007AFF,#0063D3)",
  },
  {
    id: "music",
    name: "Music",
    icon: "music",
    gradient: "linear-gradient(135deg,#FF2D55,#D70015)",
  },
  {
    id: "camera",
    name: "Camera",
    icon: "camera",
    gradient: "linear-gradient(135deg,#636366,#3A3A3C)",
  },
  {
    id: "photos",
    name: "Photos",
    icon: "photos",
    gradient: "linear-gradient(135deg,#FF9500,#FF6B00)",
  },
  {
    id: "maps",
    name: "Maps",
    icon: "maps",
    gradient: "linear-gradient(135deg,#34C759,#007AFF)",
  },
  {
    id: "wallet",
    name: "Wallet",
    icon: "wallet",
    gradient: "linear-gradient(135deg,#000,#1c1c1e)",
  },
  {
    id: "appstore",
    name: "App Store",
    icon: "appstore",
    gradient: "linear-gradient(135deg,#007AFF,#5856D6)",
  },
  {
    id: "calculator",
    name: "Calculator",
    icon: "calculator",
    gradient: "linear-gradient(135deg,#FF9500,#FF6B00)",
  },
  {
    id: "clock",
    name: "Clock",
    icon: "clock",
    gradient: "linear-gradient(135deg,#1c1c1e,#000)",
  },
  {
    id: "notes",
    name: "Notes",
    icon: "notes",
    gradient: "linear-gradient(135deg,#FFCC02,#FF9500)",
  },
  {
    id: "mail",
    name: "Mail",
    icon: "mail",
    gradient: "linear-gradient(135deg,#007AFF,#0063D3)",
    badge: 12,
  },
  {
    id: "settings",
    name: "Settings",
    icon: "settings",
    gradient: "linear-gradient(135deg,#636366,#3A3A3C)",
  },
];
const DOCK_APPS = ["phone", "messages", "safari", "mail"];

// ============================================================
// FOLDER
// ============================================================
const Folder = ({ apps, name, onOpen, jiggle }) => {
  const [open, setOpen] = useState(false);
  const preview = apps.slice(0, 4);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          cursor: "pointer",
          userSelect: "none",
          animation: jiggle
            ? "jiggle 0.4s ease-in-out infinite alternate"
            : "none",
        }}
        onClick={() => setOpen(true)}
      >
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: 15,
            background: "rgba(255,255,255,0.25)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 3,
            padding: 8,
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          {preview.map((a) => (
            <div
              key={a.id}
              style={{
                borderRadius: 4,
                background: a.gradient,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon name={a.icon} size={10} color="#fff" />
            </div>
          ))}
        </div>
        <span
          style={{
            color: "#fff",
            fontSize: 11,
            fontWeight: 400,
            textShadow: "0 1px 3px rgba(0,0,0,0.5)",
            fontFamily: "-apple-system,BlinkMacSystemFont,sans-serif",
          }}
        >
          {name}
        </span>
      </div>
      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setOpen(false)}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          />
          <div
            style={{
              position: "relative",
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(30px)",
              WebkitBackdropFilter: "blur(30px)",
              borderRadius: 24,
              padding: 24,
              width: 240,
              border: "1px solid rgba(255,255,255,0.25)",
            }}
          >
            <div
              style={{
                textAlign: "center",
                color: "#fff",
                fontSize: 14,
                fontWeight: 600,
                marginBottom: 16,
                fontFamily: "-apple-system,BlinkMacSystemFont,sans-serif",
              }}
            >
              {name}
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 16,
                justifyItems: "center",
              }}
            >
              {apps.map((a) => (
                <AppIcon
                  key={a.id}
                  app={a}
                  onOpen={(id) => {
                    setOpen(false);
                    onOpen(id);
                  }}
                  small
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// ============================================================
// HOME SCREEN
// ============================================================
const HomeScreen = ({ onOpenApp, time }) => {
  const [jiggle, setJiggle] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [showSpotlight, setShowSpotlight] = useState(false);
  const [spotlightQuery, setSpotlightQuery] = useState("");
  const longPressTimer = useRef(null);
  const startX = useRef(null);

  const mainApps = APPS.filter((a) => !DOCK_APPS.includes(a.id));
  const dockApps = APPS.filter((a) => DOCK_APPS.includes(a.id));
  const page1 = mainApps.slice(0, 8);
  const page2 = mainApps.slice(8);

  const pages = [
    [
      page1.slice(0, 4),
      page1.slice(4, 8),
      [
        {
          id: "social",
          name: "Social",
          isFolder: true,
          apps: page2.slice(0, 3),
        },
        ...page2.slice(3, 6),
      ],
    ],
    [page2],
  ];

  const handleLongPress = () => {
    longPressTimer.current = setTimeout(() => setJiggle(true), 500);
  };

  const filteredApps = APPS.filter((a) =>
    a.name.toLowerCase().includes(spotlightQuery.toLowerCase())
  );

  return (
    <div
      style={{ position: "absolute", inset: 0, zIndex: 10 }}
      onMouseDown={(e) => {
        startX.current = e.clientX;
        handleLongPress();
      }}
      onMouseUp={() => {
        clearTimeout(longPressTimer.current);
      }}
      onMouseMove={(e) => {
        if (Math.abs(e.clientX - startX.current) > 5)
          clearTimeout(longPressTimer.current);
      }}
      onClick={() => {
        if (jiggle) setJiggle(false);
      }}
    >
      <Wallpaper />
      <DynamicIsland />
      <StatusBar time={time} />

      {/* Spotlight */}
      {showSpotlight && (
        <div
          style={{
            position: "absolute",
            top: 60,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 50,
            background: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <div style={{ padding: "16px 16px 8px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,0.2)",
                borderRadius: 12,
                padding: "8px 12px",
              }}
            >
              <Icon name="search" size={16} color="rgba(255,255,255,0.6)" />
              <input
                autoFocus
                value={spotlightQuery}
                onChange={(e) => setSpotlightQuery(e.target.value)}
                placeholder="Search"
                style={{
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: "#fff",
                  fontSize: 16,
                  flex: 1,
                  fontFamily: "-apple-system,BlinkMacSystemFont,sans-serif",
                }}
              />
              <button
                onClick={() => setShowSpotlight(false)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "rgba(255,255,255,0.6)",
                  cursor: "pointer",
                  fontSize: 14,
                }}
              >
                Cancel
              </button>
            </div>
          </div>
          <div
            style={{
              padding: "0 16px",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            {filteredApps.map((app) => (
              <div
                key={app.id}
                onClick={() => {
                  setShowSpotlight(false);
                  onOpenApp(app.id);
                }}
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "center",
                  padding: "10px 12px",
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.1)",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 9,
                    background: app.gradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon name={app.icon} size={18} color="#fff" />
                </div>
                <span
                  style={{
                    color: "#fff",
                    fontSize: 15,
                    fontFamily: "-apple-system,BlinkMacSystemFont,sans-serif",
                  }}
                >
                  {app.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* App grid */}
      <div
        style={{
          position: "absolute",
          top: 80,
          left: 0,
          right: 0,
          bottom: 140,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            transition: "transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94)",
            transform: `translateX(-${currentPage * 100}%)`,
          }}
        >
          {/* Page 1 */}
          <div style={{ minWidth: "100%", padding: "20px 20px 0" }}>
            {/* Swipe down for spotlight hint */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: 16,
                cursor: "pointer",
              }}
              onClick={() => setShowSpotlight(true)}
            >
              <div
                style={{
                  width: 32,
                  height: 4,
                  borderRadius: 2,
                  background: "rgba(255,255,255,0.3)",
                }}
              />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: 20,
                justifyItems: "center",
              }}
            >
              {page1.map((app) => (
                <AppIcon
                  key={app.id}
                  app={app}
                  onOpen={onOpenApp}
                  jiggle={jiggle}
                />
              ))}
              <Folder
                name="Social"
                apps={page2.slice(0, 4)}
                onOpen={onOpenApp}
                jiggle={jiggle}
              />
              {page2.slice(4, 7).map((app) => (
                <AppIcon
                  key={app.id}
                  app={app}
                  onOpen={onOpenApp}
                  jiggle={jiggle}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Page dots */}
      <div
        style={{
          position: "absolute",
          bottom: 110,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          gap: 6,
        }}
      >
        {[0].map((_, i) => (
          <div
            key={i}
            style={{
              width: 7,
              height: 7,
              borderRadius: 3.5,
              background: currentPage === i ? "#fff" : "rgba(255,255,255,0.4)",
              transition: "all 0.2s",
            }}
          />
        ))}
      </div>

      {/* Dock */}
      <div
        style={{
          position: "absolute",
          bottom: 24,
          left: 16,
          right: 16,
          background: "rgba(255,255,255,0.18)",
          backdropFilter: "blur(30px)",
          WebkitBackdropFilter: "blur(30px)",
          borderRadius: 28,
          padding: "12px 20px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          border: "1px solid rgba(255,255,255,0.25)",
          boxShadow: "0 4px 30px rgba(0,0,0,0.2)",
        }}
      >
        {dockApps.map((app) => (
          <AppIcon key={app.id} app={app} onOpen={onOpenApp} />
        ))}
      </div>
    </div>
  );
};

// ============================================================
// APP: MESSAGES
// ============================================================
const MessagesApp = ({ onClose }) => {
  const [thread, setThread] = useState(null);
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey! Are you coming to the party tonight? 🎉",
      from: "them",
      time: "8:30 PM",
    },
    {
      id: 2,
      text: "Absolutely! What time does it start?",
      from: "me",
      time: "8:31 PM",
    },
    {
      id: 3,
      text: "9 PM sharp! Don't be late 😄",
      from: "them",
      time: "8:32 PM",
    },
  ]);

  const send = () => {
    if (!msg.trim()) return;
    const newMsg = {
      id: Date.now(),
      text: msg,
      from: "me",
      time: formatTime(new Date()),
    };
    setMessages((p) => [...p, newMsg]);
    setMsg("");
    setTimeout(() => {
      setMessages((p) => [
        ...p,
        {
          id: Date.now() + 1,
          text: "Got it! See you there 👋",
          from: "them",
          time: formatTime(new Date()),
        },
      ]);
    }, 1000);
  };

  const threads = [
    {
      id: 1,
      name: "Sarah Johnson",
      preview: "9 PM sharp! Don't be late 😄",
      time: "8:32 PM",
      avatar: "SJ",
      color: "#FF2D55",
    },
    {
      id: 2,
      name: "Mom",
      preview: "Call me when you're free 💕",
      time: "Yesterday",
      avatar: "M",
      color: "#5856D6",
    },
    {
      id: 3,
      name: "Work Group",
      preview: "Meeting at 10 AM tomorrow",
      time: "Mon",
      avatar: "W",
      color: "#007AFF",
    },
    {
      id: 4,
      name: "Alex",
      preview: "Thanks! 👍",
      time: "Sun",
      avatar: "A",
      color: "#34C759",
    },
  ];

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "#000",
        display: "flex",
        flexDirection: "column",
        fontFamily: "-apple-system,BlinkMacSystemFont,sans-serif",
      }}
    >
      {!thread ? (
        <>
          <div
            style={{
              padding: "60px 16px 16px",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <span style={{ color: "#fff", fontSize: 28, fontWeight: 700 }}>
                Messages
              </span>
              <button
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "none",
                  borderRadius: 15,
                  width: 30,
                  height: 30,
                  color: "#007AFF",
                  cursor: "pointer",
                  fontSize: 22,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                +
              </button>
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.1)",
                borderRadius: 10,
                padding: "8px 12px",
                display: "flex",
                gap: 8,
                alignItems: "center",
              }}
            >
              <Icon name="search" size={16} color="rgba(255,255,255,0.4)" />
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 15 }}>
                Search
              </span>
            </div>
          </div>
          <div style={{ flex: 1, overflow: "auto" }}>
            {threads.map((t) => (
              <div
                key={t.id}
                onClick={() => setThread(t)}
                style={{
                  display: "flex",
                  gap: 12,
                  padding: "12px 16px",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  cursor: "pointer",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    background: t.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    fontWeight: 600,
                    color: "#fff",
                    flexShrink: 0,
                  }}
                >
                  {t.avatar}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{ color: "#fff", fontSize: 16, fontWeight: 600 }}
                    >
                      {t.name}
                    </span>
                    <span
                      style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}
                    >
                      {t.time}
                    </span>
                  </div>
                  <span
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      fontSize: 14,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      display: "block",
                    }}
                  >
                    {t.preview}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              padding: "60px 16px 12px",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              gap: 12,
              alignItems: "center",
            }}
          >
            <button
              onClick={() => setThread(null)}
              style={{
                background: "transparent",
                border: "none",
                color: "#007AFF",
                cursor: "pointer",
                fontSize: 16,
                display: "flex",
                alignItems: "center",
                gap: 4,
                padding: 0,
              }}
            >
              <Icon name="back" size={22} color="#007AFF" />
            </button>
            <div style={{ flex: 1, textAlign: "center" }}>
              <div style={{ color: "#fff", fontSize: 17, fontWeight: 600 }}>
                {thread.name}
              </div>
            </div>
          </div>
          <div
            style={{
              flex: 1,
              overflow: "auto",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            {messages.map((m) => (
              <div
                key={m.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: m.from === "me" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    maxWidth: "75%",
                    background:
                      m.from === "me" ? "#007AFF" : "rgba(255,255,255,0.15)",
                    borderRadius:
                      m.from === "me"
                        ? "18px 18px 4px 18px"
                        : "18px 18px 18px 4px",
                    padding: "10px 14px",
                  }}
                >
                  <span
                    style={{ color: "#fff", fontSize: 15, lineHeight: 1.4 }}
                  >
                    {m.text}
                  </span>
                </div>
                <span
                  style={{
                    color: "rgba(255,255,255,0.3)",
                    fontSize: 11,
                    marginTop: 2,
                  }}
                >
                  {m.time}
                </span>
              </div>
            ))}
          </div>
          <div
            style={{
              padding: "8px 12px 30px",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              gap: 8,
              alignItems: "center",
              background: "#1c1c1e",
            }}
          >
            <div
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.1)",
                borderRadius: 20,
                padding: "10px 14px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="iMessage"
                style={{
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: "#fff",
                  fontSize: 15,
                  flex: 1,
                  fontFamily: "inherit",
                }}
              />
            </div>
            <button
              onClick={send}
              style={{
                width: 32,
                height: 32,
                borderRadius: 16,
                background: "#007AFF",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

// ============================================================
// APP: PHONE
// ============================================================
const PhoneApp = ({ onClose }) => {
  const [display, setDisplay] = useState("");
  const [calling, setCalling] = useState(false);
  const [callTime, setCallTime] = useState(0);
  const callTimer = useRef(null);

  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"];
  const subs = [
    "",
    "ABC",
    "DEF",
    "GHI",
    "JKL",
    "MNO",
    "PQRS",
    "TUV",
    "WXYZ",
    "",
    "+ ",
    "",
  ];

  const tap = (k) => setDisplay((p) => p + k);
  const call = () => {
    if (!display) return;
    setCalling(true);
    callTimer.current = setInterval(() => setCallTime((p) => p + 1), 1000);
  };
  const hangup = () => {
    setCalling(false);
    clearInterval(callTimer.current);
    setCallTime(0);
    setDisplay("");
  };

  const formatCallTime = () => {
    const m = Math.floor(callTime / 60)
      .toString()
      .padStart(2, "0");
    const s = (callTime % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "#1c1c1e",
        display: "flex",
        flexDirection: "column",
        fontFamily: "-apple-system,BlinkMacSystemFont,sans-serif",
      }}
    >
      {calling ? (
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            background: "#1c1c1e",
          }}
        >
          <div
            style={{
              width: 90,
              height: 90,
              borderRadius: 45,
              background: "rgba(255,255,255,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
            }}
          >
            👤
          </div>
          <div style={{ color: "#fff", fontSize: 26, fontWeight: 600 }}>
            {display}
          </div>
          <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 16 }}>
            Mobile • {formatCallTime()}
          </div>
          <button
            onClick={hangup}
            style={{
              marginTop: 40,
              width: 68,
              height: 68,
              borderRadius: 34,
              background: "#ff3b30",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff">
              <path
                d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                transform="rotate(135 12 12)"
              />
            </svg>
          </button>
        </div>
      ) : (
        <>
          <div
            style={{
              padding: "70px 24px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 120,
            }}
          >
            <span
              style={{
                color: "#fff",
                fontSize: 40,
                fontWeight: 300,
                letterSpacing: 4,
              }}
            >
              {display || " "}
            </span>
          </div>
          <div
            style={{
              flex: 1,
              padding: "0 24px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {[0, 1, 2, 3].map((row) => (
              <div key={row} style={{ display: "flex", gap: 12 }}>
                {keys.slice(row * 3, row * 3 + 3).map((k, i) => (
                  <button
                    key={k}
                    onClick={() => tap(k)}
                    style={{
                      flex: 1,
                      height: 60,
                      borderRadius: 30,
                      background: "rgba(255,255,255,0.12)",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                    }}
                  >
                    <span
                      style={{ color: "#fff", fontSize: 26, fontWeight: 400 }}
                    >
                      {k}
                    </span>
                    <span
                      style={{
                        color: "rgba(255,255,255,0.4)",
                        fontSize: 10,
                        fontWeight: 500,
                      }}
                    >
                      {subs[row * 3 + i]}
                    </span>
                  </button>
                ))}
              </div>
            ))}
            <div style={{ display: "flex", gap: 12, marginTop: 4 }}>
              <div style={{ flex: 1 }} />
              <button
                onClick={call}
                style={{
                  flex: 1,
                  height: 60,
                  borderRadius: 30,
                  background: "#34C759",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon name="phone" size={26} color="#fff" />
              </button>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {display && (
                  <button
                    onClick={() => setDisplay((p) => p.slice(0, -1))}
                    style={{
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      color: "rgba(255,255,255,0.6)",
                      fontSize: 20,
                    }}
                  >
                    ⌫
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// ============================================================
// APP: CALCULATOR
// ============================================================
const CalculatorApp = ({ onClose }) => {
  const [display, setDisplay] = useState("0");
  const [prev, setPrev] = useState(null);
  const [op, setOp] = useState(null);
  const [reset, setReset] = useState(false);

  const rows = [
    [
      { l: "AC", s: 1 },
      { l: "+/-", s: 1 },
      { l: "%", s: 1 },
      { l: "÷", op: true },
    ],
    [{ l: "7" }, { l: "8" }, { l: "9" }, { l: "×", op: true }],
    [{ l: "4" }, { l: "5" }, { l: "6" }, { l: "−", op: true }],
    [{ l: "1" }, { l: "2" }, { l: "3" }, { l: "+", op: true }],
    [{ l: "0", wide: true }, { l: "." }, { l: "=", op: true }],
  ];

  const tap = (l) => {
    if (l === "AC") {
      setDisplay("0");
      setPrev(null);
      setOp(null);
      return;
    }
    if (l === "+/-") {
      setDisplay((p) => String(-parseFloat(p)));
      return;
    }
    if (l === "%") {
      setDisplay((p) => String(parseFloat(p) / 100));
      return;
    }
    if (["÷", "×", "−", "+"].includes(l)) {
      setPrev(parseFloat(display));
      setOp(l);
      setReset(true);
      return;
    }
    if (l === "=") {
      if (op === null || prev === null) return;
      const cur = parseFloat(display);
      let r;
      if (op === "÷") r = prev / cur;
      else if (op === "×") r = prev * cur;
      else if (op === "−") r = prev - cur;
      else r = prev + cur;
      setDisplay(String(parseFloat(r.toFixed(10))));
      setPrev(null);
      setOp(null);
      setReset(false);
      return;
    }
    if (l === ".") {
      if (reset) {
        setDisplay("0.");
        setReset(false);
        return;
      }
      if (!display.includes(".")) setDisplay((p) => p + ".");
      return;
    }
    if (reset) {
      setDisplay(l);
      setReset(false);
      return;
    }
    setDisplay((p) => (p === "0" ? l : p + l));
  };

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "#000",
        display: "flex",
        flexDirection: "column",
        fontFamily: "-apple-system,BlinkMacSystemFont,sans-serif",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "flex-end",
          padding: "0 24px 20px",
        }}
      >
        <div style={{ textAlign: "right", width: "100%", overflow: "hidden" }}>
          <span
            style={{
              color: "#fff",
              fontSize: display.length > 9 ? 38 : 72,
              fontWeight: 200,
              letterSpacing: -2,
            }}
          >
            {display.length > 12
              ? parseFloat(display).toExponential(4)
              : display}
          </span>
        </div>
      </div>
      <div
        style={{
          padding: "0 12px 30px",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {rows.map((row, ri) => (
          <div key={ri} style={{ display: "flex", gap: 12 }}>
            {row.map((btn, bi) => (
              <button
                key={bi}
                onClick={() => tap(btn.l)}
                style={{
                  flex: btn.wide ? 2 : 1,
                  height: 72,
                  borderRadius: 36,
                  background: btn.s ? "#a5a5a5" : btn.op ? "#FF9500" : "#333",
                  border: "none",
                  cursor: "pointer",
                  color: btn.s ? "#000" : "#fff",
                  fontSize: 28,
                  fontWeight: 500,
                  transition: "opacity 0.1s",
                }}
              >
                {btn.l}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

// ============================================================
// APP: CAMERA
// ============================================================
const CameraApp = ({ onClose }) => {
  const [shutter, setShutter] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [mode, setMode] = useState("PHOTO");

  const shoot = () => {
    setShutter(true);
    setTimeout(() => setShutter(false), 200);
    setPhotos((p) => [...p, Date.now()]);
  };

  const modes = ["VIDEO", "PHOTO", "PORTRAIT", "SLOW-MO"];
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "#000",
        display: "flex",
        flexDirection: "column",
        fontFamily: "-apple-system,BlinkMacSystemFont,sans-serif",
      }}
    >
      {/* Viewfinder */}
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
        <Wallpaper style={{ filter: "blur(2px)" }} />
        {shutter && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "#fff",
              opacity: 0.8,
              zIndex: 10,
            }}
          />
        )}
        {/* Guides */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              border: "1px solid rgba(255,255,255,0.4)",
              borderRadius: 4,
            }}
          />
        </div>
        {/* Top controls */}
        <div
          style={{
            position: "absolute",
            top: 60,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "space-between",
            padding: "0 20px",
          }}
        >
          <button
            style={{
              color: "#FF9500",
              background: "transparent",
              border: "none",
              fontSize: 22,
              cursor: "pointer",
            }}
          >
            ⚡
          </button>
          <button
            style={{
              color: "#fff",
              background: "transparent",
              border: "none",
              fontSize: 22,
              cursor: "pointer",
            }}
          >
            LIVE
          </button>
          <button
            style={{
              color: "#fff",
              background: "transparent",
              border: "none",
              fontSize: 22,
              cursor: "pointer",
            }}
          >
            ⚙️
          </button>
        </div>
        {/* Photo count */}
        {photos.length > 0 && (
          <div
            style={{
              position: "absolute",
              top: 60,
              right: 80,
              background: "rgba(0,0,0,0.5)",
              borderRadius: 10,
              padding: "4px 8px",
              color: "#fff",
              fontSize: 12,
            }}
          >
            {photos.length} photos
          </div>
        )}
      </div>
      {/* Mode selector */}
      <div
        style={{
          background: "#000",
          padding: "12px 0 4px",
          display: "flex",
          justifyContent: "center",
          gap: 24,
        }}
      >
        {modes.map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            style={{
              background: "transparent",
              border: "none",
              color: m === mode ? "#FF9500" : "rgba(255,255,255,0.5)",
              fontSize: 12,
              fontWeight: m === mode ? 600 : 400,
              cursor: "pointer",
              letterSpacing: 0.5,
            }}
          >
            {m}
          </button>
        ))}
      </div>
      {/* Controls */}
      <div
        style={{
          background: "#000",
          padding: "16px 32px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button
          style={{
            width: 48,
            height: 48,
            borderRadius: 10,
            background: "rgba(255,255,255,0.15)",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="photos" size={24} color="#fff" />
        </button>
        <button
          onClick={shoot}
          style={{
            width: 76,
            height: 76,
            borderRadius: 38,
            background: "transparent",
            border: "5px solid #fff",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 62,
              height: 62,
              borderRadius: 31,
              background: "#fff",
            }}
          />
        </button>
        <button
          style={{
            width: 48,
            height: 48,
            borderRadius: 24,
            background: "rgba(255,255,255,0.15)",
            border: "none",
            cursor: "pointer",
            color: "#fff",
            fontSize: 20,
          }}
        >
          🔄
        </button>
      </div>
    </div>
  );
};

// ============================================================
// APP: SETTINGS
// ============================================================
const SettingsApp = ({ onClose, wifi, setWifi, bluetooth, setBluetooth }) => {
  const [page, setPage] = useState("main");
  const [brightness, setBrightness] = useState(80);
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);

  const Toggle = ({ on, onToggle }) => (
    <div
      onClick={onToggle}
      style={{
        width: 50,
        height: 30,
        borderRadius: 15,
        background: on ? "#34C759" : "rgba(255,255,255,0.2)",
        position: "relative",
        cursor: "pointer",
        transition: "background 0.2s",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 3,
          left: on ? 24 : 3,
          width: 24,
          height: 24,
          borderRadius: 12,
          background: "#fff",
          transition: "left 0.2s",
          boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
        }}
      />
    </div>
  );

  const Row = ({
    icon,
    iconColor,
    label,
    value,
    toggle,
    onToggle,
    onPress,
    chevron = true,
  }) => (
    <div
      onClick={onPress}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 16px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        cursor: onPress ? "pointer" : "default",
      }}
    >
      {icon && (
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: 8,
            background: iconColor || "#636366",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Icon name={icon} size={18} color="#fff" />
        </div>
      )}
      <span
        style={{
          flex: 1,
          color: "#fff",
          fontSize: 16,
          fontFamily: "-apple-system,BlinkMacSystemFont,sans-serif",
        }}
      >
        {label}
      </span>
      {value && (
        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 14 }}>
          {value}
        </span>
      )}
      {toggle !== undefined && <Toggle on={toggle} onToggle={onToggle} />}
      {chevron && !toggle !== undefined && onPress && (
        <Icon name="chevronRight" size={16} color="rgba(255,255,255,0.3)" />
      )}
    </div>
  );

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "#1c1c1e",
        display: "flex",
        flexDirection: "column",
        fontFamily: "-apple-system,BlinkMacSystemFont,sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "60px 16px 16px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          background: "#1c1c1e",
        }}
      >
        {page !== "main" && (
          <button
            onClick={() => setPage("main")}
            style={{
              background: "transparent",
              border: "none",
              color: "#007AFF",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 4,
              fontSize: 16,
              padding: 0,
              marginBottom: 8,
            }}
          >
            <Icon name="back" size={20} color="#007AFF" />
            Settings
          </button>
        )}
        <h1 style={{ color: "#fff", fontSize: 28, fontWeight: 700, margin: 0 }}>
          {page === "main"
            ? "Settings"
            : page.charAt(0).toUpperCase() + page.slice(1)}
        </h1>
      </div>
      <div style={{ flex: 1, overflow: "auto" }}>
        {page === "main" && (
          <>
            {/* Profile */}
            <div
              style={{
                padding: "16px",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                onClick={() => setPage("about")}
                style={{
                  display: "flex",
                  gap: 14,
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    background: "linear-gradient(135deg,#007AFF,#5856D6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 24,
                  }}
                >
                  👤
                </div>
                <div>
                  <div style={{ color: "#fff", fontSize: 18, fontWeight: 600 }}>
                    John Appleseed
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>
                    Apple ID, iCloud, Media & Purchases
                  </div>
                </div>
                <Icon
                  name="chevronRight"
                  size={16}
                  color="rgba(255,255,255,0.3)"
                />
              </div>
            </div>
            <div
              style={{
                background: "#2c2c2e",
                margin: "16px",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <Row
                icon="airplane"
                iconColor="#FF9500"
                label="Airplane Mode"
                toggle={false}
                onToggle={() => {}}
              />
              <Row
                icon="wifi"
                iconColor="#007AFF"
                label="Wi-Fi"
                value={wifi ? "HomeNetwork" : "Off"}
                onPress={() => setPage("wifi")}
                onToggle={() => setWifi(!wifi)}
                toggle={wifi}
              />
              <Row
                icon="bluetooth"
                iconColor="#007AFF"
                label="Bluetooth"
                value={bluetooth ? "On" : "Off"}
                onPress={() => setPage("bluetooth")}
                toggle={bluetooth}
                onToggle={() => setBluetooth(!bluetooth)}
              />
            </div>
            <div
              style={{
                background: "#2c2c2e",
                margin: "16px",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <Row
                icon="volume"
                iconColor="#FF3B30"
                label="Sounds & Haptics"
                onPress={() => setPage("sounds")}
              />
              <Row
                icon="notes"
                iconColor="#FF9500"
                label="Focus"
                onPress={() => setPage("focus")}
              />
              <Row
                icon="brightness"
                iconColor="#007AFF"
                label="Screen Time"
                onPress={() => setPage("screentime")}
              />
            </div>
            <div
              style={{
                background: "#2c2c2e",
                margin: "16px",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <Row
                icon="settings"
                iconColor="#636366"
                label="General"
                onPress={() => setPage("general")}
              />
              <Row
                icon="brightness"
                iconColor="#007AFF"
                label="Display & Brightness"
                onPress={() => setPage("display")}
              />
              <Row
                icon="volume"
                iconColor="#636366"
                label="Notifications"
                toggle={notifications}
                onToggle={() => setNotifications(!notifications)}
              />
              <Row
                icon="battery"
                iconColor="#34C759"
                label="Battery"
                onPress={() => setPage("battery")}
              />
            </div>
          </>
        )}
        {page === "wifi" && (
          <div
            style={{
              background: "#2c2c2e",
              margin: "16px",
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            <Row
              icon="wifi"
              iconColor="#007AFF"
              label="Wi-Fi"
              toggle={wifi}
              onToggle={() => setWifi(!wifi)}
            />
            {wifi && (
              <>
                <div
                  style={{
                    padding: "12px 16px",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <span
                      style={{
                        color: "#fff",
                        fontSize: 16,
                        fontFamily: "inherit",
                      }}
                    >
                      HomeNetwork
                    </span>
                    <br />
                    <span
                      style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}
                    >
                      Connected
                    </span>
                  </div>
                  <Icon name="check" size={18} color="#007AFF" />
                </div>
                {["CoffeeShop_5G", "iPhone_Hotspot", "Network_4231"].map(
                  (n) => (
                    <div
                      key={n}
                      style={{
                        padding: "12px 16px",
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <span
                        style={{
                          color: "#fff",
                          fontSize: 16,
                          fontFamily: "inherit",
                        }}
                      >
                        {n}
                      </span>
                    </div>
                  )
                )}
              </>
            )}
          </div>
        )}
        {page === "display" && (
          <div>
            <div
              style={{
                background: "#2c2c2e",
                margin: "16px",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <div style={{ padding: "16px" }}>
                <span
                  style={{
                    color: "#fff",
                    fontSize: 14,
                    marginBottom: 12,
                    display: "block",
                  }}
                >
                  BRIGHTNESS
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <Icon
                    name="brightness"
                    size={14}
                    color="rgba(255,255,255,0.4)"
                  />
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={brightness}
                    onChange={(e) => setBrightness(e.target.value)}
                    style={{ flex: 1, accentColor: "#fff" }}
                  />
                  <Icon
                    name="brightness"
                    size={20}
                    color="rgba(255,255,255,0.8)"
                  />
                </div>
              </div>
              <Row
                label="Dark Mode"
                toggle={darkMode}
                onToggle={() => setDarkMode(!darkMode)}
              />
              <Row label="True Tone" toggle={true} onToggle={() => {}} />
              <Row label="Night Shift" value="Off" onPress={() => {}} />
            </div>
          </div>
        )}
        {page === "about" && (
          <div
            style={{
              background: "#2c2c2e",
              margin: "16px",
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            {[
              ["Name", "iPhone 15 Pro"],
              ["Software Version", "iOS 17.4"],
              ["Model", "MNFP3LL/A"],
              ["Serial Number", "F7TJNP9X7K"],
              ["Storage", "128 GB"],
              ["Available", "64 GB"],
            ].map(([l, v]) => (
              <div
                key={l}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "12px 16px",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <span style={{ color: "#fff", fontSize: 16 }}>{l}</span>
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 16 }}>
                  {v}
                </span>
              </div>
            ))}
          </div>
        )}
        {[
          "general",
          "battery",
          "sounds",
          "focus",
          "screentime",
          "bluetooth",
        ].includes(page) && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 200,
              color: "rgba(255,255,255,0.3)",
              fontSize: 16,
            }}
          >
            {page.charAt(0).toUpperCase() + page.slice(1)} settings
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================================
// APP: SAFARI
// ============================================================
const SafariApp = () => {
  const [url, setUrl] = useState("https://www.apple.com");
  const [inputUrl, setInputUrl] = useState("apple.com");
  const [editing, setEditing] = useState(false);

  const sites = {
    "apple.com": {
      title: "Apple",
      bg: "#fff",
      content: (
        <div
          style={{
            padding: 24,
            fontFamily: "-apple-system,BlinkMacSystemFont,sans-serif",
          }}
        >
          <div
            style={{
              textAlign: "center",
              padding: "40px 0",
              borderBottom: "1px solid #eee",
            }}
          >
            <div
              style={{
                fontSize: 48,
                fontWeight: 700,
                letterSpacing: -2,
                color: "#1d1d1f",
              }}
            >
              Apple
            </div>
            <div style={{ color: "#6e6e73", marginTop: 8 }}>
              Think Different.
            </div>
          </div>
          {[
            "iPhone 15 Pro",
            "MacBook Pro",
            "iPad Air",
            "Apple Watch Series 9",
          ].map((p) => (
            <div
              key={p}
              style={{
                padding: "20px 0",
                borderBottom: "1px solid #f5f5f7",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: 16, color: "#1d1d1f", fontWeight: 500 }}>
                {p}
              </span>
              <span style={{ color: "#06c", fontSize: 14 }}>Learn more →</span>
            </div>
          ))}
        </div>
      ),
    },
    "google.com": {
      title: "Google",
      bg: "#fff",
      content: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "60px 24px",
            fontFamily: "arial,sans-serif",
          }}
        >
          <div style={{ fontSize: 56, fontWeight: 700, marginBottom: 20 }}>
            <span style={{ color: "#4285f4" }}>G</span>
            <span style={{ color: "#ea4335" }}>o</span>
            <span style={{ color: "#fbbc05" }}>o</span>
            <span style={{ color: "#4285f4" }}>g</span>
            <span style={{ color: "#34a853" }}>l</span>
            <span style={{ color: "#ea4335" }}>e</span>
          </div>
          <div
            style={{
              width: "100%",
              border: "1px solid #dfe1e5",
              borderRadius: 24,
              padding: "10px 16px",
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 20,
            }}
          >
            <Icon name="search" size={18} color="#9aa0a6" />
            <span style={{ color: "#9aa0a6", fontSize: 15 }}>
              Search Google or type a URL
            </span>
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            <button
              style={{
                padding: "8px 16px",
                border: "1px solid #f8f9fa",
                borderRadius: 4,
                background: "#f8f9fa",
                color: "#3c4043",
                cursor: "pointer",
                fontSize: 14,
              }}
            >
              Google Search
            </button>
            <button
              style={{
                padding: "8px 16px",
                border: "1px solid #f8f9fa",
                borderRadius: 4,
                background: "#f8f9fa",
                color: "#3c4043",
                cursor: "pointer",
                fontSize: 14,
              }}
            >
              I'm Feeling Lucky
            </button>
          </div>
        </div>
      ),
    },
  };

  const key =
    Object.keys(sites).find((k) => inputUrl.includes(k)) || "apple.com";
  const site = sites[key] || sites["apple.com"];

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        fontFamily: "-apple-system,BlinkMacSystemFont,sans-serif",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          padding: "60px 12px 8px",
          background: "#f2f2f7",
          borderBottom: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: 12,
            padding: "8px 12px",
            display: "flex",
            alignItems: "center",
            gap: 8,
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          <Icon name="safari" size={14} color="#007AFF" />
          {editing ? (
            <input
              autoFocus
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              onBlur={() => setEditing(false)}
              onKeyDown={(e) => e.key === "Enter" && setEditing(false)}
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                fontSize: 14,
                color: "#007AFF",
              }}
            />
          ) : (
            <span
              onClick={() => setEditing(true)}
              style={{
                flex: 1,
                fontSize: 14,
                color: "#000",
                textAlign: "center",
              }}
            >
              {inputUrl}
            </span>
          )}
        </div>
      </div>
      {/* Content */}
      <div style={{ flex: 1, overflow: "auto", background: site.bg }}>
        {site.content}
      </div>
      {/* Bottom bar */}
      <div
        style={{
          background: "#f2f2f7",
          borderTop: "1px solid rgba(0,0,0,0.1)",
          padding: "8px 24px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {["←", "→", "□", "≡", "⊕"].map((b) => (
          <button
            key={b}
            style={{
              background: "transparent",
              border: "none",
              color: "#007AFF",
              fontSize: 20,
              cursor: "pointer",
              padding: 8,
            }}
          >
            {b}
          </button>
        ))}
      </div>
    </div>
  );
};

// ============================================================
// APP: CLOCK
// ============================================================
const ClockApp = ({ time }) => {
  const t = time;
  const h = t.getHours() % 12,
    m = t.getMinutes(),
    s = t.getSeconds();
  const hDeg = h * 30 + m * 0.5;
  const mDeg = m * 6 + s * 0.1;
  const sDeg = s * 6;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "#000",
        display: "flex",
        flexDirection: "column",
        fontFamily: "-apple-system,BlinkMacSystemFont,sans-serif",
      }}
    >
      <div
        style={{
          padding: "60px 16px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "#fff", fontSize: 28, fontWeight: 700, margin: 0 }}>
          Clock
        </h1>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ position: "relative", width: 220, height: 220 }}>
          {/* Clock face */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              border: "2px solid rgba(255,255,255,0.15)",
              background: "radial-gradient(circle,#1c1c1e,#000)",
            }}
          >
            {/* Hour marks */}
            {[...Array(12)].map((_, i) => {
              const a = i * 30 * (Math.PI / 180);
              const r = 95;
              const x = 110 + r * Math.sin(a);
              const y = 110 - r * Math.cos(a);
              return (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    left: x - 1,
                    top: y - 4,
                    width: 2,
                    height: 8,
                    background: "rgba(255,255,255,0.6)",
                    borderRadius: 1,
                    transform: `rotate(${i * 30}deg)`,
                    transformOrigin: "50% 0",
                  }}
                />
              );
            })}
            {/* Hour hand */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: 4,
                height: 60,
                background: "#fff",
                borderRadius: 2,
                transformOrigin: "50% 100%",
                transform: `translateX(-50%) translateY(-100%) rotate(${hDeg}deg)`,
                boxShadow: "0 0 6px rgba(0,0,0,0.5)",
              }}
            />
            {/* Minute hand */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: 3,
                height: 85,
                background: "#fff",
                borderRadius: 2,
                transformOrigin: "50% 100%",
                transform: `translateX(-50%) translateY(-100%) rotate(${mDeg}deg)`,
              }}
            />
            {/* Second hand */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: 1.5,
                height: 90,
                background: "#FF3B30",
                borderRadius: 1,
                transformOrigin: "50% 85%",
                transform: `translateX(-50%) translateY(-85%) rotate(${sDeg}deg)`,
              }}
            />
            {/* Center */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: 8,
                height: 8,
                borderRadius: 4,
                background: "#FF3B30",
                transform: "translate(-50%,-50%)",
              }}
            />
          </div>
        </div>
      </div>
      <div style={{ padding: "0 24px 40px", textAlign: "center" }}>
        <div
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: 14,
            marginBottom: 8,
          }}
        >
          {formatDate(t)}
        </div>
        <div
          style={{
            color: "#fff",
            fontSize: 48,
            fontWeight: 200,
            letterSpacing: -1,
          }}
        >
          {formatTime(t)}
        </div>
      </div>
    </div>
  );
};

// ============================================================
// APP: PHOTOS
// ============================================================
const PhotosApp = () => {
  const gradients = [
    "linear-gradient(135deg,#FF6B6B,#FFE66D)",
    "linear-gradient(135deg,#4ECDC4,#44A08D)",
    "linear-gradient(135deg,#667eea,#764ba2)",
    "linear-gradient(135deg,#f093fb,#f5576c)",
    "linear-gradient(135deg,#4facfe,#00f2fe)",
    "linear-gradient(135deg,#43e97b,#38f9d7)",
    "linear-gradient(135deg,#fa709a,#fee140)",
    "linear-gradient(135deg,#a18cd1,#fbc2eb)",
    "linear-gradient(135deg,#ffecd2,#fcb69f)",
  ];
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "#000",
        display: "flex",
        flexDirection: "column",
        fontFamily: "-apple-system,BlinkMacSystemFont,sans-serif",
      }}
    >
      <div style={{ padding: "60px 16px 12px" }}>
        <h1
          style={{
            color: "#fff",
            fontSize: 28,
            fontWeight: 700,
            margin: "0 0 8px",
          }}
        >
          Library
        </h1>
        <div style={{ display: "flex", gap: 16 }}>
          {["All", "Favorites", "People", "Places"].map((t) => (
            <button
              key={t}
              style={{
                background: t === "All" ? "#fff" : "transparent",
                border: "none",
                color: t === "All" ? "#000" : "rgba(255,255,255,0.5)",
                fontSize: 14,
                fontWeight: 500,
                padding: "4px 12px",
                borderRadius: 12,
                cursor: "pointer",
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      <div style={{ flex: 1, overflow: "auto", padding: "0 2px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 2,
          }}
        >
          {[...Array(18)].map((_, i) => (
            <div
              key={i}
              style={{
                aspectRatio: "1",
                background: gradients[i % gradients.length],
                position: "relative",
              }}
            >
              {i === 0 && (
                <div
                  style={{
                    position: "absolute",
                    bottom: 4,
                    left: 4,
                    background: "rgba(0,0,0,0.6)",
                    borderRadius: 4,
                    padding: "2px 6px",
                    color: "#fff",
                    fontSize: 11,
                  }}
                >
                  📍 San Francisco
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================================
// APP: APP STORE
// ============================================================
const AppStoreApp = () => {
  const apps = [
    {
      name: "Spotify",
      cat: "Music",
      icon: "music",
      gradient: "linear-gradient(135deg,#1DB954,#191414)",
      rating: "4.8",
    },
    {
      name: "Instagram",
      cat: "Photo & Video",
      icon: "camera",
      gradient: "linear-gradient(135deg,#E1306C,#833AB4)",
      rating: "4.7",
    },
    {
      name: "YouTube",
      cat: "Entertainment",
      icon: "photos",
      gradient: "linear-gradient(135deg,#FF0000,#CC0000)",
      rating: "4.6",
    },
    {
      name: "Notion",
      cat: "Productivity",
      icon: "notes",
      gradient: "linear-gradient(135deg,#000,#333)",
      rating: "4.9",
    },
  ];
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "#000",
        display: "flex",
        flexDirection: "column",
        fontFamily: "-apple-system,BlinkMacSystemFont,sans-serif",
      }}
    >
      <div style={{ padding: "60px 16px 12px" }}>
        <h1 style={{ color: "#fff", fontSize: 28, fontWeight: 700, margin: 0 }}>
          Today
        </h1>
        <div
          style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginTop: 4 }}
        >
          {formatDate(new Date())}
        </div>
      </div>
      <div style={{ flex: 1, overflow: "auto", padding: "0 16px" }}>
        {/* Featured */}
        <div
          style={{
            height: 180,
            borderRadius: 20,
            background: "linear-gradient(135deg,#1a1a2e,#16213e,#0f3460)",
            marginBottom: 20,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: 20,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 20,
              left: 20,
              color: "rgba(255,255,255,0.5)",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: 1,
            }}
          >
            APP OF THE DAY
          </div>
          <div style={{ color: "#fff", fontSize: 22, fontWeight: 700 }}>
            Fantastical
          </div>
          <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>
            Calendar & Tasks
          </div>
        </div>
        <h2
          style={{
            color: "#fff",
            fontSize: 20,
            fontWeight: 700,
            margin: "0 0 16px",
          }}
        >
          Top Charts
        </h2>
        {apps.map((app, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: 12,
              alignItems: "center",
              padding: "12px 0",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <span
              style={{
                color: "rgba(255,255,255,0.3)",
                fontSize: 16,
                width: 20,
                textAlign: "center",
              }}
            >
              {i + 1}
            </span>
            <div
              style={{
                width: 54,
                height: 54,
                borderRadius: 14,
                background: app.gradient,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon name={app.icon} size={26} color="#fff" />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ color: "#fff", fontSize: 16, fontWeight: 500 }}>
                {app.name}
              </div>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>
                {app.cat} • ★{app.rating}
              </div>
            </div>
            <button
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "none",
                borderRadius: 14,
                padding: "5px 14px",
                color: "#007AFF",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              GET
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============================================================
// APP RENDERER
// ============================================================
const AppWindow = ({
  appId,
  onClose,
  time,
  wifi,
  setWifi,
  bluetooth,
  setBluetooth,
}) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 10);
  }, []);

  const close = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  const apps = {
    messages: <MessagesApp onClose={close} />,
    phone: <PhoneApp onClose={close} />,
    calculator: <CalculatorApp onClose={close} />,
    camera: <CameraApp onClose={close} />,
    settings: (
      <SettingsApp
        onClose={close}
        wifi={wifi}
        setWifi={setWifi}
        bluetooth={bluetooth}
        setBluetooth={setBluetooth}
      />
    ),
    safari: <SafariApp />,
    clock: <ClockApp time={time} />,
    photos: <PhotosApp />,
    appstore: <AppStoreApp />,
  };

  const content = apps[appId] || (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "#1c1c1e",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
      }}
    >
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: 20,
          background: (
            APPS.find((a) => a.id === appId) || {
              gradient: "linear-gradient(135deg,#666,#444)",
            }
          ).gradient,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        }}
      >
        <Icon
          name={(APPS.find((a) => a.id === appId) || { icon: "settings" }).icon}
          size={40}
          color="#fff"
        />
      </div>
      <span
        style={{
          color: "#fff",
          fontSize: 22,
          fontWeight: 600,
          fontFamily: "-apple-system,BlinkMacSystemFont,sans-serif",
        }}
      >
        {(APPS.find((a) => a.id === appId) || { name: "App" }).name}
      </span>
      <span
        style={{
          color: "rgba(255,255,255,0.5)",
          fontSize: 14,
          fontFamily: "-apple-system,BlinkMacSystemFont,sans-serif",
        }}
      >
        Coming soon
      </span>
    </div>
  );

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 50,
        transform: visible ? "scale(1)" : "scale(0.85)",
        opacity: visible ? 1 : 0,
        transition:
          "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.25s ease",
        borderRadius: 44,
        overflow: "hidden",
      }}
    >
      {content}
      {/* Status bar overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 54,
          zIndex: 200,
          pointerEvents: "none",
        }}
      >
        <StatusBar darkText={["safari"].includes(appId)} time={time} />
      </div>
      {/* Home indicator */}
      <button
        onClick={close}
        style={{
          position: "absolute",
          bottom: 8,
          left: "50%",
          transform: "translateX(-50%)",
          width: 130,
          height: 5,
          borderRadius: 2.5,
          background: "rgba(255,255,255,0.35)",
          border: "none",
          cursor: "pointer",
          zIndex: 200,
        }}
      />
    </div>
  );
};

// ============================================================
// NOTIFICATION CENTER
// ============================================================
const NotificationCenter = ({ onClose }) => (
  <div style={{ position: "absolute", inset: 0, zIndex: 80 }} onClick={onClose}>
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "rgba(0,0,0,0.3)",
        backdropFilter: "blur(30px)",
        WebkitBackdropFilter: "blur(30px)",
      }}
    />
    <div style={{ position: "relative", padding: "70px 16px 0" }}>
      <div
        style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}
      >
        {["Yesterday", "Older"].map((l) => (
          <button
            key={l}
            style={{
              background: "rgba(255,255,255,0.15)",
              borderRadius: 14,
              padding: "4px 12px",
              border: "none",
              color: "rgba(255,255,255,0.8)",
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            {l}
          </button>
        ))}
      </div>
      {[
        {
          app: "Messages",
          icon: "messages",
          color: "#34C759",
          title: "Sarah Johnson",
          body: "9 PM sharp! Don't be late 😄",
          time: "8:32 PM",
        },
        {
          app: "Mail",
          icon: "mail",
          color: "#007AFF",
          title: "Apple",
          body: "Your order has shipped!",
          time: "7:45 PM",
        },
        {
          app: "Phone",
          icon: "phone",
          color: "#34C759",
          title: "Missed Call",
          body: "Mom called 3 times",
          time: "6:20 PM",
        },
        {
          app: "Maps",
          icon: "maps",
          color: "#FF9500",
          title: "Uber",
          body: "Your driver is 4 minutes away",
          time: "5:58 PM",
        },
      ].map((n, i) => (
        <div
          key={i}
          style={{
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: 16,
            padding: "12px 14px",
            marginBottom: 10,
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: 8,
                background: n.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Icon name={n.icon} size={18} color="#fff" />
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 2,
                }}
              >
                <span
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: 12,
                    fontWeight: 500,
                  }}
                >
                  {n.app}
                </span>
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 12 }}>
                  {n.time}
                </span>
              </div>
              <div style={{ color: "#fff", fontSize: 14, fontWeight: 600 }}>
                {n.title}
              </div>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 13 }}>
                {n.body}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ============================================================
// CONTROL CENTER
// ============================================================
const ControlCenter = ({ onClose, wifi, setWifi, bluetooth, setBluetooth }) => {
  const [flashlight, setFlashlight] = useState(false);
  const [airplane, setAirplane] = useState(false);
  const [brightness, setBrightness] = useState(75);
  const [volume, setVolume] = useState(60);
  const [playing, setPlaying] = useState(false);

  const Tile = ({ on, onToggle, children, wide, tall, label }) => (
    <div
      onClick={onToggle}
      style={{
        background: on ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.15)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderRadius: 18,
        padding: 14,
        cursor: "pointer",
        gridColumn: wide ? "span 2" : "span 1",
        gridRow: tall ? "span 2" : "span 1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: "1px solid rgba(255,255,255,0.15)",
        transition: "background 0.2s",
        minHeight: tall ? 140 : 60,
      }}
    >
      <div style={{ color: on ? "#000" : "#fff" }}>{children}</div>
      {label && (
        <div
          style={{
            color: on ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.5)",
            fontSize: 11,
            fontWeight: 500,
          }}
        >
          {label}
        </div>
      )}
    </div>
  );

  return (
    <div
      style={{ position: "absolute", inset: 0, zIndex: 80 }}
      onClick={onClose}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(30px)",
          WebkitBackdropFilter: "blur(30px)",
        }}
      />
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "absolute",
          top: 60,
          right: 12,
          left: 12,
          background: "rgba(30,30,30,0.7)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          borderRadius: 24,
          padding: 16,
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        {/* Status */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 13 }}>
            Control Center
          </span>
          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.15)",
              border: "none",
              width: 26,
              height: 26,
              borderRadius: 13,
              color: "rgba(255,255,255,0.7)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon name="close" size={14} color="rgba(255,255,255,0.7)" />
          </button>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 10,
          }}
        >
          <Tile
            on={!airplane}
            onToggle={() => setAirplane(!airplane)}
            label="Airplane"
          >
            <Icon
              name="airplane"
              size={22}
              color={!airplane ? "#000" : "#fff"}
            />
          </Tile>
          <Tile on={wifi} onToggle={() => setWifi(!wifi)} label="Wi-Fi">
            <Icon name="wifi" size={22} color={wifi ? "#000" : "#fff"} />
          </Tile>
          <Tile
            on={bluetooth}
            onToggle={() => setBluetooth(!bluetooth)}
            label="Bluetooth"
          >
            <Icon
              name="bluetooth"
              size={22}
              color={bluetooth ? "#000" : "#fff"}
            />
          </Tile>
          <Tile
            on={flashlight}
            onToggle={() => setFlashlight(!flashlight)}
            label="Flash"
          >
            <Icon
              name="flashlight"
              size={22}
              color={flashlight ? "#000" : "#fff"}
            />
          </Tile>
        </div>
        {/* Sliders */}
        <div
          style={{
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.12)",
              borderRadius: 16,
              padding: "12px 14px",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Icon name="brightness" size={16} color="rgba(255,255,255,0.5)" />
              <input
                type="range"
                min={0}
                max={100}
                value={brightness}
                onChange={(e) => setBrightness(e.target.value)}
                style={{ flex: 1, accentColor: "#fff", height: 4 }}
              />
              <Icon name="brightness" size={22} color="#fff" />
            </div>
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.12)",
              borderRadius: 16,
              padding: "12px 14px",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Icon name="volume" size={16} color="rgba(255,255,255,0.5)" />
              <input
                type="range"
                min={0}
                max={100}
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                style={{ flex: 1, accentColor: "#fff", height: 4 }}
              />
              <Icon name="volume" size={22} color="#fff" />
            </div>
          </div>
        </div>
        {/* Music */}
        <div
          style={{
            marginTop: 10,
            background: "rgba(255,255,255,0.12)",
            borderRadius: 16,
            padding: "12px 14px",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                background: "linear-gradient(135deg,#1DB954,#191414)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Icon name="music" size={20} color="#fff" />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ color: "#fff", fontSize: 14, fontWeight: 600 }}>
                Blinding Lights
              </div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>
                The Weeknd
              </div>
            </div>
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <button
                onClick={() => setPlaying(!playing)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#fff",
                  fontSize: 24,
                  cursor: "pointer",
                }}
              >
                {playing ? "⏸" : "▶"}
              </button>
              <button
                style={{
                  background: "transparent",
                  border: "none",
                  color: "rgba(255,255,255,0.5)",
                  fontSize: 20,
                  cursor: "pointer",
                }}
              >
                ⏭
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================
// APP SWITCHER
// ============================================================
const AppSwitcher = ({ openApps, onSelect, onClose, onCloseApp }) => (
  <div
    style={{
      position: "absolute",
      inset: 0,
      zIndex: 90,
      background: "rgba(0,0,0,0.6)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
    }}
    onClick={onClose}
  >
    <div
      style={{
        padding: "80px 0 100px",
        height: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 16,
          padding: "0 60px",
          overflowX: "auto",
          width: "100%",
          scrollbarWidth: "none",
        }}
      >
        {openApps.length === 0 ? (
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgba(255,255,255,0.4)",
              fontSize: 16,
            }}
          >
            No recent apps
          </div>
        ) : (
          openApps.map((appId, i) => {
            const app = APPS.find((a) => a.id === appId) || {
              name: appId,
              icon: "settings",
              gradient: "linear-gradient(135deg,#666,#444)",
            };
            return (
              <div
                key={appId}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(appId);
                }}
                style={{
                  flexShrink: 0,
                  width: 200,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <div
                  style={{
                    height: 360,
                    borderRadius: 28,
                    background: app.gradient,
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      name={app.icon}
                      size={60}
                      color="rgba(255,255,255,0.4)"
                    />
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onCloseApp(appId);
                    }}
                    style={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      width: 24,
                      height: 24,
                      borderRadius: 12,
                      background: "rgba(0,0,0,0.5)",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon name="close" size={12} color="#fff" />
                  </button>
                </div>
                <span
                  style={{
                    color: "#fff",
                    fontSize: 13,
                    fontWeight: 500,
                    textAlign: "center",
                    fontFamily: "-apple-system,BlinkMacSystemFont,sans-serif",
                  }}
                >
                  {app.name}
                </span>
              </div>
            );
          })
        )}
      </div>
    </div>
  </div>
);

// ============================================================
// BOOT SCREEN
// ============================================================
const BootScreen = ({ onDone }) => {
  const [phase, setPhase] = useState("apple"); // apple -> progress -> done
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("progress"), 1500);
    const t2 = setTimeout(() => {
      let p = 0;
      const iv = setInterval(() => {
        p += Math.random() * 15 + 5;
        setProgress(Math.min(p, 100));
        if (p >= 100) {
          clearInterval(iv);
          setTimeout(onDone, 300);
        }
      }, 100);
    }, 1800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "#000",
        zIndex: 200,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
      }}
    >
      <svg width="60" height="74" viewBox="0 0 60 74" fill="white">
        <path d="M44.7 0C41 0 36.3 2.2 33.5 6c-2.5 3.3-4.4 8.2-3.7 13 4.1.3 8.3-2 11-5.6C43.3 10 45.5 5 44.7 0zM48.8 39.7c-5.2-8.3-14.9-9.4-18.5-9.4-4.4 0-8.7 1.7-12 1.7-3.5 0-7.1-1.7-11.4-1.7C1.5 30.3-5.4 36 -8.3 44.6c-2.8 8.3-2.4 24.1 9.8 37.5 3.5 3.8 7.5 7.5 13 7.5 5.2 0 7.5-2.8 14-2.8 6.5 0 8.3 2.8 13.9 2.8 5.5 0 9.5-4 13-7.8C58.5 76.5 60 73 60 73c-3.7-1.7-11.2-6.8-11.2-15.3 0-7.3 4.4-12 11-15z" />
      </svg>
      {phase === "progress" && (
        <div
          style={{
            width: 120,
            height: 3,
            borderRadius: 1.5,
            background: "rgba(255,255,255,0.15)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              borderRadius: 1.5,
              background: "rgba(255,255,255,0.6)",
              width: `${progress}%`,
              transition: "width 0.1s ease",
            }}
          />
        </div>
      )}
    </div>
  );
};

// ============================================================
// HOME INDICATOR
// ============================================================
const HomeIndicator = ({ onPress, onLongPress }) => {
  const timer = useRef(null);
  return (
    <div
      style={{
        position: "absolute",
        bottom: 8,
        left: "50%",
        transform: "translateX(-50%)",
        width: 130,
        height: 5,
        borderRadius: 2.5,
        background: "rgba(255,255,255,0.3)",
        cursor: "pointer",
        zIndex: 150,
      }}
      onClick={onPress}
      onMouseDown={() => {
        timer.current = setTimeout(onLongPress, 600);
      }}
      onMouseUp={() => clearTimeout(timer.current)}
    />
  );
};

// ============================================================
// MAIN IPHONE SIMULATOR
// ============================================================
export default function IPhoneSimulator() {
  const [booted, setBooted] = useState(false);
  const [locked, setLocked] = useState(true);
  const [openApp, setOpenApp] = useState(null);
  const [showNotifs, setShowNotifs] = useState(false);
  const [showControl, setShowControl] = useState(false);
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [recentApps, setRecentApps] = useState([]);
  const [wifi, setWifi] = useState(true);
  const [bluetooth, setBluetooth] = useState(true);
  const time = useTime();

  const handleOpenApp = (id) => {
    setOpenApp(id);
    setRecentApps((p) => [id, ...p.filter((x) => x !== id)].slice(0, 8));
  };

  const handleCloseApp = () => setOpenApp(null);

  const handleHomePress = () => {
    if (showSwitcher) {
      setShowSwitcher(false);
      return;
    }
    if (openApp) {
      setOpenApp(null);
      return;
    }
    if (showNotifs) {
      setShowNotifs(false);
      return;
    }
    if (showControl) {
      setShowControl(false);
      return;
    }
  };

  const handleLongPress = () => setShowSwitcher(true);

  // Swipe from top-left = notification center, top-right = control center
  const swipeStartX = useRef(null);
  const swipeStartY = useRef(null);
  const handleSwipeStart = (e) => {
    swipeStartX.current = e.touches?.[0]?.clientX ?? e.clientX;
    swipeStartY.current = e.touches?.[0]?.clientY ?? e.clientY;
  };
  const handleSwipeEnd = (e) => {
    const ex = e.changedTouches?.[0]?.clientX ?? e.clientX;
    const ey = e.changedTouches?.[0]?.clientY ?? e.clientY;
    const dx = ex - swipeStartX.current;
    const dy = ey - swipeStartY.current;
    const phoneEl = e.currentTarget;
    const rect = phoneEl.getBoundingClientRect();
    const relX = swipeStartX.current - rect.left;
    const relW = rect.width;
    if (dy > 60 && Math.abs(dx) < 80) {
      if (relX < relW / 2) setShowNotifs(true);
      else setShowControl(true);
    }
    if (dy < -80 && locked) {
      /* handled by lock screen */
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a0a 100%)",
        fontFamily: "-apple-system,BlinkMacSystemFont,sans-serif",
        padding: 20,
      }}
    >
      <style>{`
        @keyframes jiggle { 0%{transform:rotate(-1.5deg) scale(1.02)} 100%{transform:rotate(1.5deg) scale(0.98)} }
        @keyframes pulseRing { 0%{transform:scale(1);opacity:0.7} 100%{transform:scale(2);opacity:0} }
        * { -webkit-tap-highlight-color: transparent; box-sizing: border-box; }
        input[type=range] { height:4px; appearance:none; -webkit-appearance:none; border-radius:2px; background:rgba(255,255,255,0.3); }
        input[type=range]::-webkit-slider-thumb { -webkit-appearance:none; width:22px; height:22px; border-radius:11px; background:#fff; cursor:pointer; box-shadow:0 2px 6px rgba(0,0,0,0.3); }
        ::-webkit-scrollbar { display:none; }
      `}</style>

      {/* Device outer shell */}
      <div
        style={{
          position: "relative",
          width: 393,
          height: 852,
          borderRadius: 54,
          background:
            "linear-gradient(145deg,#2a2a2a 0%,#1a1a1a 40%,#222 60%,#333 100%)",
          boxShadow: `
          0 0 0 1px rgba(255,255,255,0.08),
          0 0 0 2px rgba(0,0,0,0.8),
          0 30px 80px rgba(0,0,0,0.6),
          0 60px 120px rgba(0,0,0,0.4),
          inset 0 1px 0 rgba(255,255,255,0.1)
        `,
          flexShrink: 0,
        }}
      >
        {/* Side buttons */}
        {/* Volume up */}
        <div
          style={{
            position: "absolute",
            left: -3,
            top: 130,
            width: 3,
            height: 36,
            borderRadius: "2px 0 0 2px",
            background: "#2a2a2a",
            boxShadow: "-1px 0 2px rgba(0,0,0,0.5)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -3,
            top: 178,
            width: 3,
            height: 36,
            borderRadius: "2px 0 0 2px",
            background: "#2a2a2a",
            boxShadow: "-1px 0 2px rgba(0,0,0,0.5)",
          }}
        />
        {/* Mute */}
        <div
          style={{
            position: "absolute",
            left: -3,
            top: 90,
            width: 3,
            height: 28,
            borderRadius: "2px 0 0 2px",
            background: "#2a2a2a",
            boxShadow: "-1px 0 2px rgba(0,0,0,0.5)",
          }}
        />
        {/* Power */}
        <div
          style={{
            position: "absolute",
            right: -3,
            top: 140,
            width: 3,
            height: 70,
            borderRadius: "0 2px 2px 0",
            background: "#2a2a2a",
            boxShadow: "1px 0 2px rgba(0,0,0,0.5)",
          }}
        />
        {/* Action button */}
        <div
          style={{
            position: "absolute",
            left: -3,
            top: 60,
            width: 3,
            height: 20,
            borderRadius: "2px 0 0 2px",
            background: "#ff9f0a",
            boxShadow: "-1px 0 4px rgba(255,159,10,0.4)",
          }}
        />

        {/* Screen bezel */}
        <div
          style={{
            position: "absolute",
            inset: 8,
            borderRadius: 46,
            background: "#000",
            overflow: "hidden",
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.04)",
          }}
          onMouseDown={handleSwipeStart}
          onMouseUp={handleSwipeEnd}
          onTouchStart={handleSwipeStart}
          onTouchEnd={handleSwipeEnd}
        >
          {!booted ? (
            <BootScreen onDone={() => setBooted(true)} />
          ) : (
            <>
              {locked ? (
                <LockScreen onUnlock={() => setLocked(false)} time={time} />
              ) : (
                <>
                  <HomeScreen onOpenApp={handleOpenApp} time={time} />
                  {openApp && (
                    <AppWindow
                      appId={openApp}
                      onClose={handleCloseApp}
                      time={time}
                      wifi={wifi}
                      setWifi={setWifi}
                      bluetooth={bluetooth}
                      setBluetooth={setBluetooth}
                    />
                  )}
                  {showNotifs && (
                    <NotificationCenter onClose={() => setShowNotifs(false)} />
                  )}
                  {showControl && (
                    <ControlCenter
                      onClose={() => setShowControl(false)}
                      wifi={wifi}
                      setWifi={setWifi}
                      bluetooth={bluetooth}
                      setBluetooth={setBluetooth}
                    />
                  )}
                  {showSwitcher && (
                    <AppSwitcher
                      openApps={recentApps}
                      onSelect={(id) => {
                        setShowSwitcher(false);
                        handleOpenApp(id);
                      }}
                      onClose={() => setShowSwitcher(false)}
                      onCloseApp={(id) =>
                        setRecentApps((p) => p.filter((x) => x !== id))
                      }
                    />
                  )}
                </>
              )}
              {/* Home indicator */}
              {!locked && (
                <HomeIndicator
                  onPress={handleHomePress}
                  onLongPress={handleLongPress}
                />
              )}
            </>
          )}
        </div>
        {/* Titanium sheen */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 54,
            background:
              "linear-gradient(135deg,rgba(255,255,255,0.04) 0%,transparent 50%,rgba(0,0,0,0.1) 100%)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Instructions */}
      <div
        style={{
          position: "fixed",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          color: "rgba(255,255,255,0.4)",
          fontSize: 12,
          textAlign: "center",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        Swipe down from top-left for notifications • top-right for control
        center • long-press home for app switcher
      </div>
    </div>
  );
}
