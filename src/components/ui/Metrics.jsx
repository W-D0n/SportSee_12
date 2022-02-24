import styled from 'styled-components';
import propTypes from 'prop-types';
import Calories from '../../assets/img/calories-icon.svg';
import Proteines from '../../assets/img/protein-icon.svg';
import Glucides from '../../assets/img/carbs-icon.svg';
import Lipides from '../../assets/img/fat-icon.svg';

/**
 * Here are populate some metrics of user into cards
 * @component
 * @param {Object} metrics props
 * @property {!Number} metrics.calorieCount  number of calorie
 * @property {!Number} metrics.proteinCount  number of protein
 * @property {!Number} metrics.carbohydrateCount  number of carbohydrate
 * @property {!Number} metrics.lipidCount  number of lipid
 * @returns {reactElement}
 *  
 */

const Metrics = ({ metrics }) => {

  const data = [
    { title: 'Calories', iconSrc: Calories, value: metrics.calorieCount, unit: 'kCal' },
    { title: 'Protéines', iconSrc: Proteines, value: metrics.proteinCount, unit: 'g' },
    { title: 'Glucides', iconSrc: Glucides, value: metrics.carbohydrateCount, unit: 'g' },
    { title: 'Lipides', iconSrc: Lipides, value: metrics.lipidCount, unit: 'g' },
  ];

  return (
    <Container>
      {data &&
        data.map((e, i) => (
          <Card key={i}>
            <img src={e.iconSrc} alt='icon'></img>
            <Description>
              <p>{e.value}{e.unit}</p>
              <span>{e.title}</span>
            </Description>
          </Card>
        ))}
    </Container>
  );
}

export default Metrics;

Metrics.propTypes = {
  metrics: propTypes.object.isRequired
};
const Container = styled.div`
grid-area: metric;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  grid-column: 4;
`
const Card = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  border-radius: 5px;
  background-color: #FBFBFB;
  height: 124px;
  width: 258px;


  span{
    font-size:14px;
    font-weight: 700;
    color:#74798C;
  }
  p{
    font-size:20px;
    font-weight: 700;
  }
  `

const Description = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`