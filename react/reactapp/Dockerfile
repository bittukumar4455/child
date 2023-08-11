FROM node:16.13.1-buster as build
LABEL env build_environment
LABEL description="This is the build environment for react based frontend application"
# set work directory
WORKDIR /usr/frontend/app
COPY . /usr/frontend/app
RUN yarn install
RUN yarn build
CMD ["yarn", "run", "start"]
EXPOSE 3001