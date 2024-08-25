FROM jenkins/jenkins:latest

USER root

# Install necessary packages and dependencies for Cypress
RUN apt-get update && \
    apt-get install -y \
    libnss3 \
    xvfb \
    libgtk-3-0 \
    libgconf-2-4 \
    libxtst6 \
    libxss1 \
    libasound2 \
    libnss3-tools

# Switch back to Jenkins user
USER jenkins
