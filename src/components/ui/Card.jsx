import propTypes from 'prop-types';


/**
 * Card which display user keydata
 * @component
 * 
 * @param {String} title label of element
 * @param {String} iconSrc icon's path
 * @param {Number} value how much do you eat ?
 * @param {String} unit kg or kcal
 * @returns {reactElement}
 *  
 */

const Card = ({ title, iconSrc, value, unit }) => {

  return (
    <>
      <h1>{title}</h1>
      <img src={iconSrc} alt='icon'></img>
      <p>{value}{unit}</p>
    </>
  )
}
Card.propTypes = {
  title: propTypes.string,
  iconSrc: propTypes.string,
  value: propTypes.number,
  unit: propTypes.string
};

export default Card;