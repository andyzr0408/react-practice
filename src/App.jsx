import { UserProfile } from './components/UserProfile';
import './App.css';

function App() {
  return (
    <main style={{ padding: '24px', textAlign: 'center' }}>
      <h1>Lección 01: Componentes, JSX y Props</h1>
      <p style={{ color: '#888', marginBottom: '24px' }}>
        Los componentes son bloques de construcción reutilizables y modulares.
      </p>

      {/* Renderizamos el componente con diferentes props */}
      <UserProfile
        name="Ada Lovelace"
        role="Pionera de la Programación"
        avatarUrl="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
        isOnLine={true}
      />

      <UserProfile
        name="Alan Turing"
        role="Científico de la Computación"
        avatarUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
        isOnLine={false}
      />

    <UserProfile
        name="Delcy Rodríguez"
        role="Presidenta de la República Bolivariana de Venezuela"
        avatarUrl="https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7f/Delcy_Rodr%C3%ADguez_-_02_%2819-01-2026%29_%28cropped_2%29_%28b%29.jpg/250px-Delcy_Rodr%C3%ADguez_-_02_%2819-01-2026%29_%28cropped_2%29_%28b%29.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
        isOnLine={true}
      />
    </main>
  );
}

export default App;