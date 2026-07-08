# ---------- Build Stage ----------
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

# ---------- Production Stage ----------
FROM node:22-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./

RUN npm ci --omit=dev

COPY --from=builder /app ./

EXPOSE 4001

CMD ["npm", "start"]