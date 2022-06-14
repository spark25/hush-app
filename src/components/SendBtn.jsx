export const SendBtn = ({ action }) => {
  return (
    <button
      onClick={action}
      className="h-10 w-10 rounded-full bg-h-primary flex items-center justify-center shrink-0"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="#fff"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        transform="rotate(90)"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>
    </button>
  );
};
