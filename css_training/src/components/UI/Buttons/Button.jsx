const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`300 rounded-lg border-none p-2 sm:p-4 md:p-4  ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const TextButton = ({ children, ...props }) => {
  return (
    <Button
      className="min-w-min text-yellow-300 hover:text-yellow-500"
      {...props}
    >
      {children}
    </Button>
  );
};

const PrimaryButton = ({ children, ...props }) => {
  return (
    <Button
      className="min-w-fit bg-yellow-500 font-semibold uppercase text-gray-800 hover:bg-yellow-600"
      {...props}
    >
      {children}
    </Button>
  );
};

export { PrimaryButton, TextButton };
