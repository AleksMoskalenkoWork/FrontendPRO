import { useTheme } from '../../context/ThemeContext';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="btn" onClick={toggleTheme}>
      {theme === 'light' ? '🌙 Темна тема' : '☀️ Світла тема'}
    </button>
  );
}

export default ThemeToggle;
