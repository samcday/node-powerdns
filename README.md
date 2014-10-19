# powerdns

Client for the [PowerDNS REST interface][powerdns-rest-api].


## Setup

  var powerdns = require("powerdns");

  var pdnsClient = powerdns("localhost", 8080);


## API

The API supports both standard Node CPS (callbacks) and Promises.

For now, the API only handles dealing with the "[localhost][powerdns-rest-spec-servers]" server.

### Server config

A specific key can be provided to obtain a particular value. If no key is provided, all config is returned.

  pdnsClient.config(function(err, config) {
    console.log(config);
    // --> { "key": "value", "key2": "value2" }
  });

### Zones config.

[powerdns-rest-docs]: https://github.com/PowerDNS/pdns/tree/master/pdns/docs/httpapi
[powerdns-rest-spec-servers]: https://github.com/PowerDNS/pdns/blob/master/pdns/docs/httpapi/api_spec.md#servers