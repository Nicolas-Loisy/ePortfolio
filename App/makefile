run-build:
	@echo "Installing dependencies and building the project..."
	@npm install
	@npm run build
	@echo "Build completed."

# Command to deploy to Firebase
deploy:
	@echo "Deploying to Firebase..."
	@firebase deploy --only hosting
	@echo "Deployment completed."

# Command to build and deploy
build-deploy: run-build deploy
	@echo "Build and deployment completed successfully!"

# Command to display available commands
help:
	@echo "Available commands:"
	@echo "  make run-build        # Install dependencies and build the project"
	@echo "  make deploy       # Deploy to Firebase hosting"
	@echo "  make build-deploy # Build and deploy to Firebase hosting"
	@echo "  make help         # Display this help message"
