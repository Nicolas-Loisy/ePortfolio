import React, { useState } from "react";
import {
  Settings,
  Send,
  RotateCw,
  Lock,
  Plus,
  History,
  Cpu,
  Cable,
  GraduationCap,
  ChevronDown,
} from "lucide-react";

const COLORS = {
  background: "radial-gradient(ellipse at top, #0b0c10, #1f2833, #0b0c10)",
  text: "#c5c6c7",
  primary: "#66fcf1",
  secondary: "#45a29e",
  border: "#0b0c10",
  inputBackground: "rgba(11, 12, 16, 0.8)",
  inputBorder: "#45a29e",
  buttonBackground: "linear-gradient(to right, #45a29e, #45a29e)",
  buttonBorder: "#45a29e",
};

function App() {
  const [initialPositions, setInitialPositions] = useState([1, 1, 1]);

  // CSS animations
  React.useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
        40% { transform: translateY(-10px); }
        60% { transform: translateY(-5px); }
      }
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  const [boardConnections, setBoardConnections] = useState(["AY", "CD", "EF"]);
  const [message, setMessage] = useState("");
  const [encodedMessage, setEncodedMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleEncode = async () => {
    setIsLoading(true);
    setError("");
    setEncodedMessage("");

    try {
      const validConnections = boardConnections.filter(
        (conn) => conn.length === 2
      );
      const response = await fetch(
        "https://random-meriel-nl-markia-d2c9fc3c.koyeb.app/encode",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            initial_positions: initialPositions,
            board_connections: validConnections,
            message: message.toUpperCase(),
          }),
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        console.log(errorData);
        throw new Error(
          errorData.message || "Une erreur est survenue lors de l'encodage"
        );
      }

      const data = await response.json();
      setEncodedMessage(data.encoded_message);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Une erreur est survenue lors de l'encodage"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handlePositionChange = (index: number, value: number) => {
    const newPositions = [...initialPositions];
    newPositions[index] = Math.max(1, Math.min(26, value));
    setInitialPositions(newPositions);
  };

  const handleConnectionChange = (index: number, value: string) => {
    const newConnections = [...boardConnections];
    newConnections[index] = value.toUpperCase().slice(0, 2);
    setBoardConnections(newConnections);
  };

  const addConnection = () => {
    if (boardConnections.length < 13) {
      setBoardConnections([...boardConnections, ""]);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: COLORS.background,
        color: COLORS.text,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div style={{ position: "relative", display: "inline-block" }}>
            <div
              style={{
                position: "absolute",
                inset: "-5px",
                background: COLORS.buttonBackground,
                borderRadius: "50%",
                filter: "blur(10px)",
                opacity: "0.75",
              }}
            ></div>
            <div
              style={{
                position: "relative",
                background: COLORS.border,
                borderRadius: "50%",
                padding: "1rem",
              }}
            >
              <Lock
                style={{ width: "64px", height: "64px", color: COLORS.primary }}
              />
            </div>
          </div>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              marginTop: "1rem",
              WebkitBackgroundClip: "text",
            }}
          >
            Machine Énigma
          </h1>
          <p
            style={{
              color: COLORS.secondary,
              fontSize: "1.1rem",
              marginTop: "0.5rem",
            }}
          >
            Projet universitaire de cryptographie
          </p>
        </div>

        {/* Section Introduction */}
        <div
          style={{
            background: COLORS.inputBackground,
            borderRadius: "1rem",
            padding: "2rem",
            marginBottom: "2rem",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
            border: `1px solid ${COLORS.border}`,
          }}
        >
          {/* Histoire */}
          <div style={{ marginBottom: "2rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <History
                style={{
                  width: "28px",
                  height: "28px",
                  marginRight: "0.75rem",
                  color: COLORS.primary,
                }}
              />
              <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", margin: 0 }}>
                Une machine légendaire
              </h2>
            </div>
            <p
              style={{
                lineHeight: "1.8",
                color: COLORS.text,
                marginBottom: "1rem",
              }}
            >
              La machine Enigma est un dispositif de chiffrement électromécanique
              inventé par l'ingénieur allemand Arthur Scherbius à la fin de la
              Première Guerre mondiale. Utilisée massivement par l'Allemagne nazie
              pendant la Seconde Guerre mondiale, elle était considérée comme
              inviolable grâce à ses milliards de combinaisons possibles.
            </p>
            <p style={{ lineHeight: "1.8", color: COLORS.text }}>
              C'est à Bletchley Park, en Angleterre, qu'une équipe de
              cryptanalystes dirigée par{" "}
              <span style={{ color: COLORS.primary, fontWeight: "600" }}>
                Alan Turing
              </span>{" "}
              réussit l'exploit de percer ses secrets. Leur travail, resté secret
              pendant des décennies, aurait raccourci la guerre de deux ans et
              sauvé des millions de vies.
            </p>
          </div>

          {/* Fonctionnement mécanique */}
          <div style={{ marginBottom: "2rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <Cpu
                style={{
                  width: "28px",
                  height: "28px",
                  marginRight: "0.75rem",
                  color: COLORS.primary,
                }}
              />
              <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", margin: 0 }}>
                Comment ça fonctionne ?
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              {/* Rotors */}
              <div
                style={{
                  background: "rgba(69, 162, 158, 0.1)",
                  borderRadius: "0.75rem",
                  padding: "1.25rem",
                  border: `1px solid ${COLORS.secondary}`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "0.75rem",
                  }}
                >
                  <RotateCw
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "0.5rem",
                      color: COLORS.primary,
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      margin: 0,
                      color: COLORS.primary,
                    }}
                  >
                    Les Rotors
                  </h3>
                </div>
                <p style={{ fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>
                  Trois ou quatre disques rotatifs qui substituent chaque lettre.
                  Après chaque frappe, les rotors tournent, changeant
                  complètement le circuit électrique et donc la substitution.
                </p>
              </div>

              {/* Réflecteur */}
              <div
                style={{
                  background: "rgba(69, 162, 158, 0.1)",
                  borderRadius: "0.75rem",
                  padding: "1.25rem",
                  border: `1px solid ${COLORS.secondary}`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "0.75rem",
                  }}
                >
                  <Lock
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "0.5rem",
                      color: COLORS.primary,
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      margin: 0,
                      color: COLORS.primary,
                    }}
                  >
                    Le Réflecteur
                  </h3>
                </div>
                <p style={{ fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>
                  Situé après les rotors, il renvoie le signal à travers les
                  rotors dans le sens inverse. C'est ce qui permet de déchiffrer
                  un message avec les mêmes réglages.
                </p>
              </div>

              {/* Tableau de connexions */}
              <div
                style={{
                  background: "rgba(69, 162, 158, 0.1)",
                  borderRadius: "0.75rem",
                  padding: "1.25rem",
                  border: `1px solid ${COLORS.secondary}`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "0.75rem",
                  }}
                >
                  <Cable
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "0.5rem",
                      color: COLORS.primary,
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      margin: 0,
                      color: COLORS.primary,
                    }}
                  >
                    Le Plugboard
                  </h3>
                </div>
                <p style={{ fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>
                  Un tableau de connexions où des câbles échangent des paires de
                  lettres avant et après le passage dans les rotors, ajoutant une
                  couche de complexité supplémentaire.
                </p>
              </div>
            </div>
          </div>

          {/* Projet universitaire */}
          <div
            style={{
              background: `linear-gradient(135deg, rgba(102, 252, 241, 0.1) 0%, rgba(69, 162, 158, 0.05) 100%)`,
              borderRadius: "0.75rem",
              padding: "1.5rem",
              borderLeft: `4px solid ${COLORS.primary}`,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "0.75rem",
              }}
            >
              <GraduationCap
                style={{
                  width: "24px",
                  height: "24px",
                  marginRight: "0.75rem",
                  color: COLORS.primary,
                }}
              />
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  margin: 0,
                  color: COLORS.primary,
                }}
              >
                Ce projet
              </h3>
            </div>
            <p style={{ lineHeight: "1.7", margin: 0 }}>
              Dans le cadre d'un cours de cryptographie, j'ai recodé la logique
              complète de la machine Enigma en Python. L'interface ci-dessous
              vous permet de configurer les rotors et les connexions du
              plugboard, puis d'encoder votre propre message exactement comme
              l'auraient fait les opérateurs allemands il y a 80 ans.
            </p>
          </div>

          {/* Scroll indicator */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1.5rem",
            }}
          >
            <ChevronDown
              style={{
                width: "32px",
                height: "32px",
                color: COLORS.secondary,
                animation: "bounce 2s infinite",
              }}
            />
          </div>
        </div>

        <div
          style={{
            background: COLORS.inputBackground,
            borderRadius: "1rem",
            padding: "2rem",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
            border: `1px solid ${COLORS.border}`,
          }}
        >
          {/* Configuration des Rotors */}
          <div style={{ marginBottom: "2rem" }} className="rotors-section">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem",
              }}
              className="rotors-header"
            >
              <Settings
                style={{
                  width: "24px",
                  height: "24px",
                  marginRight: "0.5rem",
                  color: COLORS.primary,
                }}
              />
              <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                Configuration des Rotors
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1rem",
              }}
            >
              {initialPositions.map((pos, index) => (
                <div
                  key={index}
                  style={{ marginRight: "1rem" }}
                  className="rotor-container"
                >
                  <label
                    htmlFor={`rotor-${index + 1}`}
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      color: "#9ca3af",
                    }}
                    className="rotor-label"
                  >
                    Rotor {index + 1}
                  </label>
                  <input
                    id={`rotor-${index + 1}`}
                    className="rotor-input"
                    type="number"
                    min="1"
                    max="26"
                    value={pos}
                    onChange={(e) =>
                      handlePositionChange(index, parseInt(e.target.value))
                    }
                    style={{
                      width: "100%",
                      background: COLORS.inputBackground,
                      border: `1px solid ${COLORS.inputBorder}`,
                      borderRadius: "0.5rem",
                      padding: "0.5rem",
                      color: COLORS.text,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Connexions */}
          <div style={{ marginBottom: "2rem" }} className="connections-section">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1rem",
              }}
              className="connections-header"
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <RotateCw
                  style={{
                    width: "24px",
                    height: "24px",
                    marginRight: "0.5rem",
                    color: COLORS.primary,
                  }}
                />
                <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  Connexions
                </h2>
              </div>
              <button
                id="add-connection-btn"
                className="add-connection-button"
                onClick={addConnection}
                disabled={boardConnections.length >= 13}
                style={{
                  background: COLORS.buttonBackground,
                  color: COLORS.text,
                  padding: "0.5rem 1rem",
                  borderRadius: "0.5rem",
                  border: "none",
                  cursor:
                    boardConnections.length >= 13 ? "not-allowed" : "pointer",
                  opacity: boardConnections.length >= 13 ? "0.5" : "1",
                }}
              >
                <Plus
                  style={{
                    width: "16px",
                    height: "16px",
                    marginRight: "0.5rem",
                  }}
                />
                Ajouter
              </button>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1rem",
              }}
            >
              {boardConnections.map((conn, index) => (
                <div
                  key={index}
                  style={{ marginBottom: "1rem", marginRight: "1rem" }}
                  className="connection-container"
                >
                  <label
                    htmlFor={`connection-${index + 1}`}
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      color: "#9ca3af",
                    }}
                    className="connection-label"
                  >
                    Paire {index + 1}
                  </label>
                  <input
                    id={`connection-${index + 1}`}
                    className="connection-input"
                    type="text"
                    value={conn}
                    onChange={(e) =>
                      handleConnectionChange(index, e.target.value)
                    }
                    maxLength={2}
                    style={{
                      width: "100%",
                      background: COLORS.inputBackground,
                      border: `1px solid ${COLORS.inputBorder}`,
                      borderRadius: "0.5rem",
                      padding: "0.5rem",
                      color: COLORS.text,
                      textTransform: "uppercase",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Message */}
          <div style={{ marginBottom: "2rem" }} className="message-section">
            <label
              htmlFor="message-input"
              style={{
                display: "block",
                marginBottom: "0.5rem",
                marginRight: "1rem",
                color: "#9ca3af",
              }}
              className="message-label"
            >
              Message à encoder
            </label>
            <textarea
              id="message-input"
              className="message-textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{
                width: "100%",
                background: COLORS.inputBackground,
                border: `1px solid ${COLORS.inputBorder}`,
                borderRadius: "0.5rem",
                padding: "0.5rem",
                color: COLORS.text,
                height: "100px",
              }}
              placeholder="Entrez votre message..."
            ></textarea>
          </div>

          <button
            id="encode-btn"
            className="encode-button"
            onClick={handleEncode}
            disabled={isLoading}
            style={{
              width: "100%",
              background: COLORS.buttonBackground,
              color: COLORS.text,
              padding: "1rem",
              borderRadius: "0.5rem",
              border: `1px solid ${COLORS.buttonBorder}`,
              cursor: isLoading ? "not-allowed" : "pointer",
              marginTop: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {isLoading ? (
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  border: `2px solid ${COLORS.text}`,
                  borderTop: "2px solid transparent",
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite",
                }}
              ></div>
            ) : (
              <>
                <Send
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "0.5rem",
                  }}
                />
                Encoder
              </>
            )}
          </button>

          {/* Encoded Message */}
          {encodedMessage && (
            <div
              id="encoded-message-container"
              className="encoded-message-container"
              style={{
                marginTop: "2rem",
                padding: "1rem",
                background: COLORS.inputBackground,
                borderRadius: "0.5rem",
                border: `1px solid ${COLORS.inputBorder}`,
                color: COLORS.text,
              }}
            >
              <h2
                className="encoded-message-title"
                style={{ fontSize: "1.5rem", fontWeight: "bold" }}
              >
                Message Encodé
              </h2>
              <p className="encoded-message-text-result">{encodedMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
