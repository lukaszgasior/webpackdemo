var _ = require('lodash');

var people = [{
  "id": 1,
  "first_name": "Russell",
  "last_name": "Simpson",
  "email": "rsimpson0@ocn.ne.jp",
  "gender": "Male",
  "ip_address": "4.206.166.229"
}, {
  "id": 2,
  "first_name": "Johnny",
  "last_name": "Kelley",
  "email": "jkelley1@alexa.com",
  "gender": "Male",
  "ip_address": "175.228.149.79"
}, {
  "id": 3,
  "first_name": "Andrew",
  "last_name": "Perez",
  "email": "aperez2@tripod.com",
  "gender": "Male",
  "ip_address": "108.42.204.216"
}, {
  "id": 4,
  "first_name": "Andrea",
  "last_name": "Richards",
  "email": "arichards3@histats.com",
  "gender": "Female",
  "ip_address": "173.69.218.100"
}, {
  "id": 5,
  "first_name": "Jesse",
  "last_name": "Edwards",
  "email": "jedwards4@guardian.co.uk",
  "gender": "Male",
  "ip_address": "241.92.243.7"
}, {
  "id": 6,
  "first_name": "Shawn",
  "last_name": "Allen",
  "email": "sallen5@gizmodo.com",
  "gender": "Male",
  "ip_address": "59.91.135.20"
}, {
  "id": 7,
  "first_name": "Nicholas",
  "last_name": "Wood",
  "email": "nwood6@newsvine.com",
  "gender": "Male",
  "ip_address": "33.56.39.221"
}, {
  "id": 8,
  "first_name": "George",
  "last_name": "Ward",
  "email": "gward7@cdc.gov",
  "gender": "Male",
  "ip_address": "115.178.116.126"
}, {
  "id": 9,
  "first_name": "Jacqueline",
  "last_name": "Little",
  "email": "jlittle8@posterous.com",
  "gender": "Female",
  "ip_address": "106.90.179.2"
}, {
  "id": 10,
  "first_name": "Phyllis",
  "last_name": "Black",
  "email": "pblack9@state.gov",
  "gender": "Female",
  "ip_address": "29.127.103.118"
}, {
  "id": 11,
  "first_name": "Benjamin",
  "last_name": "White",
  "email": "bwhitea@desdev.cn",
  "gender": "Male",
  "ip_address": "57.1.41.147"
}, {
  "id": 12,
  "first_name": "Earl",
  "last_name": "Gibson",
  "email": "egibsonb@discovery.com",
  "gender": "Male",
  "ip_address": "98.191.153.2"
}, {
  "id": 13,
  "first_name": "Timothy",
  "last_name": "Oliver",
  "email": "toliverc@ebay.co.uk",
  "gender": "Male",
  "ip_address": "29.37.224.147"
}, {
  "id": 14,
  "first_name": "Laura",
  "last_name": "Ramos",
  "email": "lramosd@about.com",
  "gender": "Female",
  "ip_address": "33.133.198.65"
}, {
  "id": 15,
  "first_name": "Anthony",
  "last_name": "Hill",
  "email": "ahille@hao123.com",
  "gender": "Male",
  "ip_address": "248.122.220.23"
}, {
  "id": 16,
  "first_name": "Bonnie",
  "last_name": "Mccoy",
  "email": "bmccoyf@barnesandnoble.com",
  "gender": "Female",
  "ip_address": "20.213.158.89"
}, {
  "id": 17,
  "first_name": "Andrea",
  "last_name": "Bryant",
  "email": "abryantg@cmu.edu",
  "gender": "Female",
  "ip_address": "0.147.113.60"
}, {
  "id": 18,
  "first_name": "Marie",
  "last_name": "Andrews",
  "email": "mandrewsh@upenn.edu",
  "gender": "Female",
  "ip_address": "217.45.58.238"
}, {
  "id": 19,
  "first_name": "Carlos",
  "last_name": "Watkins",
  "email": "cwatkinsi@deliciousdays.com",
  "gender": "Male",
  "ip_address": "148.128.18.211"
}, {
  "id": 20,
  "first_name": "Pamela",
  "last_name": "Little",
  "email": "plittlej@prweb.com",
  "gender": "Female",
  "ip_address": "210.146.178.40"
}];


var femaleCount = _.filter(people, {gender: "Female"}).length;

alert(femaleCount + " females!"); 