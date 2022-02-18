import styled from 'styled-components';
import PropTypes from 'prop-types';

const Div = styled.div`
`
const MetricCard = ({ title, iconSrc, value, unit }) => {
  
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
MetricCard.propTypes = {
  title: PropTypes.string,
  iconSrc: PropTypes.string,
  value: PropTypes.number,
  unit: PropTypes.string
};

export default MetricCard;