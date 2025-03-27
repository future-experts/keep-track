import { LIST_ICONS } from './icons';
import Icon from './Icon';

const IconPage = () => {
  return (
    <>
      <h1>
        IconPage
      </h1>
      <div className='row'>
        {LIST_ICONS.map((icon) => (
          <div key={icon.id} className='card bordered' style={{ width: '48px', margin: '6px', padding: '12px' }}>
            <Icon name={icon.image} size='small' color='red' />
            <Icon name={icon.image} color='green' />
            <Icon name={icon.image} color='blue' />
            <Icon name={icon.image} size='large' color='blue' inverted />
          </div>))}
      </div>
    </>
  );
};

export default IconPage;

