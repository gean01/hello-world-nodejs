FROM registry.access.redhat.com/ubi9/nodejs-20

# Esta imagem UBI traz dnf e o pacote curl-minimal.
# O pacote curl completo conflita com curl-minimal; --allowerasing troca um pelo outro.
USER 0
RUN dnf install -y --allowerasing curl && dnf clean all
USER 1001

WORKDIR /opt/app-root/src

COPY --chown=1001:0 package.json package-lock.json ./
RUN npm ci --omit=dev

COPY --chown=1001:0 . .

EXPOSE 8080

CMD ["npm", "start"]
