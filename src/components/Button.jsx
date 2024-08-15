export const Button = ({
  label,
  iconURL,
  backgroundColor,
  backgroundAnimationColor,
  borderColor,
  ringColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`
      flex justify-center items-center gap-2 px-7 py-4 border rounded-full font-montserrat text-lg leading-none transition hover:duration-300 hover:ring-2
      ${
        backgroundColor
          ? `${backgroundColor} ${backgroundAnimationColor} ${borderColor} ${ringColor} ${textColor}`
          : 'bg-coral-red border-coral-red ring-coral-red text-white hover:bg-dark-coral-red'
      }
      ${fullWidth && 'w-full'}
      `}
    >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt='arrow right icon'
          className='w-5 h-5 ml-2 rounded-full'
        />
      )}
    </button>
  );
};
