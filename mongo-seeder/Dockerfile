FROM mongo

COPY init.json /init.json
CMD mongoimport --host mongo --db dev --collection users --type json --file /init.json --jsonArray
