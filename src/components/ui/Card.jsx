import styled from 'styled-components';
import propTypes from 'prop-types';

const MetricsCard = ({ title, iconSrc, value, unit }) => {

  return (
    <Container>
      <h1>{title}</h1>
      <img src={iconSrc} alt='icon'></img>
      <p>{value}{unit}</p>
    </Container>
  )
}
MetricsCard.propTypes = {
  title: propTypes.string,
  iconSrc: propTypes.string,
  value: propTypes.number,
  unit: propTypes.string
};

export default MetricsCard;

const Container = styled.div`

`