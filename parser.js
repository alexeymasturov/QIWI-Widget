var url_string = "https://oplata.qiwi.com/form/?public_key=5nAq6abtyCz4tcDj89e5w7Y5i524LAFmzrsN6bQTQ3ceEvMvCq55ToeErzhxNemD6rMzCtzRx9jhV5kUUUyG2BC9sqbKjkRVuFjWXicbby5XJjUAnKNcNDdfEZ&amount=1";
var url = new URL(url_string);
var public_key = url.searchParams.get("public_key");
console.log(public_key);