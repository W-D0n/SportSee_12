import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Calories from '../../assets/img/calories-icon.svg';
import Proteines from '../../assets/img/protein-icon.svg';
import Glucides from '../../assets/img/carbs-icon.svg';
import Lipides from '../../assets/img/fat-icon.svg';
import Card from './MetricCard';

const Div = styled.div``

const UserMetrics = () => {
  const navigate = useNavigate();

  const mokeKeyData = {
    calorieCount: 1930,
    proteinCount: 155,
    carbohydrateCount: 290,
    lipidCount: 50
  };
  const data = [
    { title: 'Calories', iconSrc: Calories, value: mokeKeyData.calorieCount, unit: 'kCal' },
    { title: 'Protéines', iconSrc: Proteines, value: mokeKeyData.proteinCount, unit: 'g' },
    { title: 'Glucides', iconSrc: Glucides, value: mokeKeyData.carbohydrateCount, unit: 'g' },
    { title: 'Lipides', iconSrc: Lipides, value: mokeKeyData.lipidCount, unit: 'g' },
  ];

  return (
    <Div>
      {data ?
        data.map((e, i) => (
          //Version longue...
          // <Card key={i} title={e.title} src={e.iconSrc} value={e.value} unit={e.unit} />
          <Card key={i} {...e} />
        ))
        :
        navigate('/error')}
    </Div>
  );
}

export default UserMetrics;