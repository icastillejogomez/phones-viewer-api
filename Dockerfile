FROM node:10.13.0-alpine

# Env
ENV PORT=8080

# Create Directory for the Container
WORKDIR /usr/src/app

# Only copy the package.json file to work directory
COPY package.json .

# Install all Packages
RUN yarn install

# Copy all other source code to work directory
ADD . /usr/src/app

# TypeScript
RUN yarn lint
RUN yarn compile

# Expose the port
EXPOSE 8080

# Start
CMD [ "yarn", "start" ]