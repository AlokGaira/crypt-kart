# crypt-kart

a [Sails v1](https://sailsjs.com) application


### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Mon Dec 03 2018 12:28:15 GMT+0530 (IST) using Sails v1.1.0.

<!-- Internally, Sails used [`sails-generate@1.16.2`](https://github.com/balderdashy/sails-generate/tree/v1.16.2/lib/core-generators/new). -->



<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->
### Project Objectives
<ul>
<li>Integrate sails js CRUD API with Google RPC (prot buf)</li>
<li>sails js model should be accessible with both REST client and Google RPC.</li>
</ul>

### Prequisite
<ul>
<li>Node version > 8</li>
<li>Mongodb should be running in localhost on default port.</li>
</ul>

### How to run
<ul>
<li>Go to directory crypt-kart</li>
<li>npm install</li>
<li>sails lift</li>
<li>Enter 1 when sails asks you for a prompt.</li>
<li>Execute rest and Google RPC API as shown below</li>
</ul>

### Sails API

Changes in the config collection can be done with the help of both Rest APIs and Google RPC as shown below.
#### Get Config By Id

```shell
curl -X GET \
  http://localhost:1337/config/5c04d645943f760a97aa58b7 \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: 8baeb142-e9a0-4ac8-9886-2fc5b4c57560'
```

```$shell
// Get to the root directory crypt-kart and run the follwing command
// Please go inside the corresponding files to update record parameters

node client/find_config.js

```

#### Create a new config
```shell
curl -X POST \
  http://localhost:1337/config \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: 887a4904-658b-42df-b5ba-deb4eb13398e' \
  -d '{
	"jwt_secret": "jwt",
    "timeout_in_ms": "jwt",
    "remote_db_url":"jwt",
    "remote_db_port": 23
}'
```

```$shell
// Get to the root directory crypt-kart and run the follwing command
// Please go inside the corresponding files to update record parameters

node client/insert_config.js

```

#### Delete a config

```shell
curl -X DELETE \
  http://localhost:1337/config/5c0502336d69dd13447982b4 \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: dfc63e8b-19b6-4741-8022-01011b4e8be9' \
  -d '{
	"jwt_secret": "jwt",
    "timeout_in_ms": "jwt",
    "remote_db_url":"jwt",
    "remote_db_port": 23
}'
```

```$shell
// Get to the root directory crypt-kart and run the follwing command
// Please go inside the corresponding files to update record parameters

node client/delete_config.js

```

#### Update a config

```$shell
curl -X PUT \
  http://localhost:1337/config/5c05013e6d69dd13447982b3 \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: 738e843b-e220-41a7-b8fb-37643d463b89' \
  -d '{
	"jwt_secret": "jwte"
}'

node client/delete_config.js

```



