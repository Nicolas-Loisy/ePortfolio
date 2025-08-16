import React from "react";
import { styled } from "styled-components";
import { Shield, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SecureAccessContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const SecureButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 0.75rem;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 30px rgba(102, 126, 234, 0.4);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const SecondaryIcon = styled.div`
  position: absolute;
  right: -8px;
  top: -8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface SecureAccessButtonProps {
  text?: string;
  description?: string;
}

const SecureAccessButton: React.FC<SecureAccessButtonProps> = ({
  text = "Accès Documents Sécurisés",
  description = "Section protégée par mot de passe",
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/documents");
  };

  return (
    <SecureAccessContainer>
      <SecureButton onClick={handleClick} title={description}>
        <IconContainer>
          <Shield size={20} />
          <SecondaryIcon>
            <Lock size={12} />
          </SecondaryIcon>
        </IconContainer>
        {text}
      </SecureButton>
    </SecureAccessContainer>
  );
};

export default SecureAccessButton;
