import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  /* Custom scrollbar styles */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.scrollbarThumb};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${(props) => props.theme.scrollbarThumbHover};
  }

  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.scrollbarTrack};
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 2.5rem;
    }

    h3 {
      font-size: 1.5rem;
    }
    
    span {
      font-size: 1.5rem;
    }

    p {
      font-size: 1.1rem;
      padding-right: 1rem;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 2.5rem;
    }

    h3 {
      font-size: 1rem;
    }

    span {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.875rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.75rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1rem;
    }

    span {
      font-size: 1rem;
    }

    p {
      font-size: 0.75rem;
    }
  }
`;

export default GlobalStyle;
