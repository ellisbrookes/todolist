import styled from 'styled-components';

export const Todolistcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

export const Todolistcontent = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin-bottom: 2rem;
  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid var(--gray300);
    border-radius: 0.25rem;
    margin-bottom: 0.5rem;
  }
  button {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid var(--gray300);
    border-radius: 0.25rem;
    background-color: var(--yellow);
    color: var(--gray700);
    font-weight: bold;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
  }
`;
