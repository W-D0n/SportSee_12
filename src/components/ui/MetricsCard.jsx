import styled from 'styled-components';
import propTypes from 'prop-types';

const MetricsCard = ({ title, iconSrc, value, unit }) => {

  return (
    <>
      <Div>
        <h1>{title}</h1>
        <img src={iconSrc} alt='icon'></img>
        <p>{value}{unit}</p>
      </Div>
    </>
  )
}
MetricsCard.propTypes = {
  title: propTypes.string,
  iconSrc: propTypes.string,
  value: propTypes.number,
  unit: propTypes.string
};

export default MetricsCard;

const Div = styled.div`
`