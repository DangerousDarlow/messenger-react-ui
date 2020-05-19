This page gives some troubleshooting tips if things have gone Pete Tong.

#### yarn build failure mentioning FONTAWESOME_NPM_AUTH_TOKEN

Environment variable FONTAWESOME_NPM_AUTH_TOKEN has not been set or does not contain the correct token.

This project uses FontAwesome Pro which requires a token for authentication. File `.npmrc` substitutes the environment variable value when configuring NPM.

This is an example of failure when running `yarn start` on a local development machine.

```
>yarn start
yarn run v1.22.4
error An unexpected error occurred: "Failed to replace env in config: ${FONTAWESOME_NPM_AUTH_TOKEN}".
```

This is an example of failure when building on netlify

```
11:11:12 PM: [2/4] Fetching packages...
11:11:12 PM: error An unexpected error occurred: "https://npm.fontawesome.com/@fortawesome/pro-light-svg-icons/-/5.13.0/pro-light-svg-icons-5.13.0.tgz: Request failed \"401 Unauthorized\"".
11:11:38 PM: Error during Yarn install
11:11:38 PM: Error running command: Build script returned non-zero exit code: 1
11:11:38 PM: Failing build: Failed to build site
11:11:38 PM: Failed during stage 'building site': Build script returned non-zero exit code: 1
11:11:38 PM: Finished processing build request in 52.30387854s
```