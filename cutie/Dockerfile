FROM fusuf/whatsasena:latest

RUN git clone https://github.com/ThesanduT/Queen-Cutie /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/ThesanduT/media

CMD ["node", "bot.js"]
