import styled from 'styled-components';

/**
 * Loader component with a svg
 * @component
 *
 * @returns {reactElement}  
 */

const Loading = () => {
  return (
    <Container>
      <div className="loader__content">
        <p>Veuillez patienter</p>
      </div>
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  width: 100%;
  height: 100vh;

  .loader__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 75%;
  }
`
