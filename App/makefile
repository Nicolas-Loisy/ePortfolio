build:
	@echo "Installing dependencies and building the project..."
	@npm install && npm run build
	@echo "Build completed."

# Commande pour déployer les fonctions sur Firebase
deploy:
	@echo "Deploying to Firebase..."
	@firebase deploy --only hosting
	@echo "Deployment completed."

# Commande pour tout construire et déployer
build-deploy: build deploy
	@echo "Build and deployment completed successfully!"

# Commande pour afficher les commandes disponibles
help:
	@echo "Available commands:"
	@echo "  make build        # Clean, copy, install dependencies, and build the project"
	@echo "  make deploy       # Deploy to Firebase"
	@echo "  make build-deploy # Build and deploy functions"
	@echo "  make help         # Display this help message"
