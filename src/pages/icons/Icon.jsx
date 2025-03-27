const Icon = ({ name = 'x', size = 'middle', color = 'red', inverted }) => {
  const width = size === 'small' ? 24 : size === 'middle' ? 30 : 36;

  return (
    <div style={{ backgroundColor: inverted ? color : 'transparent' }}>
    <img
      title={name}
      src={`icons/${name}.svg`}
      className={`filter-${color} ${inverted ? 'inverted' : ''}`}
      style={{ width: width, aspectRatio: '1/1' }}
    />
    </div>
  );
};

export default Icon;

// https://isotropic.co/tool/hex-color-to-css-filter/