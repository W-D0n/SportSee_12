/**
 * Loader component with a svg
 */
import LoaderImg from '../assets/img/loader.svg';
import styled from 'styled-components';

const Loading = () => {
  return (
    <Container>
      <div className="loader__content">
        <object type="image/svg+xml" data={LoaderImg}>
          svg-animation
        </object>
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

  .loader__content object {
    max-width: 50%;
  }
`
