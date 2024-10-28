FROM node:22.7.0

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . /app

CMD ["npm", "run", "dev"]

#To run: sudo docker run -p 5173:5173 swanly-front-end