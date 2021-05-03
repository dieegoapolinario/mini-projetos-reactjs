import { Title, TitleSmall } from './styles';

function App() {
  return (
    <div>
      <Title fontSize={20}>
        Hello<br/>
        <span>Texto menor</span>
      </Title>
      <TitleSmall>Menor</TitleSmall>
    </div>
  );
}

export default App;
