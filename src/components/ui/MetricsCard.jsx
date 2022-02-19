import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  title: PropTypes.string,
  iconSrc: PropTypes.string,
  value: PropTypes.number,
  unit: PropTypes.string
};

export default MetricsCard;

const Div = styled.div`
`