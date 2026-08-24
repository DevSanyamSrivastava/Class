import React from 'react'

const Country = () => {
   const allCountries= [
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1e8.svg",
		"country": "Ascension Island",
		"countryCode": "ac"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1e9.svg",
		"country": "Andorra",
		"countryCode": "ad"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1ea.svg",
		"country": "United Arab Emirates",
		"countryCode": "ae"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1eb.svg",
		"country": "Afghanistan",
		"countryCode": "af"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1ec.svg",
		"country": "Antigua & Barbuda",
		"countryCode": "ag"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1ee.svg",
		"country": "Anguilla",
		"countryCode": "ai"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1f1.svg",
		"country": "Albania",
		"countryCode": "al"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1f2.svg",
		"country": "Armenia",
		"countryCode": "am"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1f4.svg",
		"country": "Angola",
		"countryCode": "ad"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1f6.svg",
		"country": "Antarctica",
		"countryCode": "aq"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1f7.svg",
		"country": "Argentina",
		"countryCode": "ar"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1f8.svg",
		"country": "American Samoa",
		"countryCode": "as"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1f9.svg",
		"country": "Austria",
		"countryCode": "at"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1fa.svg",
		"country": "Australia",
		"countryCode": "au"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1fc.svg",
		"country": "Aruba",
		"countryCode": "aw"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1fd.svg",
		"country": "Åland Islands",
		"countryCode": "ax"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1ff.svg",
		"country": "Azerbaijan",
		"countryCode": "az"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1e6.svg",
		"country": "Bosnia & Herzegovina",
		"countryCode": "ba"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1e7.svg",
		"country": "Barbados",
		"countryCode": "bb"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1e9.svg",
		"country": "Bangladesh",
		"countryCode": "bd"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1ea.svg",
		"country": "Belgium",
		"countryCode": "be"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1eb.svg",
		"country": "Burkina Faso",
		"countryCode": "bf"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1ec.svg",
		"country": "Bulgaria",
		"countryCode": "bg"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1ed.svg",
		"country": "Bahrain",
		"countryCode": "bh"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1ee.svg",
		"country": "Burundi",
		"countryCode": "bi"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1ef.svg",
		"country": "Benin",
		"countryCode": "bj"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1f1.svg",
		"country": "St. Barthélemy",
		"countryCode": "bl"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1f2.svg",
		"country": "Bermuda",
		"countryCode": "bm"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1f3.svg",
		"country": "Brunei",
		"countryCode": "bn"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1f4.svg",
		"country": "Bolivia",
		"countryCode": "bo"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1f6.svg",
		"country": "Caribbean Netherlands"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1f7.svg",
		"country": "Brazil",
		"countryCode": "br"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1f8.svg",
		"country": "Bahamas",
		"countryCode": "bs"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1f9.svg",
		"country": "Bhutan",
		"countryCode": "bt"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1fb.svg",
		"country": "Bouvet Island",
		"countryCode": "bv"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1fc.svg",
		"country": "Botswana",
		"countryCode": "bw"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1fe.svg",
		"country": "Belarus",
		"countryCode": "by"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1ff.svg",
		"country": "Belize",
		"countryCode": "bz"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1e6.svg",
		"country": "Canada",
		"countryCode": "ca"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1e8.svg",
		"country": "Cocos (Keeling) Islands",
		"countryCode": "cc"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1e9.svg",
		"country": "Congo - Kinshasa",
		"countryCode": "cg"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1eb.svg",
		"country": "Central African Republic",
		"countryCode": "cf"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1ec.svg",
		"country": "Congo - Brazzaville",
		"countryCode": "cd"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1ed.svg",
		"country": "Switzerland",
		"countryCode": "ch"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1ee.svg",
		"country": "Côte d’Ivoire",
		"countryCode": "ci"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1f0.svg",
		"country": "Cook Islands",
		"countryCode": "ck"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1f1.svg",
		"country": "Chile",
		"countryCode": "cl"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1f2.svg",
		"country": "Cameroon",
		"countryCode": "cm"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1f3.svg",
		"country": "China",
		"countryCode": "cn"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1f4.svg",
		"country": "Colombia",
		"countryCode": "co"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1f5.svg",
		"country": "Clipperton Island",
		"countryCode": "cp"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1f7.svg",
		"country": "Costa Rica",
		"countryCode": "cr"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1fa.svg",
		"country": "Cuba",
		"countryCode": "cu"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1fb.svg",
		"country": "Cape Verde",
		"countryCode": "cv"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1fc.svg",
		"country": "Curaçao",
		"countryCode": "cw"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1fd.svg",
		"country": "Christmas Island",
		"countryCode": "cx"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1fe.svg",
		"country": "Cyprus",
		"countryCode": "cy"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1ff.svg",
		"country": "Czechia",
		"countryCode": "cz"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e9-1f1ea.svg",
		"country": "Germany",
		"countryCode": "de"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e9-1f1ec.svg",
		"country": "Diego Garcia",
		"countryCode": "dg"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e9-1f1ef.svg",
		"country": "Djibouti",
		"countryCode": "dj"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e9-1f1f0.svg",
		"country": "Denmark",
		"countryCode": "dk"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e9-1f1f2.svg",
		"country": "Dominica",
		"countryCode": "dm"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e9-1f1f4.svg",
		"country": "Dominican Republic",
		"countryCode": "do"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1e9-1f1ff.svg",
		"country": "Algeria",
		"countryCode": "dz"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ea-1f1e6.svg",
		"country": "Ceuta & Melilla",
		"countryCode": "ea"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ea-1f1e8.svg",
		"country": "Ecuador",
		"countryCode": "ec"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ea-1f1ea.svg",
		"country": "Estonia",
		"countryCode": "ee"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ea-1f1ec.svg",
		"country": "Egypt",
		"countryCode": "eg"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ea-1f1ed.svg",
		"country": "Western Sahara",
		"countryCode": "eh"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ea-1f1f7.svg",
		"country": "Eritrea",
		"countryCode": "er"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ea-1f1f8.svg",
		"country": "Spain",
		"countryCode": "es"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ea-1f1f9.svg",
		"country": "Ethiopia",
		"countryCode": "et"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ea-1f1fa.svg",
		"country": "European Union",
		"countryCode": "eu"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1eb-1f1ee.svg",
		"country": "Finland",
		"countryCode": "fi"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1eb-1f1ef.svg",
		"country": "Fiji",
		"countryCode": "fj"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1eb-1f1f0.svg",
		"country": "Falkland Islands",
		"countryCode": "fk"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1eb-1f1f2.svg",
		"country": "Micronesia",
		"countryCode": "fm"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1eb-1f1f4.svg",
		"country": "Faroe Islands",
		"countryCode": "fo"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1eb-1f1f7.svg",
		"country": "France",
		"countryCode": "fr"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1e6.svg",
		"country": "Gabon",
		"countryCode": "ga"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1e7.svg",
		"country": "United Kingdom",
		"countryCode": "gb"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1e9.svg",
		"country": "Grenada",
		"countryCode": "gd"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1ea.svg",
		"country": "Georgia",
		"countryCode": "ge"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1eb.svg",
		"country": "French Guiana",
		"countryCode": "gf"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1ec.svg",
		"country": "Guernsey",
		"countryCode": "gg"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1ed.svg",
		"country": "Ghana",
		"countryCode": "gh"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1ee.svg",
		"country": "Gibraltar",
		"countryCode": "gi"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1f1.svg",
		"country": "Greenland",
		"countryCode": "gl"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1f2.svg",
		"country": "Gambia",
		"countryCode": "gm"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1f3.svg",
		"country": "Guinea",
		"countryCode": "gn"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1f5.svg",
		"country": "Guadeloupe",
		"countryCode": "gp"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1f6.svg",
		"country": "Equatorial Guinea",
		"countryCode": "gq"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1f7.svg",
		"country": "Greece",
		"countryCode": "gr"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1f8.svg",
		"country": "South Georgia & South', Sandwich Islands",
		"countryCode": "gs"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1f9.svg",
		"country": "Guatemala",
		"countryCode": "gt"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1fa.svg",
		"country": "Guam",
		"countryCode": "gu"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1fc.svg",
		"country": "Guinea-Bissau",
		"countryCode": "gw"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1fe.svg",
		"country": "Guyana",
		"countryCode": "gy"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ed-1f1f0.svg",
		"country": "Hong Kong SAR China",
		"countryCode": "hk"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ed-1f1f2.svg",
		"country": "Heard & McDonald Islands",
		"countryCode": "hm"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ed-1f1f3.svg",
		"country": "Honduras",
		"countryCode": "hn"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ed-1f1f7.svg",
		"country": "Croatia",
		"countryCode": "hr"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ed-1f1f9.svg",
		"country": "Haiti",
		"countryCode": "ht"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ed-1f1fa.svg",
		"country": "Hungary",
		"countryCode": "hu"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1e8.svg",
		"country": "Canary Islands",
		"countryCode": "ic"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1e9.svg",
		"country": "Indonesia",
		"countryCode": "id"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1ea.svg",
		"country": "Ireland",
		"countryCode": "ie"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f1.svg",
		"country": "Israel",
		"countryCode": "il"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f2.svg",
		"country": "Isle of Man",
		"countryCode": "im"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f3.svg",
		"country": "India",
		"countryCode": "in"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f4.svg",
		"country": "British Indian Ocean Territory",
		"countryCode": "io"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f6.svg",
		"country": "Iraq",
		"countryCode": "iq"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f7.svg",
		"country": "Iran"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f8.svg",
		"country": "Iceland",
		"countryCode": "is"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f9.svg",
		"country": "Italy",
		"countryCode": "it"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ef-1f1ea.svg",
		"country": "Jersey",
		"countryCode": "je"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ef-1f1f2.svg",
		"country": "Jamaica",
		"countryCode": "jm"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ef-1f1f4.svg",
		"country": "Jordan",
		"countryCode": "jo"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ef-1f1f5.svg",
		"country": "Japan",
		"countryCode": "jp"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f0-1f1ea.svg",
		"country": "Kenya",
		"countryCode": "ke"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f0-1f1ec.svg",
		"country": "Kyrgyzstan",
		"countryCode": "kg"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f0-1f1ed.svg",
		"country": "Cambodia",
		"countryCode": "kh"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f0-1f1ee.svg",
		"country": "Kiribati",
		"countryCode": "ki"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f0-1f1f2.svg",
		"country": "Comoros",
		"countryCode": "km"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f0-1f1f3.svg",
		"country": "St. Kitts & Nevis",
		"countryCode": "kn"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f0-1f1f5.svg",
		"country": "North Korea",
		"countryCode": "kp"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f0-1f1f7.svg",
		"country": "South Korea",
		"countryCode": "kr"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f0-1f1fc.svg",
		"country": "Kuwait",
		"countryCode": "kw"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f0-1f1fe.svg",
		"country": "Cayman Islands",
		"countryCode": "ky"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f0-1f1ff.svg",
		"country": "Kazakhstan",
		"countryCode": "kz"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1e6.svg",
		"country": "Laos",
		"countryCode": "la"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1e7.svg",
		"country": "Lebanon",
		"countryCode": "lb"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1e8.svg",
		"country": "St. Lucia",
		"countryCode": "lc"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1ee.svg",
		"country": "Liechtenstein",
		"countryCode": "li"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1f0.svg",
		"country": "Sri Lanka",
		"countryCode": "lk"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1f7.svg",
		"country": "Liberia",
		"countryCode": "lr"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1f8.svg",
		"country": "Lesotho",
		"countryCode": "ls"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1f9.svg",
		"country": "Lithuania",
		"countryCode": "lt"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1fa.svg",
		"country": "Luxembourg",
		"countryCode": "lu"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1fb.svg",
		"country": "Latvia",
		"countryCode": "lv"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1fe.svg",
		"country": "Libya",
		"countryCode": "ly"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1e6.svg",
		"country": "Morocco",
		"countryCode": "ma"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1e8.svg",
		"country": "Monaco",
		"countryCode": "mc"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1e9.svg",
		"country": "Moldova",
		"countryCode": "md"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1ea.svg",
		"country": "Montenegro",
		"countryCode": "me"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1eb.svg",
		"country": "St. Martin",
		"countryCode": "mf"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1ec.svg",
		"country": "Madagascar",
		"countryCode": "mg"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1ed.svg",
		"country": "Marshall Islands",
		"countryCode": "mh"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f0.svg",
		"country": "North Macedonia",
		"countryCode": "mk"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f1.svg",
		"country": "Mali",
		"countryCode": "ml"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f2.svg",
		"country": "Myanmar (Burma)",
		"countryCode": "mm"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f3.svg",
		"country": "Mongolia",
		"countryCode": "mn"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f4.svg",
		"country": "Macao Sar China",
		"countryCode": "mo"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f5.svg",
		"country": "Northern Mariana Islands",
		"countryCode": "mp"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f6.svg",
		"country": "Martinique",
		"countryCode": "mq"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f7.svg",
		"country": "Mauritania",
		"countryCode": "mr"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f8.svg",
		"country": "Montserrat",
		"countryCode": "ms"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f9.svg",
		"country": "Malta",
		"countryCode": "mt"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1fa.svg",
		"country": "Mauritius",
		"countryCode": "mu"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1fb.svg",
		"country": "Maldives",
		"countryCode": "mv"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1fc.svg",
		"country": "Malawi",
		"countryCode": "mw"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1fd.svg",
		"country": "Mexico",
		"countryCode": "mx"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1fe.svg",
		"country": "Malaysia",
		"countryCode": "my"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1ff.svg",
		"country": "Mozambique",
		"countryCode": "mz"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1e6.svg",
		"country": "Namibia",
		"countryCode": "na"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1e8.svg",
		"country": "New Caledonia",
		"countryCode": "nc"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1ea.svg",
		"country": "Niger",
		"countryCode": "ne"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1eb.svg",
		"country": "Norfolk Island",
		"countryCode": "nf"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1ec.svg",
		"country": "Nigeria",
		"countryCode": "ng"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1ee.svg",
		"country": "Nicaragua",
		"countryCode": "ni"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1f1.svg",
		"country": "Netherlands",
		"countryCode": "nl"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1f4.svg",
		"country": "Norway",
		"countryCode": "no"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1f5.svg",
		"country": "Nepal",
		"countryCode": "np"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1f7.svg",
		"country": "Nauru",
		"countryCode": "nr"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1fa.svg",
		"country": "Niue",
		"countryCode": "nu"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1ff.svg",
		"country": "New Zealand",
		"countryCode": "nz"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f4-1f1f2.svg",
		"country": "Oman",
		"countryCode": "om"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1e6.svg",
		"country": "Panama",
		"countryCode": "pa"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1ea.svg",
		"country": "Peru",
		"countryCode": "pe"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1eb.svg",
		"country": "French Polynesia",
		"countryCode": "pf"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1ec.svg",
		"country": "Papua New Guinea",
		"countryCode": "pg"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1ed.svg",
		"country": "Philippines",
		"countryCode": "ph"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1f0.svg",
		"country": "Pakistan",
		"countryCode": "pk"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1f1.svg",
		"country": "Poland",
		"countryCode": "pl"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1f2.svg",
		"country": "St. Pierre & Miquelon",
		"countryCode": "pm"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1f3.svg",
		"country": "Pitcairn Islands",
		"countryCode": "pn"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1f7.svg",
		"country": "Puerto Rico",
		"countryCode": "pr"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1f8.svg",
		"country": "Palestinian Territories",
		"countryCode": "ps"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1f9.svg",
		"country": "Portugal",
		"countryCode": "pt"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1fc.svg",
		"country": "Palau",
		"countryCode": "pw"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1fe.svg",
		"country": "Paraguay",
		"countryCode": "py"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f6-1f1e6.svg",
		"country": "Qatar",
		"countryCode": "qa"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f7-1f1ea.svg",
		"country": "Réunion",
		"countryCode": "re"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f7-1f1f4.svg",
		"country": "Romania",
		"countryCode": "ro"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f7-1f1f8.svg",
		"country": "Serbia",
		"countryCode": "yu"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f7-1f1fa.svg",
		"country": "Russia",
		"countryCode": "ru"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f7-1f1fc.svg",
		"country": "Rwanda",
		"countryCode": "rw"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1e6.svg",
		"country": "Saudi Arabia",
		"countryCode": "sa"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1e7.svg",
		"country": "Solomon Islands",
		"countryCode": "sb"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1e8.svg",
		"country": "Seychelles",
		"countryCode": "sc"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1e9.svg",
		"country": "Sudan",
		"countryCode": "sd"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1ea.svg",
		"country": "Sweden",
		"countryCode": "se"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1ec.svg",
		"country": "Singapore",
		"countryCode": "sg"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1ed.svg",
		"country": "St. Helena",
		"countryCode": "sh"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1ee.svg",
		"country": "Slovenia",
		"countryCode": "si"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1ef.svg",
		"country": "Svalbard & Jan Mayen",
		"countryCode": "sj"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1f0.svg",
		"country": "Slovakia",
		"countryCode": "sk"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1f1.svg",
		"country": "Sierra Leone",
		"countryCode": "sl"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1f2.svg",
		"country": "San Marino",
		"countryCode": "sm"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1f3.svg",
		"country": "Senegal",
		"countryCode": "sn"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1f4.svg",
		"country": "Somalia",
		"countryCode": "so"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1f7.svg",
		"country": "Suriname",
		"countryCode": "sr"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1f8.svg",
		"country": "South Sudan",
		"countryCode": "ss"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1f9.svg",
		"country": "São Tomé & Príncipe",
		"countryCode": "st"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1fb.svg",
		"country": "El Salvador",
		"countryCode": "sv"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1fd.svg",
		"country": "Sint Maarten",
		"countryCode": "sx"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1fe.svg",
		"country": "Syria",
		"countryCode": "sy"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1ff.svg",
		"country": "Eswatini",
		"countryCode": "sz"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1e6.svg",
		"country": "Tristan Da Cunha",
		"countryCode": "sh"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1e8.svg",
		"country": "Turks & Caicos Islands",
		"countryCode": "tc"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1e9.svg",
		"country": "Chad",
		"countryCode": "td"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1eb.svg",
		"country": "French Southern Territories",
		"countryCode": "tf"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1ec.svg",
		"country": "Togo",
		"countryCode": "tg"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1ed.svg",
		"country": "Thailand",
		"countryCode": "th"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1ef.svg",
		"country": "Tajikistan",
		"countryCode": "tj"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1f0.svg",
		"country": "Tokelau",
		"countryCode": "tk"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1f1.svg",
		"country": "Timor-Leste",
		"countryCode": "tl"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1f2.svg",
		"country": "Turkmenistan",
		"countryCode": "tm"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1f3.svg",
		"country": "Tunisia",
		"countryCode": "tn"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1f4.svg",
		"country": "Tonga",
		"countryCode": "to"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1f7.svg",
		"country": "Turkey",
		"countryCode": "tr"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1f9.svg",
		"country": "Trinidad & Tobago",
		"countryCode": "tt"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1fb.svg",
		"country": "Tuvalu",
		"countryCode": "tv"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1fc.svg",
		"country": "Taiwan",
		"countryCode": "tw"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1ff.svg",
		"country": "Tanzania",
		"countryCode": "tz"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1fa-1f1e6.svg",
		"country": "Ukraine",
		"countryCode": "ua"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1fa-1f1ec.svg",
		"country": "Uganda",
		"countryCode": "ug"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1fa-1f1f2.svg",
		"country": "U.S. Outlying Islands",
		"countryCode": "um"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1fa-1f1f3.svg",
		"country": "United Nations",
		"countryCode": "un"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1fa-1f1f8.svg",
		"country": "United States",
		"countryCode": "us"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1fa-1f1fe.svg",
		"country": "Uruguay",
		"countryCode": "uy"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1fa-1f1ff.svg",
		"country": "Uzbekistan",
		"countryCode": "uz"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1fb-1f1e6.svg",
		"country": "Vatican City",
		"countryCode": "va"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1fb-1f1e8.svg",
		"country": "St. Vincent & Grenadines",
		"countryCode": "vc"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1fb-1f1ea.svg",
		"country": "Venezuela",
		"countryCode": "ve"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1fb-1f1ec.svg",
		"country": "British Virgin Islands",
		"countryCode": "vg"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1fb-1f1ee.svg",
		"country": "U.S. Virgin Islands",
		"countryCode": "vi"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1fb-1f1f3.svg",
		"country": "Vietnam",
		"countryCode": "vn"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1fb-1f1fa.svg",
		"country": "Vanuatu",
		"countryCode": "vu"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1fc-1f1eb.svg",
		"country": "Wallis & Futuna",
		"countryCode": "wf"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1fc-1f1f8.svg",
		"country": "Samoa",
		"countryCode": "ws"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1fd-1f1f0.svg",
		"country": "Kosovo",
		"countryCode": "xk"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1fe-1f1ea.svg",
		"country": "Yemen",
		"countryCode": "ye"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1fe-1f1f9.svg",
		"country": "Mayotte",
		"countryCode": "yt"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ff-1f1e6.svg",
		"country": "South Africa",
		"countryCode": "za"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ff-1f1f2.svg",
		"country": "Zambia",
		"countryCode": "zm"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f1ff-1f1fc.svg",
		"country": "Zimbabwe",
		"countryCode": "zw"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f3f4-e0067-e0062-e0065-e006e-e0067-e007f.svg",
		"country": "England",
		"countryCode": "uk"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f3f4-e0067-e0062-e0073-e0063-e0074-e007f.svg",
		"country": "Scotland",
		"countryCode": "uk"
	},
	{
		"flag": "https://twemoji.maxcdn.com/2/svg/1f3f4-e0067-e0062-e0077-e006c-e0073-e007f.svg",
		"country": "Wales",
		"countryCode": "uk"
	}
]
  return (
 <>

<div style={{display:"flex",flexWrap: "wrap", gap:"10px", justifyContent:"space-between"}}>
  {allCountries.map((countries)=>(
    <>
    <div style={{height:"200px", width:"300px", borderRadius:"15px", borderWidth:"3px", borderStyle: "solid", paddingLeft:"20px", backgroundColor: "grey", display:"flex", flexDirection: "column",}}>
    <img src={countries.flag}  style={{height:"50px", width:"50px", alignSelf:"center"}}/>
    <p>{countries.country}</p>
    <p>{countries.countryCode}</p>
    </div>
    </>
  ))}
  </div>
</>
  )
}

export default Country