import React, { useState } from "react";
import { Lock, Eye, EyeOff, Shield } from "lucide-react";
import { styled } from "styled-components";

interface SecureLoginProps {
  onSuccess: () => void;
  title?: string;
  description?: string;
}

const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.gradientBackground};
  padding: 2rem;
`;

const LoginCard = styled.div`
  background: ${(props) => props.theme.cardBackground};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 1rem;
  padding: 3rem;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  position: relative;
`;

const GlowingIcon = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: -5px;
    background: ${(props) => props.theme.accent};
    border-radius: 50%;
    filter: blur(10px);
    opacity: 0.3;
  }
`;

const IconWrapper = styled.div`
  position: relative;
  background: ${(props) => props.theme.cardBackground};
  border: 1px solid ${(props) => props.theme.accent};
  border-radius: 50%;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.text};
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: ${(props) => props.theme.textSecondary};
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.5;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 1px solid ${(props) => props.theme.inputBorder};
  border-radius: 0.5rem;
  background: ${(props) => props.theme.inputBackground};
  color: ${(props) => props.theme.text};
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.accent};
    box-shadow: 0 0 0 2px ${(props) => props.theme.accent}20;
  }
`;

const InputIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${(props) => props.theme.textSecondary};
`;

const ToggleButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: ${(props) => props.theme.textSecondary};
  cursor: pointer;
  padding: 0.25rem;

  &:hover {
    color: ${(props) => props.theme.text};
  }
`;

const LoginButton = styled.button`
  background: ${(props) => props.theme.gradientPrimary};
  color: ${(props) => props.theme.text};
  border: none;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const ErrorMessage = styled.div`
  background: #fee;
  border: 1px solid #fcc;
  border-radius: 0.5rem;
  padding: 0.75rem;
  margin-bottom: 1rem;
  color: #c33;
  font-size: 0.9rem;
  text-align: center;
`;

const SecureLogin: React.FC<SecureLoginProps> = ({
  onSuccess,
  title = "Accès Sécurisé",
  description = "Veuillez saisir le mot de passe pour accéder aux documents confidentiels.",
}) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulation d'un léger délai pour l'UX
    await new Promise((resolve) => setTimeout(resolve, 500));

    try {
      // Import dynamique pour éviter les problèmes de bundling
      const { verifyPassword, createSecureSession } = await import(
        "../../config/securityConfig"
      );

      if (verifyPassword(password)) {
        createSecureSession();
        onSuccess();
      } else {
        setError("Mot de passe incorrect. Veuillez réessayer.");
        setPassword("");
      }
    } catch (err) {
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoginContainer>
      <LoginCard>
        <IconContainer>
          <GlowingIcon>
            <IconWrapper>
              <Shield size={32} />
            </IconWrapper>
          </GlowingIcon>
        </IconContainer>

        <Title>{title}</Title>
        <Description>{description}</Description>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <InputIcon>
              <Lock size={20} />
            </InputIcon>
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mot de passe"
              required
              autoComplete="off"
              disabled={isLoading}
            />
            <ToggleButton
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              disabled={isLoading}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </ToggleButton>
          </InputGroup>

          <LoginButton type="submit" disabled={!password || isLoading}>
            {isLoading ? (
              <>
                <div
                  style={{
                    width: "16px",
                    height: "16px",
                    border: "2px solid transparent",
                    borderTop: "2px solid currentColor",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite",
                  }}
                />
                Vérification...
              </>
            ) : (
              <>
                <Shield size={16} />
                Accéder
              </>
            )}
          </LoginButton>
        </Form>
      </LoginCard>
    </LoginContainer>
  );
};

export default SecureLogin;
