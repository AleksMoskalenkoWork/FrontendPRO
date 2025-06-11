import { useTheme } from '../../context/ThemeContext';

function ThemeToggle(props) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={props.className} onClick={toggleTheme}>
      {theme === 'light' ? '🌙 Темна тема' : '☀️ Світла тема'}
    </button>
  );
}

export default ThemeToggle;
